const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateText = async ({ systemPrompt, userPrompt, responseMimeType }) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL;

  if (!apiKey || !model) {
    throw new Error("Missing Gemini API configuration");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const requestBody = {
    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: [
      {
        role: "user",
        parts: [{ text: userPrompt }],
      },
    ],
  };

  if (responseMimeType) {
    requestBody.generationConfig = {
      responseMimeType,
    };
  }

  // Retry temporary server overloads up to 3 times.
  for (let attempt = 1; attempt <= 3; attempt++) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(requestBody),
      signal: AbortSignal.timeout(60000),
    });

    const result = await response.json();

    if (response.ok) {
      const text = result.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("")
        .trim();

      if (!text) {
        throw new Error("Gemini returned an empty response");
      }

      return text;
    }

    if (response.status === 503 && attempt < 3) {
      await sleep(1500 * 2 ** (attempt - 1));
      continue;
    }

    throw new Error(
      `Gemini API error (${response.status}): ${
        result.error?.message || "Unknown error"
      }`,
    );
  }
};

export default generateText;

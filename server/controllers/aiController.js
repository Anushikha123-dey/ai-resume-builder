import Resume from "../models/Resume.js";
import generateText from "../configs/ai.js";

// Enhance professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent || !userContent.trim()) {
      return res.status(400).json({
        message: "Professional summary is required",
      });
    }

    const enhancedContent = await generateText({
      systemPrompt: `You are an expert resume writer.
            Improve the candidate's professional summary.
            Keep it to 1-2 sentences.
            Highlight relevant skills, experience and career objectives.
            Make it compelling and ATS-friendly.
            Return only the improved text, without explanations.`,
      userPrompt: userContent,
    });

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    console.error("Professional summary error:", error.message);

    return res.status(500).json({
      message: "Unable to enhance professional summary. Please try again.",
    });
  }
};

// Enhance job description
// POST: /api/ai/enhance-job-desc
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent || !userContent.trim()) {
      return res.status(400).json({
        message: "Job description is required",
      });
    }

    const enhancedContent = await generateText({
      systemPrompt: `You are an expert resume writer.
            Improve the candidate's job description.
            Write 1-2 concise sentences.
            Highlight responsibilities, achievements and relevant skills.
            Use strong action verbs and quantifiable results where supported.
            Never invent achievements or figures.
            Return only the improved text.`,
      userPrompt: userContent,
    });

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    console.error("Job description error:", error.message);

    return res.status(500).json({
      message: "Unable to enhance job description. Please try again.",
    });
  }
};

// Upload and extract resume information
// POST: /api/ai/upload-resume
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText || !resumeText.trim()) {
      return res.status(400).json({
        message: "Resume text is required",
      });
    }

    const systemPrompt = `
        You are an expert resume parser.
        Extract information accurately from the supplied resume.

        Return a valid JSON object with exactly these fields:

        {
            "professional_summary": "",
            "skills": [],
            "personal_info": {
                "image": "",
                "full_name": "",
                "profession": "",
                "email": "",
                "phone": "",
                "location": "",
                "linkedin": "",
                "website": ""
            },
            "experience": [
                {
                    "company": "",
                    "position": "",
                    "start_date": "",
                    "end_date": "",
                    "description": "",
                    "is_current": false
                }
            ],
            "project": [
                {
                    "name": "",
                    "type": "",
                    "description": ""
                }
            ],
            "education": [
                {
                    "institution": "",
                    "degree": "",
                    "field": "",
                    "graduation_date": "",
                    "gpa": ""
                }
            ]
        }

        Rules:
        - Return JSON only.
        - Do not invent information.
        - Use empty strings for missing text fields.
        - Use empty arrays when information is unavailable.
        - Use false when current employment status is unknown.
        - Preserve the meaning of the original resume.
        `;

    const extractedData = await generateText({
      systemPrompt,
      userPrompt: `Extract the information from this resume:\n\n${resumeText}`,
      responseMimeType: "application/json",
    });

    const parsedData = JSON.parse(extractedData);

    const newResume = await Resume.create({
      userId,
      title,
      ...parsedData,
    });

    return res.status(201).json({
      resumeId: newResume._id,
    });
  } catch (error) {
    console.error("Resume upload error:", error.message);

    return res.status(500).json({
      message: "Unable to process resume. Please try again.",
    });
  }
};

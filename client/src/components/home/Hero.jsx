import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between w-full py-5 px-6 md:px-16 lg:px-24 xl:px-36 border-b border-slate-100">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Resume<span className="text-blue-600">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">
            How it works
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/app?state=login"
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                to="/app?state=register"
                className="px-6 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition"
              >
                Get Started
              </Link>
            </>
          ) : (
            <Link
              to="/app"
              className="px-6 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden relative z-40 bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-5 shadow-lg">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 font-medium"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 font-medium"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 font-medium"
          >
            How it works
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-slate-700 font-medium"
          >
            Contact
          </a>

          {!user ? (
            <>
              <Link
                to="/app?state=login"
                onClick={() => setMenuOpen(false)}
                className="text-blue-600 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/app?state=register"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
              >
                Get Started
              </Link>
            </>
          ) : (
            <Link
              to="/app"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              Dashboard
            </Link>
          )}
        </div>
      )}

      {/* Hero Section */}
      <main className="relative px-6 md:px-16 lg:px-24 xl:px-36 pt-20 md:pt-28 pb-24">
        {/* Background Decoration */}
        <div className="absolute top-10 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              AI-powered resume creation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">
              Build a resume that
              <span className="block text-blue-600 mt-2">opens new doors.</span>
            </h1>

            <p className="mt-7 text-base md:text-lg leading-8 text-slate-500 max-w-xl mx-auto lg:mx-0">
              Create professional, job-ready resumes with intelligent AI
              assistance. Highlight your skills, showcase your experience and
              take the next step in your career.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/app"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Create Your Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 font-semibold rounded-xl transition flex items-center justify-center"
              >
                Explore Features
              </a>
            </div>

            {/* Small Highlights */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-7 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                AI assistance
              </span>

              <span className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                Professional templates
              </span>

              <span className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                Easy PDF export
              </span>
            </div>
          </div>

          {/* Right Resume Preview Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-200 w-full max-w-md p-7 md:p-9 rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Resume Header */}
              <div className="flex items-start justify-between border-b border-slate-200 pb-6">
                <div>
                  <div className="h-5 w-36 bg-slate-800 rounded mb-3"></div>
                  <div className="h-2.5 w-48 bg-slate-300 rounded"></div>
                  <div className="h-2.5 w-40 bg-slate-200 rounded mt-2"></div>
                </div>

                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="8" rx="2" />
                  </svg>
                </div>
              </div>

              {/* Resume Sections */}
              <div className="mt-7 space-y-6">
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                    Profile
                  </h3>
                  <div className="h-2.5 w-full bg-slate-200 rounded"></div>
                  <div className="h-2.5 w-11/12 bg-slate-200 rounded mt-2"></div>
                  <div className="h-2.5 w-4/5 bg-slate-200 rounded mt-2"></div>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                    Experience
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-32 bg-slate-700 rounded"></div>
                    <div className="h-2 w-16 bg-slate-300 rounded"></div>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 rounded mt-3"></div>
                  <div className="h-2.5 w-10/12 bg-slate-200 rounded mt-2"></div>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "Node.js", "MongoDB"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                    Education
                  </h3>
                  <div className="h-2.5 w-3/4 bg-slate-700 rounded"></div>
                  <div className="h-2 w-1/2 bg-slate-200 rounded mt-2"></div>
                </div>
              </div>

              {/* AI Badge */}
              <div className="absolute -right-4 -top-5 bg-white border border-blue-100 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    AI Enhanced
                  </p>
                  <p className="text-[10px] text-slate-500">Resume ready</p>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute -left-4 bottom-10 bg-white border border-slate-100 shadow-lg rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-slate-800">
                  Professional design
                </p>
                <p className="text-[10px] text-blue-600 mt-1">
                  Ready to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="bg-slate-50 py-24 px-6 md:px-16 lg:px-24 xl:px-36"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Features
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Everything you need to create a better resume
            </h2>

            <p className="text-slate-500 mt-5 leading-7">
              Simple tools to help you present your skills and experience in a
              clear and professional way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: "✦",
                title: "AI Content Enhancement",
                description:
                  "Improve your professional summary and job descriptions with AI assistance.",
              },
              {
                icon: "▤",
                title: "Professional Templates",
                description:
                  "Choose from clean resume layouts designed to present your information clearly.",
              },
              {
                icon: "✎",
                title: "Easy Resume Editing",
                description:
                  "Add and update your personal details, education, experience and skills.",
              },
              {
                icon: "◈",
                title: "Live Preview",
                description:
                  "See how your resume looks while you make changes.",
              },
              {
                icon: "↓",
                title: "PDF Download",
                description:
                  "Download your completed resume and keep a copy ready for applications.",
              },
              {
                icon: "♧",
                title: "Secure Account",
                description:
                  "Register and access your resumes through your personal account.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-6">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-500 leading-7 mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 px-6 md:px-16 lg:px-24 xl:px-36"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Simple process
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
            Create your resume in three steps
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">
            {[
              {
                number: "01",
                title: "Create your account",
                description:
                  "Sign up and access your personal resume dashboard.",
              },
              {
                number: "02",
                title: "Add your details",
                description:
                  "Enter your education, experience, skills and professional summary.",
              },
              {
                number: "03",
                title: "Enhance and download",
                description:
                  "Use AI assistance, preview your resume and download the final PDF.",
              },
            ].map((step, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-6">
                <p className="text-4xl font-bold text-blue-600">
                  {step.number}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-5">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-7 mt-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id="contact" className="px-6 md:px-16 lg:px-24 xl:px-36 pb-24">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl px-8 py-16 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to build your next resume?
          </h2>

          <p className="text-blue-100 mt-5 max-w-xl mx-auto leading-7">
            Take the next step in your career with a resume that presents your
            skills and experience professionally.
          </p>

          <Link
            to="/app"
            className="inline-flex mt-9 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-6 md:px-16 lg:px-24 xl:px-36">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-bold text-slate-900">
            Resume<span className="text-blue-600">AI</span>
          </Link>

          <p className="text-sm text-slate-500 text-center">
            Build your resume. Present your potential.
          </p>

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} ResumeAI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;

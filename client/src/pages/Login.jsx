import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[400px] w-full text-center border border-slate-200 rounded-2xl px-8 py-8 bg-white shadow-xl shadow-blue-100/50"
      >
        {/* Brand Name */}
        <h1 className="text-blue-600 text-3xl font-bold tracking-tight">
          ResumeAI
        </h1>

        <p className="text-slate-500 text-sm mt-2">
          Build your professional resume with AI
        </p>

        {/* Login Heading */}
        <h2 className="text-slate-900 text-2xl mt-8 font-semibold">
          {state === "login" ? "Welcome Back!" : "Create Account"}
        </h2>

        <p className="text-slate-500 text-sm mt-2">
          {state === "login"
            ? "Login to continue to your account"
            : "Sign up to get started with ResumeAI"}
        </p>

        {/* Name Field */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-slate-200 focus-within:border-blue-500 h-12 rounded-xl overflow-hidden px-4 gap-3">
            <User2Icon size={17} className="text-slate-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border-none outline-none w-full text-sm text-slate-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="flex items-center w-full mt-5 bg-white border border-slate-200 focus-within:border-blue-500 h-12 rounded-xl overflow-hidden px-4 gap-3">
          <Mail size={17} className="text-slate-400" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border-none outline-none w-full text-sm text-slate-700"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center mt-4 w-full bg-white border border-slate-200 focus-within:border-blue-500 h-12 rounded-xl overflow-hidden px-4 gap-3">
          <Lock size={17} className="text-slate-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none w-full text-sm text-slate-700"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-7 w-full h-12 rounded-xl text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-200"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        {/* Switch Login / Signup */}
        <p className="text-slate-500 text-sm mt-6 mb-3">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="ml-1 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
          >
            {state === "login" ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;

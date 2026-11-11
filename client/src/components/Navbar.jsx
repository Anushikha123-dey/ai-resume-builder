import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <div className="shadow-sm bg-white border-b border-slate-100">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 text-slate-800">
        {/* ResumeAI Branding */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-blue-600">
            ResumeAI
          </span>
        </Link>

        {/* User and Logout */}
        <div className="flex items-center gap-5 text-sm">
          <p className="max-sm:hidden text-slate-600 font-medium">
            Hi, {user?.name}
          </p>

          <button
            onClick={logoutUser}
            className="bg-white text-blue-600 hover:bg-blue-50 border border-blue-200 px-6 py-2 rounded-lg font-medium active:scale-95 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

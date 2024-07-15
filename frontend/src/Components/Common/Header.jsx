import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAllAuthData } from "../../store/Auth";
import AuthAPI from "../../api/auth/auth";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthAPI.logout()
      .then(() => {
        toast.success("User Logout");
        localStorage.removeItem("token"); 
        dispatch(clearAllAuthData()); 
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          Posts App
        </h1>
        <div className="md:flex md:items-center md:space-x-4 md:mt-0 mt-4">
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

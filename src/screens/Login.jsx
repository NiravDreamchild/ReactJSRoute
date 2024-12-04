import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, logout } = useAuth();

  return (
    <div className=" flex justify-center items-center flex-col">
      <h1 className=" bg-blue-600 text-white text-5xl  p-5">Login</h1>
      <div>
        <button
          onClick={() => {
            login("user");
          }}
          className=" bg-green-400 p-2 rounded-xl mx-6"
        >
          Login as User
        </button>
        <button
          onClick={() => {
            login("admin");
          }}
          className=" bg-green-400 p-2 rounded-xl m-6"
        >
          Login as Admin
        </button>
        <button
          onClick={() => {
            logout();
          }}
          className=" bg-green-400 p-2 rounded-xl mx-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";

const HeaderButton = ({ title, reDirect }) => {
  return (
    <li>
      <div className=" bg-cyan-300 text-white py-1 px-3 rounded-md">
        <Link to={reDirect}>{title}</Link>
      </div>
    </li>
  );
};

export default HeaderButton;

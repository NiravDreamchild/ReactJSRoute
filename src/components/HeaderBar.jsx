import React from "react";
import HeaderButton from "./HeaderButton";

const HeaderBar = () => {
  return (
    <div>
      <ul className="flex  gap-10">
        <HeaderButton title="Login" reDirect="/" />
        <HeaderButton title="User" reDirect="/user" />
        <HeaderButton title="Admin" reDirect="/admin" />
        <HeaderButton title="About" reDirect="/about" />
      </ul>
    </div>
  );
};

export default HeaderBar;

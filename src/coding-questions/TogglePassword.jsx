import { useState } from "react";
import { CgEye } from "react-icons/cg";
import { GoEyeClosed } from "react-icons/go";

const TogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleToggleButton = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div>
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter Password"
        />
        <span onClick={() => handleToggleButton()}>
          {isPasswordVisible ? <CgEye /> : <GoEyeClosed />}
        </span>
        <p>Password {isPasswordVisible ? "Visible" : "Hidden"}</p>
      </div>
    </>
  );
};

export default TogglePassword;

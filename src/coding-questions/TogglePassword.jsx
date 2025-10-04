import { Eye, EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";

const TogglePassword = () => {
  const [isPasswordVisble, setIsPasswordVisible] = useState(false);
  const handleToggleButton = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div>
        <h2>Toggle Password</h2>
        <input
          type={isPasswordVisble ? "text" : "password"}
          placeholder="Enter Password"
        />
        <span onClick={() => handleToggleButton()}>
          {isPasswordVisble ? <EyeIcon /> : <EyeOff />}
        </span>
        <p>Password {isPasswordVisble ? "Visible" : "Hidden"}</p>
      </div>
    </>
  );
};

export default TogglePassword;

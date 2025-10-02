import { useState , useRef} from "react";
const InputFocus = () => {
  const [inputText, setInputText] = useState("");
  const inputElement = useRef();
  const handleButton = () => {
    inputElement.current.focus();
  }
  return (
    <>
      <input
        type="text"
        placeholder="Type Here.."
        ref={inputElement}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={()=>handleButton()}>Click</button>
      {inputText}
    </>
  );
};
export default InputFocus;

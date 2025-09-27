import { useState } from "react";

const ChipsInput = () => {
  const [inputText, setInputText] = useState("");
  const [chipsArr, setChipsArr] = useState([]);
  const handleKeyfun = (e) => {
    //add chip to chips arr
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChipsArr((prev) => [...prev, inputText]);
      setInputText("");
    }
  };
  const handleDeleteButton = (index) => {
    const copyChipsArr = [...chipsArr];
    copyChipsArr.splice(index, 1);
    setChipsArr(copyChipsArr);
  };
  return (
    <div style={{ alignItems: "center" }}>
      <div>
        <h1>Chips Input Question</h1>
        <input
          type="text"
          placeholder="Enter something Here...."
          value={inputText}
          onKeyDown={(e) => handleKeyfun(e)}
          onChange={(e) => setInputText(e.target.value)}
          style={{padding:"10px", margin:"3px"}}
        ></input>
        <div>
          {chipsArr.map((chip, index) => (
            <div
              style={{
                background: "Gray",
                padding: "5px",
                margin: "5px",
                width: "150px",
                borderRadius: 10,
                color:"white"
              }}
            >
              {chip}
              <button
                style={{ color: "red" }}
                onClick={() => handleDeleteButton(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChipsInput;

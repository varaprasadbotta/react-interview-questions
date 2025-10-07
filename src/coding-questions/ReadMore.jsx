import { useState } from "react";
const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggleButton = () => {
    setIsExpanded((prev) => !prev);
  };
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;
  return (
    <div>
      <p>{isExpanded ? text : text.substring(0, 100)}...</p>
      <button onClick={() => handleToggleButton()}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};
export default ReadMore;

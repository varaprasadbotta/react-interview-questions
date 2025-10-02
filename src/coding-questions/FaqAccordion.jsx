import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import './FaqAccordion.css';

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButton = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mainContainer">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => handleButton(index)} className="faq-question">
            <span>{faq.question}</span>
            <span>
              {activeIndex === index ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </button>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;

import { useState } from "react";
import { FaDochub } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./FaqAccordion.css";

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
  const handleButtonClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item">
            <button
              onClick={() => handleButtonClick(index)}
              className="faq-question"
            >
              <span className="faq-question">{faq.question}</span>
              <span>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqAccordion;

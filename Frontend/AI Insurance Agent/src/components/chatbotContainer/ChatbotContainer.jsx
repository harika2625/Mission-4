import React from "react";
import "./ChatbotContainer.css";

const ChatbotContainer = ({ children }) => {
  return <div className="container chatbot-container">{children}</div>;
};

export default ChatbotContainer;

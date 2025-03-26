import React from "react";
import "./ChatbotToggle.css";

const ChatbotToggle = ({ toggleChatbot, showChatbot }) => {
  return (
    <button onClick={toggleChatbot} id="chatbot-toggler">
      {showChatbot ? (
        <span className="material-symbols-rounded">close</span>
      ) : (
        <span className="material-symbols-rounded">mode_comment</span>
      )}
    </button>
  );
};

export default ChatbotToggle;

import React, { useRef, useEffect } from "react";
import Markdown from "react-markdown";
import "./ChatHistory.css";

const ChatHistory = ({ conversationHistory }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversationHistory]);

  return (
    <div className="AI-response">
      {conversationHistory.map((entry, index) => (
        <div key={index} className={`chat-entry ${entry.role}`}>
          <strong>{entry.role === "user" ? "Me" : "Tina"}: </strong>
          <span>
            <Markdown>{entry.parts[0].text}</Markdown>
          </span>
        </div>
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ChatHistory;

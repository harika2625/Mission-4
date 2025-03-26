import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import ChatbotToggle from "./components/chatbotToggle/ChatbotToggle";
import ChatbotContainer from "./components/chatbotContainer/ChatbotContainer";
import ChatHistory from "./components/chatHistory/ChatHistory";
import HumanResponse from "./components/humanResponse/HumanResponse";
import Footer from "./components/common/Footer";

const App = () => {
  const [conversationHistory, setConversationHistory] = useState([]);
  const [userResponse, setUserResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const sendMessage = async (message) => {
    try {
      setLoading(true);

      const updatedHistory = [
        ...conversationHistory,
        { role: "user", parts: [{ text: message }] },
      ];
      setConversationHistory(updatedHistory);

      const response = await fetch("http://localhost:3000/InsuranceAgent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat: message,
          history: updatedHistory,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { role: "model", parts: [{ text: data.text }] },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
    if (!showChatbot) {
      sendMessage(""); // Trigger AI greeting when opening chatbot
    }
  };

  const handleInputChange = (e) => {
    setUserResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(userResponse);
    setUserResponse("");
  };

  return (
    <>
      <Navbar />
      <ChatbotToggle toggleChatbot={toggleChatbot} showChatbot={showChatbot} />
      {showChatbot && (
        <ChatbotContainer>
          <h1>AI Insurance Agent</h1>
          <ChatHistory conversationHistory={conversationHistory} />
          <HumanResponse
            userResponse={userResponse}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </ChatbotContainer>
      )}
      <Footer />
    </>
  );
};

export default App;

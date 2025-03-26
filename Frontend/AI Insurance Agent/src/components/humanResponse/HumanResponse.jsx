import React from "react";
import "./HumanResponse.css";
const HumanResponse = ({
  userResponse,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="human-response">
      <form onSubmit={handleSubmit}>
        <input
          className="response"
          type="text"
          placeholder="Type your response"
          value={userResponse}
          onChange={handleInputChange}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default HumanResponse;

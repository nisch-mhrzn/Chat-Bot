import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) {
      return;
    }

    inputRef.current.value = ""; // Clear input
    setChatHistory((history) => {
      const updatedHistory = [
        ...history,
        { role: "user", text: userMessage },
      ];

      // Simulate bot response
      setTimeout(() => {
        setChatHistory((currentHistory) => [
          ...currentHistory,
          { role: "model", text: "Thinking ..." },
        ]);
        generateBotResponse(updatedHistory);
      }, 600);

      return updatedHistory; // Ensure the state is updated
    });
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="message-input"
        placeholder="Type your message"
        required
      />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
};

export default ChatForm;

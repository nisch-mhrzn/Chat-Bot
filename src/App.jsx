import { useEffect, useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef =useref();
  const updateHistory= (text)=>{
    setChatHistory(prev => [...prev.filter(msg =>msg.text !=="Thinking ..."),{role:"model",text}])
  }
  const generateBotResponse = async (history) => {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
      

    };
    console.log(JSON.stringify({ contents: history }))

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(data);
      const apiResonseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
      updateHistory(apiResonseText);
      const botMessage = { role: 'model', text: data.reply }; // Assuming API sends 'reply'
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating bot response:', error);
    }
  };
useEffect(() =>{
chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight,behavior: 'smooth'});
},[chatHistory]);
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chatbot-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
            <span>Welcome to our chatbot!</span>
          </div>
          <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </div>
        {/* chatbbody */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hi! How can I assist you today?</p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

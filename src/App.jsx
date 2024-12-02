import { useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
const App = () => {
  const [chatHistory,setChatHistory] = useState([])
  const generateBotResponse =(history)=>{
    console.log(history);

  }
  return (
    <div className='container'>
      <div className='chatbot-popup'>
        {/* chat header */}
        <div className='chatbot-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
            <span>Welcome to our chatbot!</span>
          </div>
          <button className='material-symbols-outlined'>
            keyboard_arrow_down
          </button>
        </div>
        {/* chatbody */}
        <div className='chat-body'>
          <div className='message bot-message'>
            <ChatbotIcon />
            <p className='message-text'>Hi! How can I assist you today?</p>
          </div>
          {chatHistory.map((chat,index)=>(
            <ChatMessage key={index} chat={chat}/>
          ))}
          
          
        </div>
        {/* chat footer */}
        <div className='chat-footer'>
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  );
};

export default App;

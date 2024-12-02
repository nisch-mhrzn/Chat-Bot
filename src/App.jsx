import ChatbotIcon from './components/ChatbotIcon';

const App = () => {
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
          <div className='message user-message'>
            <ChatbotIcon />
            <p className='message-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              iusto rem in omnis iure incidunt accusamus voluptatum? Neque culpa
              sed provident itaque tempore sunt? Fugit dicta totam facilis ad
              ipsa!
            </p>
          </div>
        </div>
        {/* chat footer */}
        <div className='chat-footer'>
          <form action='#' className='chat-footer'>
            <input
              type='text'
              className='message-input'
              placeholder='Type your Message'
              required
            />
            <button className='material-symbols-outlined'>
              arrow_upward
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

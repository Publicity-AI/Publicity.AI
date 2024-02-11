import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <h1 className = "heading">Publicity.AI</h1>
      <div className = "mainContainer">
        <div className = "instructions">
          <div className = "i" id="h"> Ask the bot prompts with any of these keywords</div>
          <div className = "i"> 1. Campaign name</div>
          <div className = "i"> 2. Campaign idea</div>
          <div className = "i"> 3. Campaign tactics</div>
          <div className = "i"> 4. Call to action</div>
          <div className = "i"> 5. Duration</div>
          <div className = "i"> 6. Outcome</div>
        </div>
        <div className = "chatbox">
          <ChatBox/>
        </div>
      </div>
    </div>
  );
}

export default App;

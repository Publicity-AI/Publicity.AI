import { createChatBotMessage } from 'react-chatbot-kit';
import { createClientMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Hey , I'm Ms. chatbot ! What can i help you with?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#FC6C85',
    },
    chatButton: {
      backgroundColor: '#A94064',
    },
  },
};

export default config;
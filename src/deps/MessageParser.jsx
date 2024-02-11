import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(message.includes('hello')){
      actions.handleHello();
    }

    if(message.includes('campaign name') || message.includes('Campaign name') || message.includes('name of the campaign') || message.includes('Name of the campaign')){
      actions.handleOne();
    }

    if(message.includes('Idea') || message.includes('idea')){
      actions.handleTwo();
    }

    if(message.includes('Tactics') || message.includes('tactics')){
      actions.handleThree1();
      actions.handleThree2();
      actions.handleThree3();
    }
    
    if(message.includes('call to action') || message.includes('Call to action')){
      actions.handleFour();
    }

    if(message.includes('duration') || message.includes('Duration')){
      actions.handleFive();
    }

    if(message.includes('outcome') || message.includes('Outcome')){
      actions.handleSix();
    }

    if(message.includes('bye')){
      actions.handleBye();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
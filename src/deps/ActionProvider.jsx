import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOne = () => {
    const botMessage = createChatBotMessage('Publicity.AI ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTwo = () => {
    const botMessage = createChatBotMessage(" In today's fast-paced digital landscape, Public Relations (PR) professionals are constantly seeking innovative ways to enhance their strategies and campaigns for maximum impact and effectiveness. Harnessing the power of Artificial Intelligence (AI) presents a transformative opportunity to revolutionize PR practices. This campaign aims to educate PR professionals on the myriad ways AI can be leveraged to optimize their strategies, streamline workflows, and ultimately achieve unparalleled results.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThree1 = () => {
    const botMessage = createChatBotMessage(`•	Paid: 
    `);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    const botMessage1 = createChatBotMessage(`(1)	AI PR Intelligence Summit: Host an exclusive summit bringing together industry leaders, AI experts, and PR professionals to discuss the latest trends and innovations in AI-driven PR intelligence. The summit will feature keynote presentations, panel discussions, and interactive workshops covering topics such as AI-powered media analysis, predictive analytics, and audience segmentation.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));

    const botMessage2 = createChatBotMessage(`(2)	AI PR Intelligence Toolkit: Develop a comprehensive toolkit comprising AI-powered software, platforms, and resources tailored for PR professionals. This toolkit will include tools for media monitoring, sentiment analysis, competitor tracking, and influencer identification, along with guides and tutorials on their implementation.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));

    const botMessage3 = createChatBotMessage(`(3)	AI-Enhanced Media Lab: Set up a media lab equipped with AI tools and resources for participants to experiment with during the event. Provide access to AI-driven media monitoring platforms, sentiment analysis tools, and content generation algorithms. Encourage participants to explore the possibilities of AI in optimizing PR strategies and campaigns.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage3],
    }));
  };

  const handleThree2 = () => {
    const botMessage = createChatBotMessage(`•	Owned:  
    `);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    const botMessage1 = createChatBotMessage(`(1)	Digitize the PR and journalists’ community: Create Publicity.AI, a Bing-operated community (similar to OneSource) where members get to engage with each other through interactive keywords which help PR and journalists identify relevant contacts through a simple keyword search.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));

    const botMessage2 = createChatBotMessage(`(2)	AI taskforce: Led by SLTs servicing tech clients in collaboration with an AI expert to digitize SOPs internally who will overlook this. This could begin with an AI-powered personalized news bot which identifies the right stories for daily coverage report/news summaries and optimizes time. To keep the momentum going, we will utilize company town halls to discuss internal progress in terms of AI integration. To push the adoption rates, this can be linked with employees’ KPIs where they have one successful illustration of AI integration in their work on a quarterly basis.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));

    const botMessage3 = createChatBotMessage(`(3)	Quarterly newsletter: Capturing success stories for AI-driven PR activations.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage3],
    }));
  };

  const handleThree3 = () => {
    const botMessage = createChatBotMessage(`•	Earned:
    `);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    const botMessage1 = createChatBotMessage(`(1)	Amplification on in-house channels like Workplace and Yammer by leadership and employees.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));

    const botMessage2 = createChatBotMessage(`(2)	Client testimonials on e-mail validating the success of AI-driven PR activations for the brand.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));

    const botMessage3 = createChatBotMessage(`(3)	Media outreach for agency leadership on pivoting the company strategy to the AI revolution.`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage3],
    }));
  };

  const handleFour = () => {
    const botMessage = createChatBotMessage(`Encourage PR professionals to explore and unlock AI-driven growth opportunities in their craft and for client servicing.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFive = () => {
    const botMessage = createChatBotMessage(`6 months`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSix = () => {
    const botMessage1 = createChatBotMessage(`(1) Better trust in AI and its capabilities in enhancing efficiency`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));

    const botMessage2 = createChatBotMessage(`(2)	Increased integration of AI in PR SOPs, outreach and efforts`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));

    const botMessage3 = createChatBotMessage(`(3)	Proven credibility and result of AI integration`)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage3],
    }));
  };

  const handleBye = () => {
    const botMessage = createChatBotMessage('Byeeeeeeee!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOne,
            handleTwo,
            handleThree1,
            handleThree2,
            handleThree3,
            handleFour,
            handleFive,
            handleSix,
            handleBye,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
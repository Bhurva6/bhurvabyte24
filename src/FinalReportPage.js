import React, { useState } from 'react';
import './FinalReportPage.css';

function FinalReportPage() {
  // State to manage user input
  const [userInput, setUserInput] = useState('');
  // State to manage predefined prompts and responses
  const [prompts] = useState([
    { prompt: 'What was the most challenging thing you faced so far?', response: 'The most challenging thing I faced so far was learning AEM! This was the most technically challenging tech stack that I have faced so far.' },
    { prompt: 'What was the most memorable part of your internship?', response: 'Definitely the whole experience of DevTalk 3.0!' },
    { prompt: 'What are your top 3 learnings?', response: 'Everyday was full of learnings but the top 3 were: There is no substitute to hard work, Team work makes the dream work and Get your basics right! ' }
  ]);
  // State to manage selected prompts and responses
  const [selectedPrompts, setSelectedPrompts] = useState([]);

  // Function to handle prompt selection
  const handlePromptClick = (response) => {
    setSelectedPrompts(prevSelectedPrompts => [...prevSelectedPrompts, response]);
  };

  // Function to handle clearing responses
  const handleClear = () => {
    setSelectedPrompts([]);
  };

  return (
    <div className="report-container">
      <a href="/" className="home-button">← 🏡</a>       
      <div className="report-content">
        <div className="report-column">
          <h2>My Report</h2>
          <p>Everything that I have done so far at a glance</p>
          <div className="report-grid">
            <div className="report-box">
              <h3>XAOP R2 & R3 POD Contributions</h3>
              <ul>            
                <li>Title Offer Banner & CC Form Widget</li>
                <li>2 CRs - Sorting and showing of Banners by the set priority which impacts the amount of clicks we get and that inturn affects the likeliness of winning customers back and Removing the entire section with Heading incase there is no data for banners which is an effective fallback for streamlined UI</li>
              </ul>
            </div>
            <div className="report-box">
              <h3>Achievements</h3>
              <ul>
                <li>2nd runner-up DevTalk 3.0</li>
                <li>Top Web Development Voice on Linkedin for my Open Source contribution at BuilderIO</li>
              </ul>
            </div>
            <div className="report-box">
              <h3>MarTrix Contribution</h3>
              <ul>
                <li>MarTrix Design</li>
                <li>Set up frontend for MarTrix</li>
                <li>MarTrix Notification system</li>
                <li>Integration and Routing of MarTrix</li>
              </ul>
            </div>
            <div className="report-box">
              <h3>Learnings</h3>
              <ul>
                <li>EXTREME OWNERSHIP</li>
                <li>
                  Mastery of specific programming languages, frameworks, or tools used in the internship, such as React, Tailwind CSS, etc.
                </li>
                <li>Learning new tech stacks like AEM</li>
                <li>Knowledge of web performance optimization techniques and best practices.</li>
                <li>Attention to detail and quality assurance, ensuring the delivery of high-quality work.</li>
                <li>Effective communication and time management</li>
                <li>Adaptability and prioritization</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="report-divider"></div>
        <div className="report-column">
          <h2>Ask Me Anything</h2>
          <p>Click on any of these prompts below to ask me anything and everything about my internship journey so far 🙋‍♀️</p>
          <div className="chat-room">
            {/* Display selected prompts */}
            <div className="selected-prompts">
              {selectedPrompts.map((response, index) => (
                <div key={index} className="response">
                  {response}
                </div>
              ))}
            </div>
            {/* Display prompts */}
            <div className="prompt-container">
              {prompts.map((item, index) => (
                <div key={index} className="prompt" onClick={() => handlePromptClick(item.response)}>
                  {item.prompt}
                </div>
              ))}
            </div>
            {/* Input box and clear button */}
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Working to handle your custom prompts... 🏗️"
              />
              <button className='clear-button' onClick={handleClear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalReportPage;

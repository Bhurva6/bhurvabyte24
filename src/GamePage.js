import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

function GamePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    subtitle1: '',
    bulletPoints1: [],
    subtitle2: '',
    bulletPoints2: []
  });
  const [currentElement, setCurrentElement] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [girlPosition, setGirlPosition] = useState(0);
  const [showRestartButton, setShowRestartButton] = useState(false);

  const elements = [
    { type: 'milestone', name: 'January', position: 5, title: 'From Bootcamp to Build: Launching My Internship Journey', description: 'Learning the tools, building the foundation', subtitle1: 'What I did', bulletPoints1: ['Successfully completed MERN stack development bootcamp, culminating in a full-stack e-commerce platform.' , 'Onboarded to the tech - AEM, Caddy, and setting up the "3 in 1 CMS" codebase.', 'Designed the user interface for the intern project "Matrix" (KPI portal) using Figma.', 'Established the frontend repository for "Matrix" utilizing React, Tailwind CSS, and Vite.'], subtitle2: 'What I learnt', bulletPoints2: ['Transitioned from bootcamp knowledge to real-world development tools and workflows.', 'Successfully applied UI/UX design principles through Figma.', 'Learned modern frontend development frameworks - React, Tailwind CSS, and Vite.'] },
    { type: 'milestone', name: 'January', position: 15, title: 'Optimizing the User Experience: Mastering Core Web Vitals', description: ' From thresholds to tickets, tackling performance bottlenecks', subtitle1: 'What I did', bulletPoints1: ['Performed a deep dive into Core Web Vitals (LCP, FID, CLS), understanding their impact on user experience and business metrics.', 'Established expertise in Core Web Vitals thresholds and learnt optimization strategies.', 'Successfully resolved 8 performance-related tickets, improving the loading speed and responsiveness of critical URLs.'], subtitle2: 'What I learnt', bulletPoints2: ['Developed a comprehensive understanding of Core Web Vitals and their role in web performance.', 'Mastered the optimization techniques for improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).', 'Gained practical experience in applying performance optimization strategies through real-world ticketing system.'] },
    { type: 'hurdle', name: 'Hurdle 1', position: 25, title: 'Conquering the Codebase: My Navigation Through the Unknown', description: 'Embracing the challenge of understanding a complex codebase to optimize Core Web Vitals (CWV).', bulletPoints1: ['Deciphering the Landscape: Initially struggled to grasp the existing codebase structure, component organization, and best practices for CWV implementation.', 'Finding the Tools: Faced difficulty locating the relevant components within the codebase and identifying the most effective techniques for CWV optimization.', 'Charting the Course: Uncertain about the best approach for tackling CWV improvements within the unfamiliar codebase.'], subtitle2: '', bulletPoints2: [] },
    { type: 'milestone', name: 'February', position: 35, title: ' From Static to Stellar: Building a Feature-Rich Solid Component', description: 'Upgrading a component, unlocking new possibilities  ✨', subtitle1: 'What I did', bulletPoints1: ['Successfully transformed a pre-existing static "Features & Benefits" component into a robust Solid JS component', 'Championed the conversion to Solid JS, leveraging its advantages for maintainability, performance, and reusability. ♻️', 'Implemented comprehensive fallback scenarios for content retrieval: prioritized SKUs, then APIs, and finally AEM authoring.','Submitted my first pull request (PR), adhering to the established development workflow and code review process. ✅'], subtitle2: 'What I learnt', bulletPoints2: ['Mastered the creation of Solid JS components, understanding their benefits over static components.', 'Gained practical experience in implementing fallback mechanisms for content retrieval. ️', 'Learned the process for creating and submitting pull requests, contributing effectively to the development workflow.'] },
    // { type: 'hurdle', name: 'Hurdle 2', position: 32.5, title: 'Building Blocks', description: "Overcoming challenges to develop a robust 'Features & Benefits' component while adapting to the company's development culture.", bulletPoints1: ["Shifting Gears: Adapting to the team's emphasis on thorough testing, prioritizing it over rapid development.", "Striving for Perfection: Embracing the company's commitment to 'getting things right the first time' minimizing errors for a high-quality product.", 'Learning from Missteps: Accepting the concept of "0 room for error but infinite room for learning," viewing mistakes as opportunities for growth.','Embracing the Process: Gradually internalized the importance of thorough testing, leading to a more robust and reliable component.'], subtitle2: '', bulletPoints2: [] },
    { type: 'milestone', name: 'March', position: 45, title: 'Solid Foundations, Stellar Components: From Blueprint to Build', description: 'Development of Solid JS components with a focus on best practices', subtitle1: 'What I did', bulletPoints1: ['Embarked on the mission of crafting two critical Solid JS components - the Title Offer Banner and CC Form Widgets ', 'Utilized my debugging prowess to identify and eliminate pesky bugs within the existing component ecosystem, fostering a more robust codebase'], subtitle2: 'What I learnt', bulletPoints2: ['Mastered the art of constructing Solid JS components from scratch, gaining a deeper understanding of their internal architecture. ️', 'Achieved fluency in the BEM (Block Element Modifier) naming convention, ensuring a cleaner, more maintainable codebase for future collaboration. ✨', 'Evolved my learning style to leverage the power of AI resources, independently seeking solutions before engaging human assistance.'] },
    { type: 'trophy', name: 'Trophy', position: 60, title: "From Basics to Badge: Conquering Open Source & LinkedIn's Top 10%", description: 'Thinking outside the box, fueled by mentorship', subtitle1: 'What I did', bulletPoints1: ["Inspired by Rajiv Verma's guidance, I embarked on an open-source journey, contributing to the BuilderIO Figma-to-HTML plugin"," MarTech's 'Think outside the box' mentality pushed me to tackle the complex challenge of handling icons and images within the HTML generation process.", "Through innovative solutions and training with diverse icon libraries and image sets, I significantly improved the plugin's accuracy from 76% to 82%."], subtitle2: 'What I learnt', bulletPoints2: ['This experience solidified the importance of mastering the basics, as they formed the foundation for tackling complex open-source problems.', ' Open source ignited my passion for pushing boundaries and seeking innovative solutions that improve existing tools.', 'Challenge the norms'] },
    // { type: 'hurdle', name: 'Hurdle 3', position: 52.5, title: 'Juggling Act: Mastering the Multitasking Marathon', description: 'Embracing the dynamic internship environment and navigating the demands of concurrent tasks.', bulletPoints1: ['Context Switching Chaos: Faced the initial hurdle of efficiently switching focus between DevTalk 3.0 prep, POD tasks (team projects), bug fixes, ongoing development of the MarTrix project, and exploring open-source contributions ','Developed strong prioritization skills, ensuring critical tasks received necessary attention without neglecting ongoing projects.','Cultivated the ability to learn and adapt quickly, effectively absorbing information from various sources.'], subtitle2: '', bulletPoints2: [] },
    { type: 'milestone', name: 'April', position: 75, title: 'MarTrix: Firebase Fortification & Bug Blitzkrieg', description: 'Seamless integration & conquering bugs', subtitle1: 'What I did', bulletPoints1: ['Firebase Fortification: Strategically implemented Firebase Cloud Messaging (FCM) to fortify MarTrix with a robust and scalable notification system', 'Resolved 20 bugs ranging from logical to styling changes of various components.'], subtitle2: 'What I learnt', bulletPoints2: ["Mastered the art of seamlessly integrating Firebase, a real-time backend platform, into our existing MarTrix's MERN stack architecture.", 'Honed the ability to deliver high-quality code within tight deadlines, demonstrating exceptional project management and development efficiency. ⏱️'] },
    { type: 'trophy', name: 'Trophy', position: 80, title: 'DevTalk 3.0 & the MarTrix Triumph', description: 'Leading the charge, presenting a winning solution', subtitle1: 'What I did', bulletPoints1: ['Presented our intern-developed MarTrix, now a company-wide KPI tool, gaining recognition for its innovative potential.', 'Won 2nd runner-up at DevTalk 3.0', 'Competed against 100 BYTES'], subtitle2: 'What I learnt', bulletPoints2: ['Spearheaded a collaborative effort, actively seeking and incorporating feedback from HR Head Tarun Raj, Delivery Management Team Head Maulik, Tech Lead Paritosh Jauhari, QA Head Ajay Prabhu, and the entire MarTech team.', 'Passion >>>>> Challenges', 'Believe in what we build'] },
    // { type: 'milestone', name: 'May', position: 70, title: 'Bannerization!', description: 'Learning the in and outs of a key component', subtitle1: 'What I did', bulletPoints1: ['2 CRs - sorting banners by priority & if there are no banners in a certain section, the section is itself not rendered', 'solved 6 bugs that delt with illegal image sizes and section names in responses'], subtitle2: 'What I learnt', bulletPoints2: ['Pimcore, Schedulers and everything it takes to run it', 'Reach out to relevant people'] },
    { type: 'finish', name: 'Finish Line', position: 90, title: 'Key Contributions', description: 'Growth, challenges, and valuable takeaways', subtitle1: 'What I have done so far', bulletPoints1: ['8 CWV tickets', 'Features and Benefits component - static to solid', 'Title Offer Banner & CC Form Widget', 'MarTrix Design', 'Set up frontend for MarTrix', 'MarTrix Notification system', 'Integration and Routing of MarTrix', '6 Bannerization bugs', '2 CRs'], subtitle2: 'Extraasss', bulletPoints2: ['2nd runner-up DevTalk 3.0', 'Top Web Development Voice on Linkedin for my Open Source contribution at BuilderIO'] }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isStarted && !isPaused) {
        if (e.key === 'ArrowRight') {
          setGirlPosition((prev) => Math.min(prev + 1, 100));
        } else if (e.key === 'ArrowLeft') {
          setGirlPosition((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isStarted, isPaused]);

  useEffect(() => {
    // Start the game automatically on mount
    setIsStarted(true);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    const currentElement = elements.find(el => Math.abs(el.position - girlPosition) < 0.5);
    // Open modal for milestones, trophies, hurdles, and finish line
    if (currentElement && !showModal && currentElement.type !== 'finish') {
      handleElementClick(currentElement);
    } else if (currentElement && !showModal && currentElement.type === 'finish' && girlPosition >= currentElement.position) {
      handleElementClick(currentElement);
    }
  }, [girlPosition]);

  const handleRestart = () => {
    setIsStarted(false);
    setIsPaused(true);
    setGirlPosition(0);
    setShowModal(false);
    setModalContent({ title: '', description: '', subtitle1: '', subtitle2: '', bulletPoints1: [], bulletPoints2: [] });
    setShowRestartButton(false);
    // Restart the game automatically after resetting
    setTimeout(() => {
      setIsStarted(true);
      setIsPaused(false);
    }, 100);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalContent({ title: '', description: '', subtitle1: '', subtitle2: '', bulletPoints1: [], bulletPoints2: [] });
    setIsPaused(false);
    if (currentElement && currentElement.type === 'finish') {
      setShowRestartButton(true);
    }
  };

  const handleNext = () => {
    const currentIndex = elements.findIndex((el) => el === currentElement);
    const nextElement = elements[(currentIndex + 1) % elements.length];
    setCurrentElement(nextElement);
  };

  const handlePrev = () => {
    const currentIndex = elements.findIndex((el) => el === currentElement);
    const prevElement = elements[(currentIndex - 1 + elements.length) % elements.length];
    setCurrentElement(prevElement);
  };

  const handleElementClick = (element) => {
    setModalContent({
      title: element.title,
      description: element.description,
      subtitle1: element.subtitle1,
      bulletPoints1: element.bulletPoints1,
      subtitle2: element.subtitle2,
      bulletPoints2: element.bulletPoints2
    });
    setCurrentElement(element);
    setShowModal(true);
    setIsPaused(true);
  };
  const handleExitGame = () => {
    // Redirect to the landing page
    navigate('/');
  };

  const handleShowFinalReport = () => {
    // Redirect to the final report page
    navigate('/final-report');
  };


  return (
    <div className="app">
      <div className="header">
        <h1 className="game-title">Use the left and right arrow keys on your keyboard to move accross the road and discover my milestones, hurdles 🚧 and celebrate my wins 🎉 with me!</h1>
        <div className="gif-container">
        <img src={`${process.env.PUBLIC_URL}/ZQ6A.gif`} alt="Controls GIF" className="controls-gif" />
        </div>
      </div>
      <div className="scroll-container">
        <div className="road" style={{ transform: `translateX(-${girlPosition}%)` }}>
          {isStarted && girlPosition >= 100 && (
            <button className="control-button" onClick={handleRestart}>Restart</button>
          )}
          <div className="girl" style={{ left: `${girlPosition}%` }} />
          {elements.map((element, index) => (
            <div
              key={index}
              className={`element ${element.type}`}
              style={{ left: `${element.position}%` }}
              onClick={() => handleElementClick(element)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/${element.type}.png`}
                alt={element.name}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        title={modalContent.title}
        description={modalContent.description}
        subtitle1={modalContent.subtitle1}
        bulletPoints1={modalContent.bulletPoints1}
        subtitle2={modalContent.subtitle2}
        bulletPoints2={modalContent.bulletPoints2}
      />
     {showRestartButton && (
  <div className="overlay">
    <div className="button-container">
      <button className="restart-button" onClick={handleRestart}>Restart Game</button>
      <button className="exit-button" onClick={handleExitGame}>Exit Game</button>
      <button className="final-report-button" onClick={handleShowFinalReport}>Show Final Report</button>
    </div>
  </div>
)}
    </div>
  );
}

export default GamePage;
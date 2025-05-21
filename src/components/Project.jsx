import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Projects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const zAxisVariant = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -90,
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateX: 90,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const projects = [
    {
      title: "Arithmetic Solver",
      description: "A JavaScript-based calculator that parses and solves arithmetic expressions with detailed steps.",
      image: "https://via.placeholder.com/600x400?text=Arithmetic+Solver",
      link: "https://github.com/yourusername/arithmetic-solver",
    },
    {
      title: "Auto Chat Discord Bot",
      description: "An automated Discord bot that replies with contextual messages, using AI and custom commands.",
      image: "https://via.placeholder.com/600x400?text=Auto+Chat+Discord",
      link: "https://github.com/yourusername/auto-chat-discord",
    },
  ];

  const skillsSteps = [
    {
      title: "Understanding Your Vision",
      description: "I take the time to understand your goals, brand, and audience to create a tailored design strategy.",
    },
    {
      title: "Wireframing & Prototyping",
      description: "I create user-friendly prototypes to visualize structure and functionality before development.",
    },
    {
      title: "Design & Development",
      description: "Using modern technologies and clean design principles, I turn prototypes into functional apps.",
    },
    {
      title: "Feedback & Delivery",
      description: "I collaborate for feedback and ensure the final product exceeds your expectations before delivery.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white flex flex-col items-center p-6"
      id="projects"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 dark:text-pink-400 mb-2">
          Portfolio Showcase
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Explore My Journey through Projects, Certificates, and Technical Expertise. Each Section Represents a Milestone in My Continuous Learning Path!
        </p>
        <div className="flex justify-center gap-4 mt-6">
          {["Projects", "My Skill"].map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === tab
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {activeTab === "Projects" && (
          <motion.div
            key="projects"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={zAxisVariant}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center border border-gray-300 dark:border-gray-700"
              >
                <div className="relative w-full h-48 md:h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-400 mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-pink-500 hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        )}
        {activeTab === "My Skill" && (
          <motion.div
            key="skills"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={zAxisVariant}
            className="max-w-7xl w-full flex flex-col items-center"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
              <div className="flex-1 text-center lg:text-left mt-10">
                <h3 className="text-4xl md:text-3xl font-bold text-pink-500 dark:text-pink-400 mb-2">
                  My approach that empowers my clients <br />
                  <span className="text-black dark:text-white">2x their revenue</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  I've refined this process over 10+ years in the design industry, making it a proven approach you can trust with confidence
                </p>
                <div className="mt-8">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center gap-x-2 hover:from-purple-700 hover:to-pink-600 transition-colors">
                    <span>Book A Call</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full max-w-md border border-gray-300 dark:border-gray-700">
                {skillsSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 mb-4 last:mb-0">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-pink-500 dark:text-pink-400">{step.title}</h4>
                      <p className="text-gray-700 dark:text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
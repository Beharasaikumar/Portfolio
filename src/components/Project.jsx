import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [showAll, setShowAll] = useState(false);

  const handleTabClick = (tab) => setActiveTab(tab);

  const zAxisVariant = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -90, transformOrigin: "top center" },
    visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, rotateX: 90, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const logoVariant = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      },
    },
  };

  const allProjects = [
    {
      title: "Lomaa Skill",
      description: "Lomaaskill is an online learning platform offering a wide range of professional courses to enhance skills and career growth.",
      image: "/lomaa.png",
      github: "https://github.com/Beharasaikumar/LomaaSkill.com",
      live: "http://lomaaskill.com",
    },
    {
      title: "Instagram Clone",
      description: "Insta-Clone replicates core Instagram features like photo sharing, likes, comments, and user profiles.",
      image: "/insta.jpg",
      github: "https://github.com/kundetipavan/Insta-clone",
      live: "https://instanetlify.netlify.app",
    },
    {
      title: "Netflix Clone",
      description: "Netflix clone showcasing a streaming UI with browsing, categories, and responsive design.",
      image: "/netflix.png",
      github: "https://github.com/kundetipavan/netflix-clone",
      live: "https://net-flix-clone-by-sai.netlify.app/",
    },
    {
      title: "StartUp Demo",
      description: "StartUp Demo is a modern, responsive landing page designed to showcase a startup's services, features, and brand identity.",
      image: "/start-up.png",
      github: "https://github.com/kundetipavan/Start-Up-Demo",
      live: "https://startupclone.netlify.app",
    },
  ];

  const skillLogos = [
  { name: "HTML", src: "/html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "JavaScript", src: "/js.png" },
  { name: "React", src: "/react.png" },
  { name: "Node.js", src: "/node.png" },
  { name: "Express.js", src: "/express.png" },
  { name: "MySQL", src: "/sql.png" },
  { name: "MongoDB", src: "/mongodb.png" },
  { name: "GitHub", src: "/github.png" },
  { name: "Tailwind CSS", src: "/tailwind.png" },
];

const skillsSteps = [
  {
    title: "Research & Discovery",
    description: "Understanding client needs, competition, and target audience to craft a personalized plan.",
  },
  {
    title: "Design & Development",
    description: "Turning ideas into functional and visually stunning web experiences using the latest technologies.",
  },
  {
    title: "Launch & Optimize",
    description: "Deploying projects with precision and refining performance based on user feedback and analytics.",
  },
];


  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

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
          Explore My Journey through Projects, Certificates, and Technical Expertise.
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
                  : "border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
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
            className="flex flex-col items-center w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-6">
              {visibleProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center border border-gray-300 dark:border-gray-700"
                >
                  <div className="relative w-full h-48 md:h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex justify-center gap-5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-pink-500 hover:underline">
                      View on GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-pink-500 hover:underline">
                      View Live
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* MORE / LESS Button */}
            {allProjects.length > 2 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-10 w-full max-w-5xl"
            >
              <h3 className="text-2xl font-semibold text-pink-500 dark:text-pink-400 mb-6 text-center">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {skillLogos.map((logo) => (
                  <motion.div
                    key={logo.name}
                    className="flex flex-col items-center"
                    variants={logoVariant}
                    animate="animate"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{logo.name}</p>
                  </motion.div>
                ))}
              </div><br />
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-8 items-start w-full mt-10">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl md:text-3xl font-bold text-pink-500 dark:text-pink-400 mb-2">
                  My approach that empowers my clients
                  <br />
                  <span className="text-black dark:text-white">2x their revenue</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  I've refined this process over 6+ months in the design industry, making it a proven approach you can trust with confidence.
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
                  <div key={index} className="flex items-start gap-4 mb-4">
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
            </div><br />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;

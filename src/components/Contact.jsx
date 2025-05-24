import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        rotateX: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        rotateX: 90,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 90 }}
      animate={controls}
      className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black text-gray-800 dark:text-white flex flex-col items-center p-6"
      id="contact"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Let's collaborate to bring your ideas to life! Fill out the form below or reach out to me on social media.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-8 max-w-7xl w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="flex">
            <div className="text-blue-800 dark:text-white">
              <FontAwesomeIcon icon={faEnvelope} fontSize={"48"} /> <br /><br />
              <FontAwesomeIcon icon={faGithub} fontSize={"48"} /><br /><br />
              <FontAwesomeIcon icon={faLinkedin} fontSize={"48"} />
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <h3>&nbsp;&nbsp;Email</h3>
              <p>&nbsp;&nbsp;beharasaikumar1@gmail.com</p><br />
              <h3>&nbsp;&nbsp;Github</h3>
              <p>&nbsp;&nbsp;https://github.com/Beharasaikumar</p><br />
               <h3>&nbsp;&nbsp;LinkedIn</h3>
              <p>&nbsp;&nbsp;www.linkedin.com/in/behara-sai-kumar</p><br />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://chat.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-800 dark:text-gray-300"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/happy-dude"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-800 dark:text-gray-300"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://instagram.com/happy.dude"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-800 dark:text-gray-300"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-80 bg-opacity-90 rounded-lg p-8 w-full max-w-md border border-gray-300 dark:border-gray-700">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:from-purple-700 hover:to-pink-600 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
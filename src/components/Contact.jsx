import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, rotateX: 90, transition: { duration: 0.4, ease: "easeIn" } });
    }
  }, [inView, controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await axios.post("https://portfolio-backend-1-8dco.onrender.com/contact", formData);
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

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

              <p>&nbsp;&nbsp;beharasaikumar1@gmail.com</p>
              <br />
              <h3>&nbsp;&nbsp;Github</h3>
              <p>&nbsp;&nbsp;github.com/Beharasaikumar</p><br />
              <h3>&nbsp;&nbsp;LinkedIn</h3>
              <p>&nbsp;&nbsp;linkedin.com/in/behara-sai-kumar</p><br />
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-xl font-bold  text-pink-600 dark:text-pink-400 mb-2">Connect with Me</h2>
            <div className="flex justify-evenly gap-3">
              <a href="mailto:beharasaikumar1@gmail.com"
               target="_blank" 
               className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
               rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} fontSize={"24"} /></a>
              <a href="https://github.com/Beharasaikumar" 
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              target="_blank">
                <FontAwesomeIcon icon={faGithub} fontSize={"24"} /></a>
              <a href="https://www.linkedin.com/in/behara-sai-kumar-9a62582b3" 
              className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              target="_blank">
                <FontAwesomeIcon icon={faLinkedin} fontSize={"24"} /></a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-80 bg-opacity-90 rounded-lg p-8 w-full max-w-md border border-gray-300 dark:border-gray-700"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:from-purple-700 hover:to-pink-600 transition-colors">
              Send Message
            </button>
            {status && <p className="text-sm text-center mt-2 text-pink-600 dark:text-pink-400">{status}</p>}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

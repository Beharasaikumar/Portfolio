import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const controls = useAnimation();
  const imgControls = useAnimation();
  const textControls = useAnimation();
  const buttonControls = useAnimation();
  const statsControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        rotateY: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      imgControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 },
      });
      textControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
      });
      buttonControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
      });
      statsControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
      });
    } else {
      controls.start({
        opacity: 0,
        rotateY: 45,
        scale: 0.8,
        transition: { duration: 0.8, ease: "easeIn" },
      });
      imgControls.start({
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeIn" },
      });
      textControls.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeIn" },
      });
      buttonControls.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeIn" },
      });
      statsControls.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeIn" },
      });
    }
  }, [inView, controls, imgControls, textControls, buttonControls, statsControls]);

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
      animate={controls}
      className="min-h-screen w-full bg-white dark:bg-gradient-to-t dark:from-slate-950 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 perspective-[1000px]"
      id="about"
    >
      <div className="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-85 bg-opacity-95 rounded-2xl p-6 sm:p-8 pt-12 sm:pt-16 max-w-5xl w-full text-center border border-gray-300 dark:border-gray-700 shadow-xl">
        <motion.h2
          animate={textControls}
          initial={{ y: 50, opacity: 0 }}
          className="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2 tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.p
          animate={textControls}
          initial={{ y: 50, opacity: 0 }}
          className="text-sm sm:text-base text-gray-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          Transforming Ideas into the Digital Experience
        </motion.p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 relative"
            animate={imgControls}
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover="hover"
            variants={imageVariants}
          >
            <img
              src="/me1.png"
              alt="Sai Kumar profile"
              className="w-full h-full rounded-full object-cover border-4 border-pink-200 dark:border-pink-500 shadow-lg"
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20"
              animate={{ opacity: [0, 0.3, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="max-w-xl space-y-6">
            <motion.p
              animate={textControls}
              initial={{ y: 50, opacity: 0 }}
              className="text-sm sm:text-base text-gray-700 dark:text-slate-300 leading-relaxed"
            >
              Crafting stunning, responsive, and high-performance websites that blend design & functionality.
              I build fast, user-friendly, and SEO-optimized web experiences to help businesses grow. With a passion for innovation,
              I leverage cutting-edge technologies to deliver seamless digital solutions tailored to your needs, backed by 24/7 support to ensure your success.

                                <motion.div
          animate={statsControls}
          initial={{ y: 50, opacity: 0 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">100+</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300">Members Reached</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">5+</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300">Projects Completed</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">24/7</h3>
            <p className="text-sm text-gray-600 dark:text-slate-300">Support Services</p>
          </div>
        </motion.div>
            </motion.p>
  

            <motion.div
              animate={buttonControls}
              initial={{ y: 50, opacity: 0 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="#"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition-transform transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </a>
              <a
                href="https://github.com/Beharasaikumar"
                target="_blank"
                className="px-6 py-3 border border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-transform transform hover:scale-105 shadow-md"
              >
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
   
      </div>
    </motion.section>
  );
};

export default About;
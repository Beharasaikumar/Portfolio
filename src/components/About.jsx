import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        rotateY: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        rotateY: 0,
        scale: 0.5,
        transition: { duration: 0.8, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
      animate={controls}
      className="min-h-screen w-full bg-white dark:bg-gradient-to-t dark:from-slate-950 dark:to-gray-800 flex items-center justify-center p-6 perspective-[1000px]"
      id="about"
    >
      <div className="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-80 bg-opacity-90 rounded-lg p-8 pt-16 max-w-full w-full text-center border border-gray-300 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">About Me</h2>
        <p className="text-sm text-gray-700 dark:text-slate-300 mb-8">Transforming Ideas into the Digital Experience</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
            <img src="/me.png" alt="Sai Kumar profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="max-w-xl text-sm text-gray-700 dark:text-slate-300">
            <p className="mb-6">
              Crafting stunning, responsive, and high-performance websites that blend design & functionality.
              I build fast, user-friendly, and SEO-optimized web experiences to help businesses grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition"
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
                href="#"
                className="px-6 py-3 border border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
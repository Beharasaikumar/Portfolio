const Home = () => {
  return (
    <main className="relative text-center animate-[scaleIn_0.5s_ease-out]" id="Home">
      
      {/* Spline background */}
    

      {/* Foreground section */}
      <section className="relative z-10 min-h-screen w-full bg-white/80 dark:bg-gradient-to-t dark:from-slate-950/80 dark:to-gray-800/80 text-gray-900 dark:text-gray-100 flex flex-col-reverse lg:flex-row items-center justify-center p-4 gap-10">
        <div className="flex flex-col gap-5 max-w-lg text-center lg:text-left">
          <h2 className="text-sm lg:text-base text-rose-600 dark:text-rose-300">Hello, It's Me</h2>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-rose-700 dark:text-rose-400">Sai Kumar</h1>
          <h3 className="text-lg lg:text-2xl text-gray-700 dark:text-slate-200">Web Developer & Freelancer</h3>
          <p className="text-gray-700 dark:text-slate-300 text-sm lg:text-base">
            We build stunning websites that rank higher and perform better. Let's create something amazing together!
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-rose-400 dark:from-indigo-500 dark:to-rose-500 text-white rounded-3xl flex items-center gap-2 hover:from-indigo-700 hover:to-rose-500 transition">
              <span>Let's Book A Call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
        </div>

        {/* Profile Image Section */}
        <div className="relative">
          <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-rose-500 shadow-lg shadow-rose-500/40 dark:border-rose-400 dark:shadow-rose-400/30">
  <spline-viewer
        url="https://prod.spline.design/piSMXJe9-4PbY8ho/scene.splinecode"
        class="spline-bg"
      ></spline-viewer>
                </div>
          <div className="absolute inset-0 rounded-full border-4 border-rose-500 dark:border-rose-400 animate-pulse opacity-40"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;

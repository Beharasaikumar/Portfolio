const Home = () => {
  return (
    <main className="flex text-center animate-[scaleIn_0.5s_ease-out]" id="Home">
      <section className="min-h-screen w-full bg-white dark:bg-gradient-to-t dark:from-slate-950 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex flex-col-reverse lg:flex-row items-center justify-center p-4 gap-10 animate-[left_0.3s_ease-out]">
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
          <div className="flex justify-center lg:justify-start gap-4">
            {[
              {
                href: "https://chat.example.com",
                label: "Chat",
                icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
              },
              {
                href: "https://linkedin.com/in/happy-dude",
                label: "LinkedIn",
                icon: (
                  <>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </>
                ),
              },
              {
                href: "https://instagram.com/happy.dude",
                label: "Instagram",
                icon: (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </>
                ),
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-500 transition"
                aria-label={label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-800 dark:text-slate-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-rose-500 shadow-lg shadow-rose-500/40 dark:border-rose-400 dark:shadow-rose-400/30">
            <img src="/me1.png" alt="Sai Kumar profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-rose-500 dark:border-rose-400 animate-pulse opacity-40"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
function About() {
  return (
    <section id="about" className="max-w-screen-2xl px-5 sm:px-8 lg:px-16 mx-auto overflow-hidden text-white">
      <div className="flex flex-col md:flex-row gap-15 py-5">
        <div className="w-full md:w-1/4 flex items-center md:justify-end justify-center">
          <div className="md:[writing-mode:vertical-rl] md:rotate-180">
            <span className="block text-neutral-400 font-quicksand md:text-2xl text-xl md:text-end text-center">INTRODUCTION</span>
            <span className="block text-white font-poppins font-black italic md:text-6xl text-5xl md:text-end text-center">OVERVIEW</span>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <span className="ms-2 mb-5 md:text-3xl text-2xl flex items-center">🎓<span className="ms-2 md:text-xl text-lg">Cum Laude graduate in BS Information Technology, Business Analytics.</span></span>
          <span className="ms-2 mb-5 md:text-3xl text-2xl flex items-center">💻<span className="ms-2 md:text-xl text-lg">Skilled in web and software development using modern technologies.</span></span>
          <span className="ms-2 mb-5 md:text-3xl text-2xl flex items-center">📊<span className="ms-2 md:text-xl text-lg">Experienced in data analytics with Power BI and Tableau.</span></span>
          <span className="ms-2 mb-5 md:text-3xl text-2xl flex items-center">🗂️<span className="ms-2 md:text-xl text-lg">Certified in IT, databases, and programming fundamentals.</span></span>
          <span className="ms-2 mb-5 md:text-3xl text-2xl flex items-center">🚀<span className="ms-2 md:text-xl text-lg">Eager to continuously learn and explore new technologies.</span></span>
        </div>
      </div>
    </section>
  )
}

export default About

function About() {
  return (
    <section id="about" className="max-w-screen-2xl px-5 sm:px-8 lg:px-16 mx-auto overflow-hidden text-white">
      <div className="flex flex-col md:flex-row gap-15 py-5">
        <div className="w-full md:w-1/3 flex items-center md:justify-end justify-center">
          <div className="md:[writing-mode:vertical-rl] md:rotate-180">
            <span className="block text-neutral-400 font-quicksand md:text-[2.5rem] text-[1.2rem] md:text-end text-center">INTRODUCTION</span>
            <span className="block text-white font-poppins font-black italic md:text-[6rem] text-[3rem] md:text-end text-center">OVERVIEW</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <span className="ms-4 mb-5 md:text-[2rem] text-[1rem] flex items-center">🎓<span className="ms-2 md:text-[1.2rem] text-[.8rem]">Cum Laude graduate in BS Information Technology, Business Analytics.</span></span>
          <span className="ms-4 mb-5 md:text-[2rem] text-[1rem] flex items-center">💻<span className="ms-2 md:text-[1.2rem] text-[.8rem]">Skilled in web and software development using modern technologies.</span></span>
          <span className="ms-4 mb-5 md:text-[2rem] text-[1rem] flex items-center">📊<span className="ms-2 md:text-[1.2rem] text-[.8rem]">Experienced in data analytics with Power BI and Tableau.</span></span>
          <span className="ms-4 mb-5 md:text-[2rem] text-[1rem] flex items-center">🗂️<span className="ms-2 md:text-[1.2rem] text-[.8rem]">Certified in IT, databases, and programming fundamentals.</span></span>
          <span className="ms-4 mb-5 md:text-[2rem] text-[1rem] flex items-center">🚀<span className="ms-2 md:text-[1.2rem] text-[.8rem]">Eager to continuously learn and explore new technologies.</span></span>
        </div>
      </div>
    </section>
  )
}

export default About

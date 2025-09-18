function About() {
  return (
    <section id="about" className="max-w-screen-2xl px-5 sm:px-8 lg:px-16 mx-auto overflow-hidden text-white">
      <div className="flex flex-col md:flex-row gap-15 py-5">
        <div className="w-full md:w-1/3 flex items-center md:justify-end justify-center">
          <div className="md:[writing-mode:vertical-rl] md:rotate-180">
            <span className="block text-neutral-400 font-quicksand md:text-[2rem] text-[1.2rem] md:text-end text-center">INTRODUCTION</span>
            <span className="block text-white font-poppins font-black italic md:text-[4.5rem] text-[3rem] md:text-end text-center">OVERVIEW</span>
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
      <div className="flex flex-col md:flex-row gap-15 py-5 mt-20">
        <div className="w-full md:w-2/3 flex flex-row">
          <div className="w-7/8">
            {/* Details */}
          </div>
          <div className="w-1/8 education-vertical relative flex flex-col justify-center items-center gap-30">
            <div className="rounded-full bg-white h-[32px] w-[32px]"></div>
            <div className="rounded-full bg-white h-[32px] w-[32px]"></div>
            <div className="rounded-full bg-white h-[32px] w-[32px]"></div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center md:justify-start justify-center">
          <div className="md:[writing-mode:vertical-rl] md:rotate">
            <span className="block text-neutral-400 font-quicksand md:text-[2rem] text-[1.2rem] md:text-start text-center">MY ACADEMIC JOURNEY</span>
            <span className="block text-white font-poppins font-black italic md:text-[4.5rem] text-[3rem] md:text-end text-center">EDUCATION</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

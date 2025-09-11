import Pic from '../assets/pic.png';
import BackgroundPic from '../assets/background-pic.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="grid lg:grid-cols-[1.5fr_1fr] grid-rows-[1fr] gap-y-[10px] gap-x-[10px] items-center max-w-screen-2xl pt-24 sm:pt-34 lg:pt-44 pb-20 px-5 sm:px-8 lg:px-16 mx-auto overflow-hidden text-white">
      <div className="flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative rounded-full border-4 border-primary z-50 overflow-hidden w-fit">
          <img className="absolute inset-0 object-cover rounded-full w-[clamp(200px,30vw,400px)] h-auto" src={BackgroundPic} alt="background-pic" />
          <img className="relative h-auto rounded-full drop-shadow-lg drop-shadow-black/50 w-[clamp(200px,30vw,400px)] h-auto" src={Pic} alt="personal-pic" />
        </div>
      </div>

      <div className="order-2 lg:order-1">
        <span className="block text-[2.5rem] md:text-[5rem]">Hi! I'm Allen Jamison</span>
        <div className="flex items-center text-[1rem] md:text-[2rem] font-medium">
          <span className="text-primary">Business Analyst</span>
          <span className="h-max text-[1rem] mx-2">●</span>
          <span className="text-primary">Developer</span>
        </div>
        <span>
          I’m a Cum Laude graduate in Information Technology - Business Analytics, certified in Data Analytics, Databases, and IT Passport. Skilled in data visualization, database management, and software development to create data-driven solutions.
        </span>
        <Link to="/about" className='cursor-pointer hover:bg-primary-hover bg-primary text-center px-10 py-3 rounded-full text-white'>
          About Me
        </Link>
      </div>
    </section>
  )
}

export default Home

import Pic from '../assets/pic.png';
import BackgroundPic from '../assets/background-pic.jpg';

function Home() {
  return (
    <section className="flex justify-between items-center max-w-screen-3xl pt-44 pb-20 px-5 sm:px-8 lg:px-16 mx-auto overflow-hidden text-white">
      <div>
        <span className="block -ml-2 text-[2.5rem] md:text-[5rem]">Hi! I'm Allen Jamison</span>
        <div className="flex items-center -ml-2 text-[1rem] md:text-[2rem] font-medium">
          <span className="text-primary">
            Business Analyst
          </span>
          <span className="h-max text-[1rem] mx-2">
            ●
          </span>
          <span className="text-primary">
            Developer
          </span>
        </div>
      </div>
      <div>
        <div className='rounded-full border-4 border-primary z-50 overflow-hidden'>
          <img className='rounded-full absolute' width={400} height="auto" src={BackgroundPic} alt="background-pic" />
          <img className='rounded-full drop-shadow-lg drop-shadow-black/50' width={400} height="auto" src={Pic} alt="personal-pic" />
        </div>
      </div>
    </section>
  )
}

export default Home

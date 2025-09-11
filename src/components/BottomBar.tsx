import { NavLink } from "react-router-dom"
import { FolderCode, House, Phone, User } from "lucide-react"

function BottomBar() {
  return (
    <div className="fixed flex justify-between bg-background outline-1 outline-barline z-100 lg:hidden bottom-0 w-full shadow-md gap-0 justify-between content-stretch text-white rounded-t-md px-8 sm:px-12">
      <NavLink className={({ isActive }) => 
        isActive ? 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-highlight' : 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-transparent'}
      to="/">
        <House />
        Home
      </NavLink>
      <NavLink className={({ isActive }) => 
        isActive ? 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-highlight' : 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-transparent'}
      to="/about">
        <User />
        About Me
      </NavLink>
      <NavLink className={({ isActive }) => 
        isActive ? 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-highlight' : 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-transparent'}
      to="/projects">
        <FolderCode />
        Projects
      </NavLink>
      <NavLink className={({ isActive }) => 
        isActive ? 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-highlight' : 'flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2 border-t-4 border-transparent'}
      to="/contact">
        <Phone />
        Contact
      </NavLink>
    </div>
  )
}

export default BottomBar

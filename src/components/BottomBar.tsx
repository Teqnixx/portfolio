import { NavLink } from "react-router-dom"

function BottomBar() {
  return (
    <div className="fixed outline-1 outline-secondary z-100 lg:hidden bottom-0 w-full shadow-md flex gap-0 justify-between content-stretch text-white rounded-t-md">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About Me
      </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
    </div>
  )
}

export default BottomBar

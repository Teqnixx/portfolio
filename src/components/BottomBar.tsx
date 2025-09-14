import { HashLink } from "react-router-hash-link"
import { FolderCode, House, Phone, User } from "lucide-react"

function BottomBar() {
  return (
    <div className="fixed flex justify-between bg-background outline-1 outline-barline z-100 lg:hidden bottom-0 w-full shadow-md gap-0 justify-between content-stretch text-white rounded-t-md px-8 sm:px-12">
      <HashLink className='flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2'
      smooth
      to="/">
        <House />
        Home
      </HashLink>
      <HashLink className='flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2'
      smooth
      to="/#about">
        <User />
        About Me
      </HashLink>
      <HashLink className='flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2'
      smooth
      to="/#projects">
        <FolderCode />
        Projects
      </HashLink>
      <HashLink className='flex flex-col items-center pb-3 pt-5 mx-1 sm:mx-2'
      smooth
      to="/#contact">
        <Phone />
        Contact
      </HashLink>
    </div>
  )
}

export default BottomBar

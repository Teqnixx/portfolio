import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import BottomNav from "../components/BottomNav"

function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col sm:flex-row p-2 pb-20 sm:pb-2 md:p-4 sm:gap-4 font-poppins bg-background">
      <div className="hidden sm:block">
        <SideBar className="lg:w-[300px] h-fit p-2 md:p-4 rounded-xl" />
      </div>
      <main className="flex flex-1 min-h-0 p-4 rounded-xl border border-secondary text-primary overflow-y-auto">
        <Outlet />
      </main>
      <div className="sm:hidden">
        <BottomNav />
      </div>
    </div>  
  )
}

export default MainLayout
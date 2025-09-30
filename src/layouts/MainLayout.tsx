import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import BottomNav from "../components/BottomNav"

function MainLayout() {
  return (
    <div className="h-screen flex flex-col sm:flex-row p-2 pb-14 sm:pb-2 md:p-4 sm:gap-4 font-poppins bg-background overflow-hidden">
      <div className="hidden sm:block rounded-xl border border-secondary/20 h-full">
        <SideBar className="lg:w-[300px] h-full p-2 md:p-4 rounded-xl" />
      </div>
      <main className="flex flex-1 min-h-0 p-4 rounded-xl border border-secondary/20 text-primary overflow-y-auto">
        <Outlet />
      </main>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav />
      </div>
    </div>  
  )
}

export default MainLayout
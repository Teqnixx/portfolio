import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-quicksand min-h-screen bg-background">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

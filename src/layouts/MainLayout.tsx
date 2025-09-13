import NavBar from "../components/NavBar"
import BottomBar from "../components/BottomBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="font-quicksand min-h-screen bg-background">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <BottomBar />
      <Footer />
    </div>
  )
}

export default MainLayout

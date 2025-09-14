import NavBar from "../components/NavBar"
import BottomBar from "../components/BottomBar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

function MainLayout() {
  return (
    <div className="font-quicksand min-h-screen bg-background">
      <NavBar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <BottomBar />
      <Footer />
    </div>
  )
}

export default MainLayout

import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Education from './pages/Education'
import Certifications from './pages/Certifications'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

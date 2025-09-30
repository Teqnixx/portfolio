import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Qualifications from './pages/Qualifications'
import Projects from './pages/Projects'
import data from './data/user.json'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<About user={data} />} />
          <Route path="/qualifications" element={<Qualifications user={data} />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

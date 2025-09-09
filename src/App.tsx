import './App.css'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './routers/AppRoutes'

function App() {

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App

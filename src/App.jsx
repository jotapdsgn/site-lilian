import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Treatments from './pages/Treatments'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamentos" element={<Treatments />} />
      </Routes>
    </Router>
  )
}

export default App
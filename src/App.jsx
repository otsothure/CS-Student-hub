import { Routes, Route, NavLink } from 'react-router-dom'
import Hubi from './pages/Hubi'

const Tehtavat = () => <h1>Tehtävät ja ajastin</h1>
const Asetukset = () => <h1>Asetukset</h1>

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Hubi</NavLink>{' '}
        <NavLink to="/tehtavat">Tehtävät</NavLink>{' '}
        <NavLink to="/asetukset">Asetukset</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Hubi />} />
        <Route path="/tehtavat" element={<Tehtavat />} />
        <Route path="/asetukset" element={<Asetukset />} />
      </Routes>
    </>
  )
}

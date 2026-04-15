import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import IgorPage from './pages/IgorPage.jsx'
import LizaPage from './pages/LizaPage.jsx'

export default function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/igor" element={<IgorPage />} />
        <Route path="/liza" element={<LizaPage />} />
        <Route path="/" element={<Navigate to="/igor" replace />} />
      </Routes>
    </HashRouter>
  )
}

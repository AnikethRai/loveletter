import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Loveletter from './components/loveletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/loveletter" element={<Loveletter />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

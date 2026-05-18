import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Common/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff] text-white font-sans selection:bg-[#FFD166] selection:text-black">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}
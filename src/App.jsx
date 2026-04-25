import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff] text-white font-sans selection:bg-[#FFD166] selection:text-black">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Menu } from '@/pages/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen text-text-primary selection:bg-primary selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
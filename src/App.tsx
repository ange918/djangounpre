import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: 0 }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton floating />
    </>
  );
}

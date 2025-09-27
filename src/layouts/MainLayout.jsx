import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AIChatbot from '../components/AIChatbot';
import WhatsAppWidget from '../components/WhatsAppWidget';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <AIChatbot />
      <WhatsAppWidget />
    </div>
  );
};

export default MainLayout;

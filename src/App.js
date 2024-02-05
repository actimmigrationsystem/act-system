import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SocialNav from './components/SocialNav';
import CustomFooter from './components/Footer';
import Home from './components/Home';
import Services from './components/ServicesSection';
import AboutUs from './components/AboutUsSection';
import Documents from './components/DocumentsSection';
import FAQs from './components/FaqsSection';
import ContactUs from './components/ContactUsSection';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SocialNav />
        <NavBar />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;

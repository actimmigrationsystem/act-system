import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SocialNav from './components/SocialNav';
import CustomFooter from './components/Footer';
import Home from './pages/Home';
import Services from './pages/ServicesSection';
import AboutUs from './pages/AboutUsSection';
import Documents from './pages/DocumentSection';
import FAQs from './pages/FaqsSection';
import ContactUs from './pages/ContactUsSection';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocialNav />
      <NavBar />
      <SocialSidebar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/services" component={<Services />} />
        <Route path="/about" component={<AboutUs />} />
        <Route path="/documents" component={<Documents />} />
        <Route path="/faqs" component={<FAQs />} />
        <Route path="/contactus" component={<ContactUs />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;

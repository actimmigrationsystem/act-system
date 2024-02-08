import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialNav from "./components/SocialNav";
import CustomFooter from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/ServicesSection";
import AboutUs from "./pages/AboutUsSection";
import Documents from "./pages/DocumentSection";
import FAQs from "./pages/FaqsSection";
import ContactUs from "./pages/ContactUsSection";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocialNav />
      <NavBar />
      <SocialSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/faqs" element={<ContactUs />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ExternalNavbar from "./components/ExternalNavbar";
import SocialNav from "./components/SocialNav";
import CustomFooter from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/ServicesSection";
import AboutUs from "./pages/AboutUsSection";
import Documents from "./pages/DocumentSection";
import FAQs from "./pages/FaqsSection";
import ContactUs from "./pages/ContactUsSection";
import SocialSidebar from "./components/SocialSidebar";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import ServiceDetails from "./pages/ServiceDetails";
import EnquiryManager from "./pages/EnquiryManager";
import AppointmentManager from "./pages/AppointmentManager";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
   const [submittedFormData, setSubmittedFormData] = useState(null);
   const handleSubmit = (formData: any) => {
     console.log("Form submitted with data:", formData);
     setSubmittedFormData(formData);
   };
  return (
    <div className="flex flex-col min-h-screen">
      <SocialNav />
      <Routes>
        <Route
          path="/privacy-policy"
          element={
            <>
              <ExternalNavbar />
              <PrivacyPolicyPage />
              <CustomFooter />
            </>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <>
              <ExternalNavbar />
              <CookiePolicy />
              <CustomFooter />
            </>
          }
        />
        <Route
          path="/enquirymanager"
          element={
            <>
              <ExternalNavbar />
              <EnquiryManager
                formValues={submittedFormData || {}}
                onSubmit={handleSubmit}
              />
            </>
          }
        />

        <Route
          path="/appointmentmanager"
          element={
            <>
              <ExternalNavbar />
              <AppointmentManager
                formValues={(location as any).state?.formValues || {}}
                onSubmit={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </>
          }
        />

        <Route
          path="/services/:serviceTitle"
          element={
            <>
              <ExternalNavbar />
              <ServiceDetails />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <NavBar />
              <SocialSidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
              <CustomFooter />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

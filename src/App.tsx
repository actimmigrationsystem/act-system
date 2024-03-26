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
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ExternalSocialNav from "./components/ExternalSocialNav";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [submittedFormData, setSubmittedFormData] = useState(null);
  const handleSubmit = (formData: any) => {
    // console.log("Form submitted with data:", formData);
    setSubmittedFormData(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <ExternalSocialNav />
              <ExternalNavbar />
              <Dashboard />
              <CustomFooter />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <ExternalSocialNav />
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
              <ExternalSocialNav />
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
              <ExternalSocialNav />
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
              <ExternalSocialNav />
              <ExternalNavbar />
              <AppointmentManager
                formValues={(location as any).state?.formValues || {}}
                onSubmit={handleSubmit}
              />
            </>
          }
        />
        <Route
          path="/services/:serviceTitle"
          element={
            <>
              <ExternalSocialNav />
              <ExternalNavbar />
              <ServiceDetails />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <ExternalSocialNav />
              <LoginPage />
              <CustomFooter />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <ExternalSocialNav />
              <SignupPage />
              <CustomFooter />
            </>
          }
        />
        <Route
          path="/reset"
          element={
            <>
              <ExternalSocialNav />
              <ResetPasswordPage />
              <CustomFooter />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <SocialNav />
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

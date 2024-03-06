import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import HomeCarousel from "../components/HomeCarousel";
import ServicesSection from "./ServicesSection";
import ContactUsSection from "./ContactUsSection";
import FAQSection from "./FaqsSection";
import AboutUs from "./AboutUsSection";
import BackToTopButton from "../components/BackToTopButton";
import Alerts from "../components/Alert";

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Check if the user has accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    // If cookies are not accepted, show the alert
    if (!cookiesAccepted) {
      setShowAlert(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Set cookiesAccepted to true in local storage
    localStorage.setItem("cookiesAccepted", "true");
    // Hide the alert
    setShowAlert(false);
  };
  return (
    <>
      <Element name="home-section">
        <HomeCarousel />
      </Element>
      <Element name="service-section">
        <ServicesSection />
      </Element>
      <Element name="about-section">
        <AboutUs />
      </Element>
      <Element name="faq-section">
        <FAQSection />
      </Element>
      <Element name="contact-section">
        <ContactUsSection />
      </Element>
      <BackToTopButton />
      {showAlert && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
          <Alerts
            open={showAlert}
            message="This website uses cookies to ensure you get the best experience. By continuing to use this site, you accept our use of cookies."
            actionText="Accept"
            onActionClick={handleAcceptCookies}
          />
        </div>
      )}
    </>
  );
};

export default Home;

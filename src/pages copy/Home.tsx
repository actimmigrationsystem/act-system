import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import HomeCarousel from "../components/HomeCarousel";
import ServicesSection from "./ServicesSection";
import ContactUsSection from "./ContactUsSection";
import FAQSection from "./FaqsSection";
import AboutUs from "./AboutUsSection";
import BackToTopButton from "../components/BackToTopButton";
import CookieAlert from "../components/alerts/CookieAlert";

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
          <CookieAlert
            open={showAlert}
            message={
              <span>
                ACTImmigration uses cookies to personalize your experience on
                our website. By continuing to use this site, you agree to our
                <Link to="/cookie-policy" className="text-blue-500 underline">
                  {" "}
                  cookie policy
                </Link>
                .
              </span>
            }
            actionText="Accept"
            onActionClick={handleAcceptCookies}
          />
        </div>
      )}
    </>
  );
};

export default Home;

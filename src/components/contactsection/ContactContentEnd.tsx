import { useState, SetStateAction } from "react";
import ContactBgBottomLeft from "./ContactBgBottomLeft";
import ContactBgRight from "./ContactBgRight";
import ContactBgTop from "./ContactBgTop";
import {
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { AiFillQuestionCircle, AiFillCalendar } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { Tooltip } from "flowbite-react";
import EnquiryForm from "../forms/enquiryform/EnquiryForm";
import AppointmentForm from "../forms/appointments/AppointmentForm";

const ContactContentEnd = () => {
  const [activeTab, setActiveTab] = useState("enquiry");
  const [showCallTooltip, setShowCallTooltip] = useState(false); // State to control the tooltip visibility on the "Call" tab

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
    if (tab === "enquiry" || tab === "appointments") {
      setShowCallTooltip(true);
      setTimeout(() => setShowCallTooltip(false), 3000); // Hide tooltip after 3 seconds
    } else {
      setShowCallTooltip(false);
    }
  };

  const handlePreConsultationClick = () => {
    handleTabChange("enquiry");
  };

  const handleAppointmentClick = () => {
    handleTabChange("appointments");
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=27723876910";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+27419220833";
  };

  return (
<div className="w-full px-2 mx-auto lg:w-1/2 xl:w-5/12 mr-16 mb-12">
  <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
    <Tabs value={activeTab} className="overflow-visible">
      <TabsHeader
        className="relative z-0 flex justify-between"
        placeholder=""
        style={{ backgroundColor: "#0e5a97" }}
      >
        <Tooltip content="Feature is coming soon">
          <div className="flex items-center">
            <Tab
              value="enquiry"
              onClick={handlePreConsultationClick}
              placeholder="enquiry tab"
            >
              <span
                className="hidden md:block"
                style={{
                  color: activeTab === "enquiry" ? "#2393cb" : "white",
                  fontSize: "1rem",
                }}
              >
                PreConsultation
              </span>
              <AiFillQuestionCircle
                className="block md:hidden h-6 w-6"
                style={{ color: activeTab === "enquiry" ? "#2393cb" : "white" }}
              />
            </Tab>
          </div>
        </Tooltip>

        <Tooltip content="Feature is coming soon">
          <div className="flex items-center">
            <Tab
              value="appointments"
              onClick={handleAppointmentClick}
              placeholder="appointments tab"
            >
              <span
                className="hidden md:block"
                style={{
                  color: activeTab === "appointments" ? "#2393cb" : "white",
                  fontSize: "1rem",
                }}
              >
                Appointment
              </span>
              <AiFillCalendar
                className="block md:hidden h-6 w-6"
                style={{
                  color: activeTab === "appointments" ? "#2393cb" : "white",
                }}
              />
            </Tab>
          </div>
        </Tooltip>

        <Tooltip content="Call or Send us a Whatsapp now!" placement="top" className="animate-bounce">
          <div className="flex items-center">
            <Tab
              value="contact"
              onClick={() => handleTabChange("contact")}
              placeholder="contact tab"
            >
              <span
                className="hidden md:block"
                style={{ color: activeTab === "contact" ? "#2393cb" : "white" }}
              >
                Call Us
              </span>
              <IoCallOutline
                className="block md:hidden h-6 w-6"
                style={{ color: "#2393cb" }}
              />
            </Tab>
          </div>
        </Tooltip>
      </TabsHeader>
      <TabsBody
        placeholder="tabs body"
        className="!overflow-x-hidden !overflow-y-visible"
      >
        {/* <TabPanel value="enquiry" className="p-0">
          <EnquiryForm />
        </TabPanel>
        <TabPanel value="appointments" className="p-0">
          <AppointmentForm />
        </TabPanel> */}

        <TabPanel
          value="contact"
          className="flex flex-row md:flex-row items-center justify-center md:justify-start gap-2 mt-8 overflow-none"
        >
          <Tooltip placement="bottom" content="Chat with us on WhatsApp">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white"
              placeholder="whatsapp button"
            >
              <FaWhatsapp className="h-6 w-6 mr-2" />
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" content="Call Our Office">
            <Button
              size="lg"
              onClick={handlePhoneClick}
              className="w-full h-full bg-blue-500 hover:bg-blue-600 text-white md:w-auto"
              placeholder="phone button"
            >
              <CiPhone className="h-6 w-6 mr-2" />
            </Button>
          </Tooltip>
        </TabPanel>
      </TabsBody>
    </Tabs>
    <div>
      <ContactBgTop />
      <ContactBgRight />
      <ContactBgBottomLeft />
    </div>
  </div>
</div>
  );
};

export default ContactContentEnd;
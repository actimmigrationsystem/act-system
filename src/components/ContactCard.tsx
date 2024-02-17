import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
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
import EnquiryForm from "./EnquiryForm";
import AppointmentForm from "./AppointmentForm";

const ContactForm = () => {
  const [activeTab, setActiveTab] = React.useState("enquiry");

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=27723876910";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+27419220833";
  };

  return (
    <>
      <Card placeholder="card" className="md:shadow-none mt-6">
        <CardHeader
          style={{ backgroundColor: "#0e5a97" }}
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center px-4 py-8 text-center"
          placeholder="card header"
        >
          <Typography variant="h5" color="white" placeholder="">
            Contact US
          </Typography>
        </CardHeader>
        <CardBody placeholder="card body">
          <Tabs value={activeTab} className="overflow-visible">
            <TabsHeader className="relative z-0 " placeholder="">
              <Tab
                value="enquiry"
                onClick={() => handleTabChange("enquiry")}
                placeholder="enquiry tab"
              >
                <span className="hidden md:block">Enquiry</span>
                <AiFillQuestionCircle
                  className="block md:hidden h-6 w-6"
                  style={{ color: "#2393cb" }}
                />
              </Tab>
              <Tab
                value="appointments"
                onClick={() => handleTabChange("contact")}
                placeholder="appointments tab"
              >
                <span className="hidden md:block">Appointment</span>
                <AiFillCalendar
                  className="block md:hidden h-6 w-6"
                  style={{ color: "#2393cb" }}
                />
              </Tab>
              <Tab
                value="contact"
                onClick={() => handleTabChange("contact")}
                placeholder="contact tab"
              >
                <span className="hidden md:block">Call</span>
                <IoCallOutline
                  className="block md:hidden h-6 w-6"
                  style={{ color: "#2393cb" }}
                />
              </Tab>
            </TabsHeader>
            <TabsBody
              placeholder="tabs body"
              className="!overflow-x-hidden !overflow-y-visible"
            >
              <TabPanel value="enquiry" className="p-0">
                <EnquiryForm />
              </TabPanel>
              <TabPanel value="appointments" className="p-0">
                <AppointmentForm />
              </TabPanel>

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
        </CardBody>
      </Card>
    </>
  );
};

export default ContactForm;

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
import EnquiryForm from "./forms/enquiryform/EnquiryForm";
import AppointmentForm from "./forms/appointments/AppointmentForm";

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
    <Card placeholder="card" className="md:shadow-none"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader
        style={{ backgroundColor: "#0e5a97" }}
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-4 text-center"
        placeholder="card header"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Typography variant="h5" color="white" placeholder="contact text"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Contact US
        </Typography>
      </CardHeader>
      <CardBody placeholder="card body"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Tabs value={activeTab} className="overflow-visible">
          <TabsHeader className="relative z-0" placeholder=""  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Tab
              value="k "
              onClick={() => handleTabChange("enquiry")}
              placeholder="enquiry tab"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <span className="hidden md:block">
                <Typography placeholder="pre-consulattion" className="text-sm"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>PreConsultation</Typography>
              </span>
              <AiFillQuestionCircle
                className="block md:hidden h-6 w-6"
                style={{ color: "#2393cb" }}
              />
            </Tab>
            <Tab
              value="appointments"
              onClick={() => handleTabChange("appointments")}
              placeholder="appointments tab"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <span className="hidden md:block">Appointment</span>
              <AiFillCalendar
                className="block md:hidden h-6 w-6"
                style={{ color: "#2393cb" }}
              />
            </Tab>
            <Tab
              value="contact"
              onClick={() => handleTabChange("contact")}
              placeholder="contact tab"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <span className="hidden md:block">Call</span>
              <IoCallOutline
                className="block md:hidden h-6 w-6"
                style={{ color: "#2393cb" }}
              />
            </Tab>
          </TabsHeader>
          <TabsBody
            placeholder="tabs body"
            className="!overflow-x-hidden !overflow-y-visible"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <TabPanel value="enquiry" className="p-0">
              <AppointmentForm />
            </TabPanel>
            <TabPanel value="appointments" className="p-0">
              <EnquiryForm />
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
                  placeholder="whatsapp button"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  <FaWhatsapp className="h-6 w-6 mr-2" />
                </Button>
              </Tooltip>
              <Tooltip placement="bottom" content="Call Our Office">
                <Button
                  size="lg"
                  onClick={handlePhoneClick}
                  className="w-full h-full bg-blue-500 hover:bg-blue-600 text-white md:w-auto"
                  placeholder="phone button"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  <CiPhone className="h-6 w-6 mr-2" />
                </Button>
              </Tooltip>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default ContactForm;

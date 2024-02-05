/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { FaWhatsapp } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import SectionTitle from '../components/SectionTitle';

export default function ContactView() {
  const [activeTab, setActiveTab] = React.useState('enquiry');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleWhatsAppClick = () => {
    'https://wa.me/123456789?text=Hello%20from%20Material%20Tailwind%20PRO';
  };

  const handleEmailClick = () => {
    'mailto:example@email.com?subject=Query&body=Hello%20from%20Material%20Tailwind%20PRO';
  };

  return (
    <div className="flex flex-col items-center">
      <SectionTitle title="FAQs" />
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-2/3">
          <Card>
            <CardHeader
              color="gray"
              floated={false}
              shadow={false}
              className="m-0 grid place-items-center px-4 py-8 text-center"
            >
              <Typography variant="h5" color="white">
                Contact US
              </Typography>
            </CardHeader>
            <CardBody>
              <Tabs value={activeTab} className="overflow-visible">
                <TabsHeader className="relative z-0 ">
                  <Tab value="enquiry" onClick={() => handleTabChange('enquiry')}>
                    Enquiry
                  </Tab>
                  <Tab value="contact" onClick={() => handleTabChange('contact')}>
                    Contact Us
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="!overflow-x-hidden !overflow-y-visible"
                  animate={{
                    initial: {
                      x: activeTab === 'enquiry' ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: activeTab === 'enquiry' ? 400 : -400,
                    },
                  }}
                >
                  {activeTab === 'enquiry' && (
                    <TabPanel value="enquiry" className="p-0">
                      <form className="mt-12 flex flex-col gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Name
                          </Typography>
                          <Input
                            type="text"
                            placeholder="John"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Surname
                          </Typography>
                          <Input
                            type="text"
                            placeholder="Doe"
                            value={surname}
                            onChange={(event) => setSurname(event.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Query
                          </Typography>
                          <Input
                            type="textarea"
                            placeholder="Your query..."
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Contact Email
                          </Typography>
                          <Input
                            type="email"
                            placeholder="name@mail.com"
                            value={contactEmail}
                            onChange={(event) => setContactEmail(event.target.value)}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <Button size="lg">Submit Enquiry</Button>
                      </form>
                    </TabPanel>
                  )}
                  {activeTab === 'contact' && (
                    <TabPanel value="contact" className="p-0">
                      <div className="flex flex-col items-center justify-center gap-6">
                        <Button
                          size="lg"
                          onClick={handleWhatsAppClick}
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <FaWhatsapp className="h-6 w-6 mr-2" />
                          Chat on WhatsApp
                        </Button>
                        <Button
                          size="lg"
                          onClick={handleEmailClick}
                          className="bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          <CiMail className="h-6 w-6 mr-2" />
                          Email Us
                        </Button>
                      </div>
                    </TabPanel>
                  )}
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>

        <div className="w-full md:w-1/3">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.868719462967!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_PLACE_NAME!2sYOUR_PLACE_NAME!5e0!3m2!1sen!2suk!4v1645529915400!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Typography, Button, Card } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import MessageAlert from "../components/alerts/MessageAlerts";
import { MdCheckCircle } from "react-icons/md";

const createAppointmentRoute = import.meta.env.VITE_CREATE_APPOINTMENT_ROUTE;
interface FormValuesInterface {
  [key: string]: string | undefined | Date;
}

interface AppointmentManagerProps {
  formValues: FormValuesInterface;
  onSubmit: (formData: FormValuesInterface) => void;
}

const AppointmentManager = ({ formValues }: AppointmentManagerProps) => {
  const location = useLocation();
  const extractedFormValues: FormValuesInterface =
    location.state?.formValues || {};
  const mergedFormValues = { ...formValues, ...extractedFormValues };

  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();
  const [confirmedItems, setConfirmedItems] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    setShowAlert(false);
  }, []);

  const handleAlertActionClick = () => {
    setShowAlert(false);
    navigate("/users/sign_in");
  };


  const handleConfirmItem = (key: string) => {
    setConfirmedItems((prevConfirmedItems) => ({
      ...prevConfirmedItems,
      [key]: true,
    }));
  };

  const handleConfirmAllItems = () => {
    const newConfirmedItems: { [key: string]: boolean } = {};
    Object.keys(mergedFormValues).forEach((key) => {
      newConfirmedItems[key] = true;
    });
    setConfirmedItems(newConfirmedItems);
  };

  const formatDate = (date: string | Date) => {
    if (date instanceof Date) {
      if (!isNaN(date.getTime())) {
        return date.toISOString().split("T")[0];
      }
      return "";
    } else {
      return date;
    }
  };

const handleSubmit = async () => {
  try {
    const appointmentInput = {
      appointment: {
        name: mergedFormValues.name || "",
        surname: mergedFormValues.surname || "",
        phonenumber: mergedFormValues.phonenumber || "",
        email: mergedFormValues.email || "",
        serviceType: mergedFormValues.serviceType || "",
        venue: mergedFormValues.venue || "",
        appointmentDate: formatDate(mergedFormValues.appointmentDate || ""),
        appointmentType: mergedFormValues.appointmentType || "",
        contact_info: {
          name: mergedFormValues.name || "",
          surname: mergedFormValues.surname || "",
          phonenumber: mergedFormValues.phonenumber || "",
          email: mergedFormValues.email || "",
        },
      },
    };
    const url = `${createAppointmentRoute}`;
    const response = await axios.post(
      url,
      appointmentInput,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Form Submitted:", response.data);
    setShowAlert(true); // Show success alert on successful submit
  } catch (error) {
    console.error("Error submitting form:", error);
   // console.log("Error response data:", (error as any).response.data);
  }
};



  const serviceType = mergedFormValues["serviceType"];

  return (
    <div className="mt-8">
      <SectionContainer>
        <SectionTitle title={`${String(serviceType)} Appointment`} />
        <ContentContainer>
          <Card placeholder="" className="mb-8 shadow-lg rounded-lg"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="card-body p-6">
              {showAlert && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                  <MessageAlert
                    open={true}
                    message="Thank you for your submission. We might require more details before your appointment. Press Continue to proceed to Sign In or Create an account to track your appointment."
                    actionText="Continue"
                    onActionClick={handleAlertActionClick}
                  />
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {Object.entries(mergedFormValues).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <Typography
                      placeholder=""
                      className="font-bold text-gray-700 mb-2"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {key}:
                    </Typography>
                    <div className="flex flex-col space-y-2">
                      {Array.isArray(value) && value.length > 0 ? (
                        <ul className="list-disc list-inside">
                          {value.map((file: File, index: number) => (
                            <li key={index} className="flex items-center">
                              <FaFilePdf className="text-red-500 mr-2" />
                              <a
                                href={URL.createObjectURL(file)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                              >
                                {file.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : typeof value === "object" && value instanceof File ? (
                        <a
                          href={URL.createObjectURL(value)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-500 hover:text-blue-700"
                        >
                          <FaFilePdf className="text-red-500 mr-2" />
                          {value.name}
                        </a>
                      ) : (
                        <div className="flex items-center">
                          <MdCheckCircle
                            className={
                              confirmedItems[key]
                                ? "text-green-500 mr-2"
                                : "text-gray-500 mr-2"
                            }
                            onClick={() => handleConfirmItem(key)}
                          />
                          <Typography placeholder=""  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {value?.toString()}
                          </Typography>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center mb-6 space-y-4">
                <span className="text-center">
                  Please verify and confirm the details you filled in above or
                  return to the home page to refill.
                </span>
                <Button
                  placeholder=""
                  onClick={handleConfirmAllItems}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  Confirm
                </Button>
              </div>
            </div>
          </Card>
          <div className="text-center mb-6">
            <Typography placeholder="" className="text-gray-700"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Since you selected {String(serviceType)}, you will be required to
              fill in additional forms before your appointment.
            </Typography>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-700">Submit Appointment Booking</span>
            <Button
              placeholder=""
              color="green"
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Book Appointment
            </Button>
          </div>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};

export default AppointmentManager;

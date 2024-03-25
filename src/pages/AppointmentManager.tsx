import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Typography, Button, Card } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import MessageAlert from "../components/alerts/MessageAlerts";
import { MdCheckCircle } from "react-icons/md";


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
  const [confirmedItems, setConfirmedItems] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleAlertActionClick = () => {
    setShowAlert(false);
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
        console.log("Merged Form Values:", mergedFormValues);
      const appointmentInput = {
        name: mergedFormValues.name || "",
        surname: mergedFormValues.surname || "",
        phonenumber: mergedFormValues.phonenumber || "",
        email: mergedFormValues.email || "",
        serviceType: mergedFormValues.serviceType || "",
        venue: mergedFormValues.venue || "",
        appointmentDate: formatDate(mergedFormValues.appointmentDate || ""),
        appointmentType: mergedFormValues.appointmentType || "",
      };
        console.log(
          "Appointment Input in AppointmentManager:",
          appointmentInput
        );
      const response = await axios.post(
        "http://127.0.0.1:3000/appointments",
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
      console.log("Error response data:", (error as any).response.data);
    }
  };

  const serviceType = mergedFormValues["serviceType"];

  return (
    <div className="mt-8">
      <SectionContainer>
        <SectionTitle title={String(serviceType) + " Appointment"} />
        <ContentContainer>
          <Card placeholder="" className="mb-8">
            <div className="card-body">
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <MessageAlert
                  open={showAlert}
                  message="Thank you for your submission. We require more details from you to proceed."
                  actionText="Continue"
                  onActionClick={handleAlertActionClick}
                />
              </div>
              <div className="grid grid-cols-2 gap-1 items-center justify-center mb-4">
                {Object.entries(mergedFormValues).map(([key, value]) => (
                  <div key={key} className="mb-4 flex justify-center">
                    <Typography placeholder="" className="font-bold mr-2">
                      {key}:
                    </Typography>
                    <div className="flex items-center">
                      {Array.isArray(value) && value.length > 0 ? (
                        <ul>
                          {value.map((file: File, index: number) => (
                            <li key={index} className="mr-2">
                              <FaFilePdf className="mr-2" />
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
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaFilePdf className="mr-2" />
                          {value.name}
                        </a>
                      ) : (
                        <>
                          <MdCheckCircle
                            className={
                              confirmedItems[key]
                                ? "text-green-500 mr-2"
                                : "text-gray-500 mr-2"
                            }
                            onClick={() => handleConfirmItem(key)}
                          />
                          <Typography placeholder="">
                            {value?.toString()}
                          </Typography>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 mb-6 flex items-center justify-center">
                <span className="mr-4">
                  Please Verify and confirm the details you filled in above or
                  return to the home page to refill
                </span>
                <Button
                  placeholder=""
                  onClick={handleConfirmAllItems}
                  className="mr-2"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </Card>
          <div className="text-center">
            <Typography placeholder="" color="gray">
              Since you selected {String(serviceType)}, You will be required to
              fill in additional forms before your appointment.
            </Typography>
          </div>

          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="mr-4">Confirm Booking</span>
            {/* <Button
              placeholder=""
              onClick={handleConfirmAllItems}
              className="mr-2"
            >
              Confirm
            </Button> */}
            <Button placeholder="" color="green" onClick={handleSubmit}>
              Book Appointment
            </Button>
          </div>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};

export default AppointmentManager;

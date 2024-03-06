import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Typography, Button, Card } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import MessageAlert from "../components/alerts/MessageAlerts";
import { MdCheckCircle } from "react-icons/md";

interface FormValues {
  [key: string]: string | undefined | Date | File | File[];
}

interface FormManagerProps {
  formValues: FormValues;
  onConfirm: () => void;
  onSubmit: () => void;
}

const FormManager = ({ formValues, onConfirm, onSubmit }: FormManagerProps) => {
  const location = useLocation();
  const extractedFormValues: FormValues = location.state?.formValues || {};
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

  return (
    <div className="mt-8 ">
      <SectionContainer>
        <SectionTitle title="Preview" />
        <ContentContainer>
          <Card placeholder={""}>
            <div className="card-body">
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <MessageAlert
                  open={showAlert}
                  message="Thank you for your submission.We require more details from you to proceed."
                  actionText="Continue"
                  onActionClick={handleAlertActionClick}
                />
              </div>
              <div className="grid grid-cols-2 gap-1 items-center justify-center">
                {Object.entries(mergedFormValues).map(([key, value]) => (
                  <div key={key} className="mb-4 flex justify-center">
                    <Typography placeholder={""} className="font-bold mr-2">
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
                          <Typography placeholder={""}>
                            {value?.toString()}
                          </Typography>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Button
                  placeholder={""}
                  onClick={handleConfirmAllItems}
                  className="mr-2"
                >
                  Confirm
                </Button>
                <Button placeholder={""} color="green" onClick={onSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </Card>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};

export default FormManager;

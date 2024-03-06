import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Typography, Card } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import MessageAlert from "../components/alerts/MessageAlerts";
import { MdCheckCircle } from "react-icons/md";

interface FormValues {
  [key: string]: string | undefined | Date | File | File[];
}

interface EnquiryManagerProps {
  formValues: FormValues;
  onSubmit: () => void;
}

const EnquiryManager = ({ formValues }: EnquiryManagerProps) => {
  const location = useLocation();
  const extractedFormValues: FormValues = location.state?.formValues || {};
  const mergedFormValues = { ...formValues, ...extractedFormValues };

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleAlertActionClick = () => {
    setShowAlert(false);
  };


  const serviceType = mergedFormValues["serviceType"];
  return (
    <div className="mt-8">
      <SectionContainer>
        <SectionTitle title={String(serviceType) + " Enquiry"} />
        <ContentContainer>
          <Card placeholder="" className="mb-8">
            <div className="card-body">
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <MessageAlert
                  open={showAlert}
                  message="Thank you for your Enquiry.We will revert back as soon as possible"
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
                          <MdCheckCircle className="text-green-500 mr-2" />
                          <Typography placeholder="">
                            {value?.toString()}
                          </Typography>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};

export default EnquiryManager;

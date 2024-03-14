import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { FaFilePdf } from "react-icons/fa";
import { Typography, Card, Button } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import MessageAlert from "../components/alerts/MessageAlerts";
import { MdCheckCircle } from "react-icons/md";

const SUBMIT_ENQUIRY = gql`
  mutation SubmitEnquiry($input: EnquiryInput!) {
    submitEnquiry(input: $input) {
      id
      name
      surname
      phonenumber
      email
      gender
      dob
      marital_status
      residential_address
      immigration_status
      entry_date
      passport_number
      reference_number
      service_type
      elaborate
    }
  }
`;
interface FormValues {
  [key: string]: string | undefined | Date | File | File[];
}

interface EnquiryManagerProps {
  formValues: FormValues;
  onSubmit: (formData: FormValues) => void;
}

const EnquiryManager = ({ formValues }: EnquiryManagerProps) => {
  const location = useLocation();
  const extractedFormValues: FormValues = location.state?.formValues || {};
  const mergedFormValues = { ...formValues, ...extractedFormValues };

  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const [submitEnquiry] = useMutation(SUBMIT_ENQUIRY);

  useEffect(() => {
    setShowAlert(false); // Hide the alert when the component mounts
  }, []);

  const handleAlertActionClick = () => {
    setShowAlert(false);
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting form...");
      await submitEnquiry({ variables: { input: formValues } });
      console.log("the values being submited are" + formValues);
      setShowAlert(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const serviceType = mergedFormValues["serviceType"];
  return (
    <div className="mt-8">
      <SectionContainer>
        <SectionTitle title={String(serviceType) + " PreConsulation"} />
        <ContentContainer>
          <Card placeholder="" className="mb-8">
            <div className="card-body">
              {showAlert && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                  <MessageAlert
                    open={true}
                    message="Thank you for your Enquiry. We will revert back as soon as possible"
                    actionText="Continue"
                    onActionClick={handleAlertActionClick}
                  />
                </div>
              )}
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
              <div className="mt-4 mb-4 flex items-center justify-center">
                <Button placeholder="" color="green" onClick={handleSubmit}>
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

export default EnquiryManager;

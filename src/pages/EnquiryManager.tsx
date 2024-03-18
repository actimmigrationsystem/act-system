import { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
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
      enquiry {
        id
        name
        surname
        phonenumber
        email
        gender
        dob
        maritalStatus
        residentialAddress
        immigrationStatus
        entryDate
        passportNumber
        referenceNumber
        serviceType
        elaborate
      }
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
   const [submitEnquiry] = useMutation(SUBMIT_ENQUIRY);
  const location = useLocation();
  const extractedFormValues: FormValues = location.state?.formValues || {};
  const mergedFormValues = { ...formValues, ...extractedFormValues };

  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setShowAlert(false); // Hide the alert when the component mounts
  }, []);

  const handleAlertActionClick = () => {
    setShowAlert(false);
    navigate("/");
  };

const handleSubmit = async () => {
  try {
    const enquiryInput: FormValues = {
      name: mergedFormValues.name,
      surname: mergedFormValues.surname,
      phonenumber: mergedFormValues.phonenumber,
      email: mergedFormValues.email,
      gender: mergedFormValues.gender,
      dob:
        mergedFormValues.dob instanceof Date
          ? mergedFormValues.dob.toISOString()
          : "",
      maritalStatus: mergedFormValues.maritalStatus,
      residentialAddress: mergedFormValues.residentialAddress,
      immigrationStatus: mergedFormValues.immigrationStatus,
      entryDate:
        mergedFormValues.entryDate instanceof Date
          ? mergedFormValues.entryDate.toISOString()
          : "",
      passportNumber: mergedFormValues.passportNumber,
      referenceNumber: mergedFormValues.referenceNumber,
      serviceType: mergedFormValues.serviceType,
      elaborate: mergedFormValues.elaborate,
      contact_info_id: mergedFormValues.contact_info_id,
    };

    console.log("Enquiry Input:", enquiryInput);
    const { data } = await submitEnquiry({
      variables: { input: enquiryInput },
    });
    console.log("Form Submitted:", data);
    setShowAlert(true); // Show success alert
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

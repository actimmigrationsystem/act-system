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

// type FormValues = {
//   name: string;
//   surname: string;
//   phonenumber: string;
//   email: string;
//   gender: string;
//   dob: Date | string;
//   maritalStatus: string;
//   residentialAddress: string;
//   immigrationStatus: string;
//   entryDate: Date | string;
//   passportNumber: string;
//   referenceNumber: string;
//   serviceType: string;
//   elaborate: string;
//   contactInfo: {
//     name: string;
//     surname: string;
//     phonenumber: string;
//     email: string;
//   };
// };


// const handleSubmit = async () => {
//   try {
//     console.log("Merged Form Values:", mergedFormValues);

//     const enquiryInput = {
//       name: mergedFormValues.name || "",
//       surname: mergedFormValues.surname || "",
//       phonenumber: mergedFormValues.phonenumber || "",
//       email: mergedFormValues.email || "",
//       gender: mergedFormValues.gender || "",
//       dob: mergedFormValues.dob || "",
//       maritalStatus: mergedFormValues.maritalStatus || "",
//       residentialAddress: mergedFormValues.residentialAddress || "",
//       immigrationStatus: mergedFormValues.immigrationStatus || "",
//       entryDate: mergedFormValues.entryDate || "",
//       passportNumber: mergedFormValues.passportNumber || "",
//       referenceNumber: mergedFormValues.referenceNumber || "",
//       serviceType: mergedFormValues.serviceType || "",
//       elaborate: mergedFormValues.elaborate || "",
//       contactInfo: {
//         name: mergedFormValues.name || "",
//         surname: mergedFormValues.surname || "",
//         phonenumber: mergedFormValues.phonenumber || "",
//         email: mergedFormValues.email || "",
//       },
//     };

//     console.log("Enquiry Input:", enquiryInput);
//     const { data } = await submitEnquiry({
//       variables: { input: enquiryInput },
//     });
//     console.log("Form Submitted:", data);
//     setShowAlert(true); // Show success alert
//   } catch (error) {
//     console.error("Error submitting form:", error);
//   }
// };

const SUBMIT_ENQUIRY = gql`
  mutation SubmitEnquiry($input: SubmitEnquiryInput!) {
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
        contactInfo {
          id
          name
          surname
          phonenumber
          email
        }
      }
    }
  }
`;

interface FormValuesInterface {
  [key: string]: string | undefined | Date | File | File[];
}

interface EnquiryManagerProps {
  formValues: FormValuesInterface;
  onSubmit: (formData: FormValuesInterface) => void;
}

const EnquiryManager = ({ formValues }: EnquiryManagerProps) => {
   const [submitEnquiry] = useMutation(SUBMIT_ENQUIRY);
  const location = useLocation();
  const extractedFormValues: FormValuesInterface =
    location.state?.formValues || {};
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
    console.log("Merged Form Values:", mergedFormValues);

const formatDate = (date: string | Date | File | File[]) => {
  if (date instanceof Date) {
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let year = date.getFullYear();

    return day + "-" + month + "-" + year;
  } else if (date instanceof File) {
    // handle File type
    return date.name;
  } else if (
    Array.isArray(date) &&
    date.every((item) => item instanceof File)
  ) {
    // handle File[] type
    return date.map((file) => file.name).join(", ");
  } else {
    return date;
  }
};

    const enquiryInput = {
      name: mergedFormValues.name || "",
      surname: mergedFormValues.surname || "",
      phonenumber: mergedFormValues.phonenumber || "",
      email: mergedFormValues.email || "",
      gender: mergedFormValues.gender || "",
      dob: formatDate(mergedFormValues.dob || ""),
      maritalStatus: mergedFormValues.maritalStatus || "",
      residentialAddress: mergedFormValues.residentialAddress || "",
      immigrationStatus: mergedFormValues.immigrationStatus || "",
      entryDate: formatDate(mergedFormValues.entryDate || ""),
      passportNumber: mergedFormValues.passportNumber || "",
      referenceNumber: mergedFormValues.referenceNumber || "",
      serviceType: mergedFormValues.serviceType || "",
      elaborate: mergedFormValues.elaborate || "",
      contactInfo: {
        name: mergedFormValues.name || "",
        surname: mergedFormValues.surname || "",
        phonenumber: mergedFormValues.phonenumber || "",
        email: mergedFormValues.email || "",
      },
    };

    console.log("Enquiry Input:", enquiryInput);
    const { data } = await submitEnquiry({
      variables: { input: enquiryInput },
    });
    console.log("Form Submitted:", data);
    setShowAlert(true); // Show success alert on successful submit
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

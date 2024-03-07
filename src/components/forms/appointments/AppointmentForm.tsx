import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import { Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import ContactInfoFields from "../formsteps/ContactInfoFields";
import AppointmentServiceFormFields from "../formsteps/AppointmentServiceFormFields";
import { FaArrowLeft } from "react-icons/fa";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    _subject: "Appointment",
    email: "",
    serviceType: "",
    venueType: "",
    appointmentType: "",
    appointmentDate: new Date(),
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAppointmentDateChange = (date: Date | undefined) => {
    if (date) {
      setFormValues((prevState) => ({
        ...prevState,
        appointmentDate: date,
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        appointmentDate: new Date(),
      }));
    }
  };

  const handleRefreshClick = () => {
    // refresh the page
    setFormSubmitted(false);
    window.location.reload();
  };

  const ThankYouMessage = () => (
    <div>
      <div
        style={{
          backgroundColor: "#6FA1EB",
          color: "white",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        Thank you for your message! We will respond shortly.
      </div>
      <br />
      <Button
        placeholder="Refresh Page"
        className="sendagain"
        onClick={handleRefreshClick}
      >
        <RiMailSendLine
          className="w-4 h-4 me-2"
          style={{ marginRight: "12px" }}
        />
        Send Another Enquiry
      </Button>
    </div>
  );

  const handleSubmit = () => {
    // console.log("Form Values:", formValues);
    if (
      !formValues.name ||
      !formValues.surname ||
      !formValues.email ||
      !formValues.serviceType
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Navigate to the respective page
    switch (formValues.serviceType) {
      case "Asylum seeker appeal/review":
      case "Asylum seeker visa extension":
      case "Critical skills visa application":
      case "Letter of good cause application (FORM 20)":
      case "Naturalisation application":
      case "Permanent residence appeal":
      case "Permanent residence application":
      case "Prohibition appeal":
      case "PRP Exemptions":
      case "PRP Waiver":
      case "Refugee permit extension":
      case "Standing Committee application":
      case "Study visa application":
      case "Study visa rejection":
      case "Temporary residence renewal":
      case "TRV Exemptions":
      case "TRV Waiver":
      case "ZEP Migration":
      case "ZEP Waiver":
        navigate("/appointmentmanager", { state: { formValues } });
        break;
      default:
        navigate("/appointmentmanager", { state: { formValues } });
        break;
    }
    setFormSubmitted(true);
  };

  // const handleVenueChange = (value: string | undefined) => {
  //   // console.log("Venue Type:", value);
  //   if (value) {
  //     setFormValues((prevState) => ({ ...prevState, venueType: value }));
  //   }
  // };
  const handleVenueChange = useCallback(
    (value: string | undefined) => {
      if (value && value !== formValues.venueType) {
        setFormValues((prevState) => ({ ...prevState, venueType: value }));
      }
    },
    [formValues.venueType]
  );

    const handleAppointmentChange = useCallback(
      (value: string | undefined) => {
        if (value && value !== formValues.appointmentType) {
          setFormValues((prevState) => ({
            ...prevState,
            appointmentType: value,
          }));
        }
      },
      [formValues.appointmentType]
    );

        const handleServiceChange = useCallback(
          (value: string | undefined) => {
            if (value && value !== formValues.serviceType) {
              setFormValues((prevState) => ({
                ...prevState,
                serviceType: value,
              }));
            }
          },
          [formValues.serviceType]
        );


  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="mt-8">
      {formSubmitted ? (
        <ThankYouMessage />
      ) : (
        <StepWizard>
          <Step1
            formValues={formValues}
            handleChange={handleChange}
            nextStep={nextStep}
          />
          <Step2
            formValues={formValues}
            handleChange={handleChange}
            handleServiceChange={handleServiceChange}
            handleVenueChange={handleVenueChange}
            handleAppointmentChange={handleAppointmentChange}
            handleAppointmentDateChange={handleAppointmentDateChange}
            previousStep={() => {}}
            handleSubmit={handleSubmit}
          />
        </StepWizard>
      )}
      {currentStep !== 1 && (
        <Button
          style={{ backgroundColor: "#0e5a97" }}
          type="button"
          placeholder=""
          onClick={prevStep}
        >
          Previous
        </Button>
      )}
    </div>
  );
};

const Step1 = ({
  formValues,
  handleChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}) => (
  <>
    <ContactInfoFields formValues={formValues} handleChange={handleChange} />
    <Button
      style={{ backgroundColor: "#0e5a97" }}
      type="button"
      placeholder=""
      onClick={nextStep}
    >
      Next
    </Button>
  </>
);
const Step2 = ({
  formValues,
  handleAppointmentDateChange,
  handleServiceChange,
  handleVenueChange,
  handleAppointmentChange,
  previousStep,
  handleSubmit,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAppointmentDateChange: (date: Date | undefined) => void;
  handleServiceChange: (value: string | undefined) => void;
  handleVenueChange: (value: string | undefined) => void;
  handleAppointmentChange: (value: string | undefined) => void;
  previousStep: () => void;
  handleSubmit: () => void;
}) => (
  <>
    <AppointmentServiceFormFields
      formValues={formValues}
      handleAppointmentDateChange={handleAppointmentDateChange}
      handleServiceChange={handleServiceChange}
      handleVenueChange={handleVenueChange}
      handleAppointmentChange={handleAppointmentChange}
    />

    <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-center gap-2 mb-4 text-center justify-center">
        <Checkbox id="accept" defaultChecked />
        <Label htmlFor="accept" className="flex">
          I have read and agree with the&nbsp;
          <Link
            to="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
    </div>

    <div className="flex">
      <Button
        className="mr-4"
        style={{ backgroundColor: "#0e5a97" }}
        type="button"
        placeholder=""
        onClick={previousStep}
      >
        <FaArrowLeft />
      </Button>
      <Button
        className="w-full"
        placeholder={"Button"}
        size="lg"
        type="submit"
        style={{ backgroundColor: "#0e5a97" }}
        onClick={handleSubmit}
      >
        Book Appointment
      </Button>
    </div>
  </>
);

export default AppointmentForm;

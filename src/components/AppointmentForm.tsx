import { useState } from "react";
import StepWizard from "react-step-wizard";
import { Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import ContactInfoFields from "./forms/formsteps/ContactInfoFields";
import AppointmentServiceFormFields from "./forms/formsteps/AppointmentServiceFormFields";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    _subject: "Appointment",
    email: "",
    serviceType: "",
    appointmentType: "",
    appointmentDate: new Date(),
    appointmentTime: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    const form = document.createElement("form");
    form.action = "https://formsubmit.co/enquiries@actimmigration.co.za";
    form.method = "POST";
    form.target = "_blank";

    // form data
    Object.entries(formValues).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value instanceof Date ? value.toISOString() : value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Clear the form
    setFormValues({
      name: "",
      surname: "",
      _subject: "Appointment",
      email: "",
      serviceType: "",
      appointmentType: "",
      appointmentDate: new Date(),
      appointmentTime: "",
    });
    setFormSubmitted(true);
  };

  const handleAppointmentType = (value: string | undefined) => {
    if (value) {
      setFormValues((prevState) => ({
        ...prevState,
        appointmentType: value,
      }));
    }
  };

  const handleServiceChange = (value: string | undefined) => {
    if (value) {
      setFormValues((prevState) => ({ ...prevState, serviceType: value }));
    }
  };

  const nextStep = () => {};

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
            handleAppointmentType={handleAppointmentType}
            handleAppointmentDateChange={handleAppointmentDateChange}
            handleSubmit={handleSubmit}
          />
        </StepWizard>
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
  handleSubmit,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAppointmentDateChange: (date: Date | undefined) => void;
  handleServiceChange: (value: string | undefined) => void;
  handleAppointmentType: (value: string | undefined) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => (
  <>
    <AppointmentServiceFormFields
      formValues={formValues}
      handleAppointmentDateChange={handleAppointmentDateChange}
    />
    <Button
      style={{ backgroundColor: "#0e5a97" }}
      type="button"
      placeholder=""
      onClick={handleSubmit}
    >
      Next
    </Button>
  </>
);

export default AppointmentForm;

import { useState, ChangeEvent } from "react";
import StepWizard from "react-step-wizard";
import { Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import ContactInfoFields from "../formsteps/ContactInfoFields";
import PersonalInfoFields from "../formsteps/PersonalInfoFields";
import ImmigrationEnquiry from "../formsteps/ImmigrationEnquiryFields";
import EnquiryServiceFields from "../formsteps/EnquiryServiceFields";

const EnquiryForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    _subject: "Enquiry",
    email: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    residentialAddress: "",
    entryDate: "",
    passportNumber: "",
    referenceNumber: "",
    serviceType: "",
    elaborate: "",
    documentUpload: "",
    immigrationStatus: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 1000) {
      setFormValues({ ...formValues, elaborate: value });
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

 const handleDateChange = (fieldName: string, _date: Date | undefined) => {
   setFormValues((prevValues) => ({
     ...prevValues,
     [fieldName]: Date().toString(),
   }));
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
          backgroundColor: "#EB6F6F",
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
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Clear the form
    setFormValues({
      name: "",
      _subject: "Enquiry",
      email: "",
      gender: "",
      dob: "",
      maritalStatus: "",
      residentialAddress: "",
      entryDate: "",
      passportNumber: "",
      referenceNumber: "",
      serviceType: "",
      elaborate: "",
      documentUpload: "",
      immigrationStatus: "",
    });
    setFormSubmitted(true);
  };

  const handleGenderChange = (value: string | undefined) => {
    if (value) {
      setFormValues((prevState) => ({ ...prevState, gender: value }));
    }
  };

  const handleMaritalStatusChange = (value: string | undefined) => {
    if (value) {
      setFormValues((prevState) => ({ ...prevState, maritalStatus: value }));
    }
  };

  const handleImmigrationStatusChange = (value: string | undefined) => {
    if (value) {
      setFormValues((prevState) => ({
        ...prevState,
        immigrationStatus: value,
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
    <div>
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
            handleGenderChange={handleGenderChange}
            handleDateChange={(date: Date) => handleDateChange("dob", date)}
            handleMaritalStatusChange={handleMaritalStatusChange}
            nextStep={nextStep}
          />
          <Step3
            formValues={formValues}
            handleChange={handleChange}
            handleDateChange={(date: Date) => handleDateChange("entryDate", date)}
            handleImmigrationStatusChange={handleImmigrationStatusChange}
            nextStep={nextStep}
          />
          <Step4
            formValues={formValues}
            handleChange={handleChange}
            handleServiceChange={handleServiceChange}
            handleChangeTextarea={handleChangeTextarea}
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
  handleChange,
  handleGenderChange,
  handleDateChange,
  handleMaritalStatusChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string | undefined) => void;
  handleDateChange: (date: Date) => void;
  handleMaritalStatusChange: (value: string | undefined) => void;
  nextStep: () => void;
}) => (
  <>
    <PersonalInfoFields
      formValues={formValues}
      handleChange={handleChange}
      handleGenderChange={handleGenderChange}
      handleDateChange={handleDateChange}
      handleMaritalStatusChange={handleMaritalStatusChange}
      nextStep={nextStep}
    />
  </>
);


const Step3 = ({
  formValues,
  handleChange,
  handleDateChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImmigrationStatusChange: (value: string | undefined) => void;
  handleDateChange: (date: Date) => void;
  nextStep: () => void;
}) => (
  <>
    <ImmigrationEnquiry
      formValues={formValues}
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      nextStep={nextStep}
    />
  </>
);


const Step4 = ({
  formValues,
  handleSubmit,
  handleServiceChange,
  handleChangeTextarea,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleServiceChange: (value: string | undefined) => void;
}) => (
  <>
    <EnquiryServiceFields
      formValues={formValues}
      handleChangeTextarea={handleChangeTextarea}
      handleSubmit={handleSubmit}
      handleServiceChange={handleServiceChange}
    />
  </>
);
export default EnquiryForm;

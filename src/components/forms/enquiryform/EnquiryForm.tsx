import React, { useState, useCallback, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import { Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import ContactInfoFields from "../formsteps/ContactInfoFields";
import PersonalInfoFields from "../formsteps/PersonalInfoFields";
import GeneralServiceFormFields from "../formsteps/GeneralServiceFormFields";
import ImmigrationStatusFields from "../formsteps/ImmigrationStatusFields";

const EnquiryForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    _subject: "PreConsulation",
    phonenumber: "",
    email: "",
    gender: "",
    dob: new Date(),
    maritalStatus: "",
    residentialAddress: "",
    entryDate: new Date(),
    passportNumber: "",
    referenceNumber: "",
    serviceType: "",
    elaborate: "",
    document_upload: [] as File[],
    immigrationStatus: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRefreshClick = () => {
    // refresh the page
    setFormSubmitted(false);
    window.location.reload();
  };

  const handleSubmit = () => {
    // console.log("Form Values sent to form manager:", formValues);
    navigate("/enquirymanager", { state: { formValues } });
    setFormSubmitted(true);
  };

  const handleGenderChange = useCallback((value: string | undefined) => {
    // console.log("Gender Change Value:", value);
    if (value) {
      setFormValues((prevState) => ({ ...prevState, gender: value }));
    }
  }, []);

  const handleImmigrationStatusChange = (value: string | undefined) => {
    // console.log("handleImmigrationStatusChange :", value);
    if (value) {
      setFormValues((prevState) => ({
        ...prevState,
        immigrationStatus: value,
      }));
    }
  };

  const handleMaritalStatusChange = (value: string | undefined) => {
    // console.log("handleImmigrationStatusChange :", value);
    if (value) {
      setFormValues((prevState) => ({
        ...prevState,
        maritalStatus: value,
      }));
    }
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 1000) {
      setFormValues({ ...formValues, elaborate: value });
    }
  };

  const handleServiceChange = useCallback((value: string | undefined) => {
    // console.log("Service Change Value:", value);
    if (value) {
      setFormValues((prevState) => ({ ...prevState, serviceType: value }));
    }
  }, []);

  const handleDOBChange = (date: Date | undefined) => {
    if (date) {
      setFormValues((prevState) => ({
        ...prevState,
        dob: date,
      }));
    }
  };

  const handleEntryDateChange = (date: Date | undefined) => {
    if (date) {
      setFormValues((prevState) => ({
        ...prevState,
        entryDate: date,
      }));
    }
  };

  const onFileChange = (files: File[]) => {
    setFormValues((prevState) => ({ ...prevState, document_upload: files }));
  };

  const nextStep = () => {
    // Get the current step from the URL hash
    const currentStep = Number(location.hash.replace("#step", ""));
    // Update the URL hash with the custom step name
    navigate(`/enquiryform#step${currentStep + 1}`);
  };

  return (
    <div className="mt-8">
      {formSubmitted ? (
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
            onClick={handleRefreshClick}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <RiMailSendLine
              className="w-4 h-4 me-2"
              style={{ marginRight: "12px" }}
            />
            Send Another Enquiry
          </Button>
        </div>
      ) : (
        <StepWizard isHashEnabled>
          <Step1
            formValues={formValues}
            handleChange={handleChange}
            nextStep={nextStep}
          />
          <Step2
            formValues={formValues}
            handleChange={handleChange}
            handleGenderChange={handleGenderChange}
            handleDOBChange={handleDOBChange}
            handleMaritalStatusChange={handleMaritalStatusChange}
            nextStep={nextStep}
            previousStep={() => {}}
          />
          <Step3
            formValues={formValues}
            handleChange={handleChange}
            handleEntryDateChange={handleEntryDateChange}
            handleImmigrationStatusChange={handleImmigrationStatusChange}
            nextStep={nextStep}
            previousStep={() => {}}
          />
          <Step4
            formValues={formValues}
            handleChangeTextarea={handleChangeTextarea}
            handleServiceChange={handleServiceChange}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onFileChange={onFileChange}
            previousStep={() => {}}
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
  <div>
    <ContactInfoFields
      formValues={formValues}
      handleChange={handleChange}
      nextStep={nextStep}
    />
  </div>
);
const Step2 = ({
  formValues,
  handleChange,
  handleGenderChange,
  handleDOBChange,
  handleMaritalStatusChange,
  previousStep,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string | undefined) => void;
  handleDOBChange: (date: Date | undefined) => void;
  handleMaritalStatusChange: (value: string | undefined) => void;
  nextStep: () => void;
  previousStep: () => void;
}) => (
  <div>
    <PersonalInfoFields
      formValues={formValues}
      handleChange={handleChange}
      handleGenderChange={handleGenderChange}
      handleDOBChange={handleDOBChange}
      handleMaritalStatusChange={handleMaritalStatusChange}
      previousStep={previousStep}
      nextStep={nextStep}
    />
  </div>
);
const Step3 = ({
  formValues,
  handleChange,
  handleEntryDateChange,
  handleImmigrationStatusChange,
  previousStep,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImmigrationStatusChange: (value: string | undefined) => void;
  handleEntryDateChange: (date: Date) => void;
  nextStep: () => void;
  previousStep: () => void;
}) => (
  <>
    <div className="mb-8">
      <ImmigrationStatusFields
        formValues={formValues}
        handleChange={handleChange}
        handleEntryDateChange={handleEntryDateChange}
        handleImmigrationStatusChange={handleImmigrationStatusChange}
        previousStep={previousStep}
        nextStep={nextStep}
      />
    </div>
  </>
);

const Step4 = ({
  formValues,
  handleChangeTextarea,
  handleServiceChange,
  handleChange,
  handleSubmit,
  onFileChange,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleServiceChange: (value: string | undefined) => void;
  previousStep: () => void;
  onFileChange: (files: File[]) => void;
}) => (
  <>
    <GeneralServiceFormFields
      formValues={formValues}
      handleChange={handleChange}
      handleChangeTextarea={handleChangeTextarea}
      handleServiceChange={handleServiceChange}
      onFileChange={onFileChange}
      handleSubmit={handleSubmit}
    />
    <div className="flex">
      <Button
        className="w-full"
        placeholder={"Button"}
        size="lg"
        type="submit"
        style={{ backgroundColor: "#0e5a97" }}
        onClick={handleSubmit}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        Confirm Enquiry
      </Button>
    </div>
  </>
);

export default EnquiryForm;

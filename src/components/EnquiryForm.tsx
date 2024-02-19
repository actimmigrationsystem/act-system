import { useState, ChangeEvent } from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import { FloatingLabel, Select } from "flowbite-react";
import DocumentUpload from "./DocumentUpload";
import DatePickerComponent from "./DatePickerComponent";

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


const handleDateChange = (field: string, value: Date) => {
  setFormValues((prevValues) => ({
    ...prevValues,
    [field]: value.toISOString(),
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
            nextStep={nextStep}
          />
          <Step3
            formValues={formValues}
            handleChange={handleChange}
            handleImmigrationStatusChange={handleImmigrationStatusChange}
            handleMaritalStatusChange={handleMaritalStatusChange}
            nextStep={nextStep}
          />
          <Step4
            formValues={formValues}
            handleDateChange={(date: Date) =>
              handleDateChange("entryDate", date)
            }
            handleChange={handleChange}
            nextStep={nextStep}
          />
          <Step5
            formValues={formValues}
            handleChange={handleChange}
            handleServiceChange={handleServiceChange}
            handleChangeTextarea={handleChangeTextarea}
            handleSubmit={handleSubmit}
            nextStep={nextStep}
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
  <div className="mt-8">
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Name
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Name"
      type="text"
      name="name"
      value={formValues.name}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Surname
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Surname"
      type="text"
      name="surname"
      value={formValues.surname}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Contact number
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Contact Number"
      type="tel"
      name="phonenumber"
      value={formValues.phonenumber}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Button
      style={{ backgroundColor: "#0e5a97" }}
      type="button"
      placeholder=""
      onClick={nextStep}
    >
      Next
    </Button>
  </div>
);

const Step2 = ({
  formValues,
  handleChange,
  handleGenderChange,
  handleDateChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string | undefined) => void;
  handleDateChange: (date: Date) => void;
  nextStep: () => void;
}) => (
<div className="mt-8">
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Email Address
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Your Email Address"
      type="email"
      name="email"
      value={formValues.email}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      What is your gender
    </Typography>
    <div className="max-w-full">
      <Select
        id="gender"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleGenderChange(event.target.value)
        }
        value={formValues.gender}
      >
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
      </Select>
    </div>
    <div className="mt-8">
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Date of Birth
      </Typography>
      <DatePickerComponent
        value={formValues.dob}
        onChange={(date: Date) => handleDateChange(date)}
      />
    </div>
    <Button
      style={{ backgroundColor: "#0e5a97" }}
      type="button"
      placeholder=""
      onClick={nextStep}
    >
      Next
    </Button>
  </div>
);

const Step3 = ({
  formValues,
  handleChange,
  handleMaritalStatusChange,
  handleImmigrationStatusChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaritalStatusChange: (value: string | undefined) => void;
  handleImmigrationStatusChange: (value: string | undefined) => void;
  nextStep: () => void;
}) => (
  <div className="mt-8">
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Marital Status
    </Typography>
    <div className="max-w-full">
      <Select
        id="maritalStatus"
        name="maritalStatus"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleMaritalStatusChange(event.target.value)
        }
        value={formValues.maritalStatus}
      >
        <option>Single</option>
        <option>Married</option>
        <option>Divorced</option>
        <option>Widow</option>
        <option>Separated</option>
      </Select>
    </div>

    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Residential Address
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Residential Address"
      type="text"
      name="residentialAddress"
      value={formValues.residentialAddress}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      What is your current immigration status?
    </Typography>

    <div className="max-w-full">
      <Select
        id="immigrationStatus"
        name="immigrationStatus"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleImmigrationStatusChange(event.target.value)
        }
        value={formValues.immigrationStatus}
      >
        <option>Recognized Refugee</option>
        <option>Asylum Seeker</option>
        <option> Permanent Resident</option>
        <option> Temporary Resident</option>
        <option> SA Citizen</option>
      </Select>
    </div>
    <Button
      style={{ backgroundColor: "#0e5a97" }}
      type="button"
      placeholder=""
      onClick={nextStep}
    >
      Next
    </Button>
  </div>
);

const Step4 = ({
  formValues,
  handleChange,
  handleDateChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (date: Date) => void;
  nextStep: () => void;
}) => (
  <div className="mt-8">
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Date of first entry into SA
    </Typography>
    <DatePickerComponent
      value={formValues.entryDate}
      onChange={(date: Date) => handleDateChange(date)}
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Passport Number
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Passport Number"
      type="text"
      name="passportNumber"
      value={formValues.passportNumber}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />

    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Asylum/Refugee reference number:
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Refernce Number"
      type="text"
      name="referenceNumber"
      value={formValues.referenceNumber}
      onChange={handleChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Button
      style={{ backgroundColor: "#0e5a97" }}
      type="button"
      placeholder=""
      onClick={nextStep}
    >
      Next
    </Button>
  </div>
);

const Step5 = ({
  formValues,
  handleChangeTextarea,
  handleSubmit,
  handleServiceChange,
}: {
  formValues: any;
  handleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleServiceChange: (value: string | undefined) => void;
  handleChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  nextStep: () => void;
}) => (
  <div className="mt-8">
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      What service do you require?
    </Typography>
    <div className="max-w-full">
      <Select
        id="serviceType"
        name="serviceType"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleServiceChange(event.target.value)
        }
        value={formValues.serviceType}
      >
        <option> Asylum seeker appeal/review</option>
        <option> Asylum seeker visa extension</option>
        <option> Asylum seeker visa extension</option>
        <option> Critical skills visa application</option>
        <option> Letter of good cause application (FORM 20)</option>
        <option> Naturalisation application</option>
        <option>Permanent residence appeal</option>
        <option> Permanent residence application</option>
        <option> Prohibition appeal</option>
        <option> PRP Exemptions</option>
        <option>PRP Waiver</option>
        <option>Refugee permit extension</option>
        <option>Standing Committee application</option>
        <option>Study visa application</option>
        <option>Study visa rejection</option>
        <option> Temporary residence renewal</option>
        <option>TRV Exemptions</option>
        <option>TRV Waiver</option>
        <option>ZEP Migration</option>
        <option> ZEP Waiver</option>
      </Select>
    </div>

    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Please explain in detail what you require:
      </Typography>

      <textarea
        className="border-t-blue-800 focus:border-t-blue-800 p-2 rounded w-full"
        rows={4}
        name="elaborate"
        value={formValues.elaborate}
        onChange={handleChangeTextarea}
      />
      <div className="text-gray-500 text-right">
        {formValues.elaborate.length}/1000
      </div>
    </div>

    <DocumentUpload />
    <Button
      className="w-full mt-4"
      placeholder={"Button"}
      size="lg"
      type="submit"
      style={{ backgroundColor: "#0e5a97" }}
      onClick={handleSubmit}
    >
      Submit Enquiry
    </Button>
  </div>
);
export default EnquiryForm;

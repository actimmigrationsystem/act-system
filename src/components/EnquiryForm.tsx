import { useState, Dispatch, SetStateAction } from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const nextStep = () => {};

  return (
    <div>
      <StepWizard>
        <Step1
          name={name}
          setName={setName}
          phonenumber={phonenumber}
          setPhonenumber={setPhonenumber}
          nextStep={nextStep}
        />
        <Step2
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
          enquiry={enquiry}
          setEnquiry={setEnquiry}
          nextStep={nextStep}
        />
        <Step3 enquiry={enquiry} setEnquiry={setEnquiry} nextStep={nextStep} />
      </StepWizard>
    </div>
  );
};

const Step1 = ({
  name,
  setName,
  phonenumber,
  setPhonenumber,
  nextStep,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  phonenumber: string;
  setPhonenumber: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Full Name
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Fullname"
      type="text"
      name="name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Phone number
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Phone Number"
      type="tel"
      name="phonenumber"
      value={phonenumber}
      onChange={(event) => setPhonenumber(event.target.value)}
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
  contactEmail,
  setContactEmail,
  enquiry,
  setEnquiry,
}: {
  contactEmail: string;
  setContactEmail: Dispatch<SetStateAction<string>>;
  enquiry: string;
  setEnquiry: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Contact Email
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Your Email Address"
      type="email"
      name="email"
      value={contactEmail}
      onChange={(event) => setContactEmail(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Enquiry
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Your Enquiry"
      type="text"
      name="enquiry"
      value={enquiry}
      onChange={(event) => setEnquiry(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Button
      size="lg"
      style={{ backgroundColor: "#0e5a97", width: "100%" }}
      type="submit"
      placeholder=""
    >
      Submit Enquiry
    </Button>
  </>
);

const Step3 = ({
  enquiry,
  setEnquiry,
  nextStep,
}: {
  enquiry: string;
  setEnquiry: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <form
    action="https://formsubmit.co/david@actimmigration.co.za"
    method="POST"
    className="mt-12 flex flex-col gap-4"
  >
    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Enquiry
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Your Enquiry"
        type="text"
        name="enquiry"
        value={enquiry}
        onChange={(event) => setEnquiry(event.target.value)}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      <Button placeholder={"Button"} size="lg" type="button" onClick={nextStep}>
        Previous Step
      </Button>
      <Button
        placeholder={"Button"}
        size="lg"
        type="submit"
        style={{ backgroundColor: "#0e5a97" }}
      >
        Submit Enquiry
      </Button>
    </div>
  </form>
);

export default EnquiryForm;

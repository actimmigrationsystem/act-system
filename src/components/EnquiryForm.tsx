import { useState, Dispatch, SetStateAction } from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [elaborate, setElaborate] = useState("");
  const [documentUpload, setDocumentUpload] = useState("");



  const nextStep = () => {};

  return (
    <div>
      <StepWizard>
        <Step1
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          phonenumber={phonenumber}
          setPhonenumber={setPhonenumber}
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
          nextStep={nextStep}
        />
        <Step2
          gender={gender}
          setGender={setGender}
          dob={dob}
          setDOB={setDOB}
          maritalStatus={maritalStatus}
          setMaritalStatus={setMaritalStatus}
          residentialAddress={residentialAddress}
          setResidentialAddress={setResidentialAddress}
          nextStep={nextStep}
        />
        <Step3
          entryDate={entryDate}
          setEntryDate={setEntryDate}
          passportNumber={passportNumber}
          setPassportNumber={setPassportNumber}
          referenceNumber={referenceNumber}
          setReferenceNumber={setReferenceNumber}
          serviceType={serviceType}
          setServiceType={setServiceType}
          nextStep={nextStep}
        />
        <Step4
          elaborate={elaborate}
          setElaborate={setElaborate}
          documentUpload={documentUpload}
          setDocumentUpload={setDocumentUpload}
          nextStep={nextStep}
        />
      </StepWizard>
    </div>
  );
};

const Step1 = ({
  name,
  setName,
  surname,
  setSurname,
  phonenumber,
  setPhonenumber,
  contactEmail,
  setContactEmail,
  nextStep,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  surname: string;
  setSurname: Dispatch<SetStateAction<string>>;
  phonenumber: string;
  setPhonenumber: Dispatch<SetStateAction<string>>;
  contactEmail: string;
  setContactEmail: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
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
      Surname
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Surname"
      type="text"
      name="name"
      value={surname}
      onChange={(event) => setSurname(event.target.value)}
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
      value={phonenumber}
      onChange={(event) => setPhonenumber(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />

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
      value={contactEmail}
      onChange={(event) => setContactEmail(event.target.value)}
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
  gender,
  setGender,
  dob,
  setDOB,
  maritalStatus,
  setMaritalStatus,
  residentialAddress,
  setResidentialAddress,
  nextStep,
}: {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  dob: string;
  setDOB: Dispatch<SetStateAction<string>>;
  maritalStatus: string;
  setMaritalStatus: Dispatch<SetStateAction<string>>;
  residentialAddress: string;
  setResidentialAddress: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Gender
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Gender"
      type="text"
      name="gender"
      value={gender}
      onChange={(event) => setGender(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Date Of Birth
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Date Of Birth"
      type="text"
      name="enquiry"
      value={dob}
      onChange={(event) => setDOB(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Marital Status
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Marital Status"
      type="text"
      name="enquiry"
      value={maritalStatus}
      onChange={(event) => setMaritalStatus(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
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
      value={residentialAddress}
      onChange={(event) => setResidentialAddress(event.target.value)}
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

const Step3 = ({
  entryDate,
  setEntryDate,
  passportNumber,
  setPassportNumber,
  referenceNumber,
  setReferenceNumber,
  serviceType,
  setServiceType,
  nextStep,
}: {
  entryDate: string;
  setEntryDate: Dispatch<SetStateAction<string>>;
  passportNumber: string;
  setPassportNumber: Dispatch<SetStateAction<string>>;
  referenceNumber: string;
  setReferenceNumber: Dispatch<SetStateAction<string>>;
  serviceType: string;
  setServiceType: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Entry Date
    </Typography>
    <FloatingLabel
      variant="filled"
      label=" Date of first entry into SA"
      type="text"
      name="entryDate"
      value={entryDate}
      onChange={(event) => setEntryDate(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Passport number:
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Passport Number"
      type="text"
      name="passportNumber"
      value={passportNumber}
      onChange={(event) => setPassportNumber(event.target.value)}
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
      label="Marital Status"
      type="text"
      name="enquiry"
      value={referenceNumber}
      onChange={(event) => setReferenceNumber(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      What service do you require?
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Service Type"
      type="text"
      name="serviceType"
      value={serviceType}
      onChange={(event) => setServiceType(event.target.value)}
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

const Step4 = ({
  elaborate,
  setElaborate,
  documentUpload,
  setDocumentUpload,
}: {
  elaborate: string;
  setElaborate: Dispatch<SetStateAction<string>>;
  documentUpload: string;
  setDocumentUpload: Dispatch<SetStateAction<string>>;
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
        Please elaborate on the service(s) that you need:
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Elaborate"
        type="text"
        name="elaborate"
        value={elaborate}
        onChange={(event) => setElaborate(event.target.value)}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Please upload your documents for further assistance: (E.g. Passport,
        Asylum/Refugee status, Visa(s), Rejection letter(s), Marriage
        certificate, etc.)
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Elaborate"
        type="text"
        name="elaborate"
        value={documentUpload}
        onChange={(event) => setDocumentUpload(event.target.value)}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
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

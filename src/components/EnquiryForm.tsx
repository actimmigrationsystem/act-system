import { useState, Dispatch, SetStateAction } from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button, Select, MenuItem } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";
import DocumentUpload from "./DocumentUpload";

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
  const [immigrationStatus, setImmigrationStatus] = useState("");






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
          immigrationStatus={immigrationStatus}
          setImmigrationStatus={setImmigrationStatus}
          entryDate={entryDate}
          setEntryDate={setEntryDate}
          passportNumber={passportNumber}
          setPassportNumber={setPassportNumber}
          referenceNumber={referenceNumber}
          setReferenceNumber={setReferenceNumber}
          nextStep={nextStep}
        />
        <Step4
          serviceType={serviceType}
          setServiceType={setServiceType}
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
    <Select
      placeholder={"Select"}
      value={gender}
      onChange={(value) => {
        if (value) {
          setGender(value);
        }
      }}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    >
      <MenuItem placeholder="" value="" disabled>
        Select Gender
      </MenuItem>
      <MenuItem placeholder="service1" value="service1">
        Male
      </MenuItem>
      <MenuItem placeholder="service1" value="service1">
        Female
      </MenuItem>
      <MenuItem placeholder="service1" value="service1">
        Other
      </MenuItem>
    </Select>
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
    <Select
      placeholder={"Select"}
      value={maritalStatus}
      onChange={(value) => {
        if (value) {
          setMaritalStatus(value);
        }
      }}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    >
      <MenuItem placeholder="" value="single">
        Single
      </MenuItem>
      <MenuItem placeholder="service1" value="married">
        Married
      </MenuItem>
      <MenuItem placeholder="service1" value="divorced">
        Divorced
      </MenuItem>
      <MenuItem placeholder="service1" value="separated">
        Seperated
      </MenuItem>
      <MenuItem placeholder="service1" value="widow">
        Widow
      </MenuItem>
    </Select>
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
  immigrationStatus,
  setImmigrationStatus,
  entryDate,
  setEntryDate,
  passportNumber,
  setPassportNumber,
  referenceNumber,
  setReferenceNumber,
  nextStep,
}: {
  immigrationStatus: string;
  setImmigrationStatus: Dispatch<SetStateAction<string>>;
  entryDate: string;
  setEntryDate: Dispatch<SetStateAction<string>>;
  passportNumber: string;
  setPassportNumber: Dispatch<SetStateAction<string>>;
  referenceNumber: string;
  setReferenceNumber: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      What is your current immigration status?
    </Typography>
    <Select
      placeholder={"Select"}
      value={immigrationStatus}
      onChange={(value) => {
        if (value) {
          setImmigrationStatus(value);
        }
      }}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    >
      <MenuItem placeholder="" value="" disabled>
        Asylum Seeker
      </MenuItem>
      <MenuItem placeholder="service1" value="service1">
        Recognized Refugee
      </MenuItem>
      <MenuItem placeholder="service2" value="service2">
        Permanent Resident
      </MenuItem>
      <MenuItem placeholder="service3" value="service3">
        Temporary Resident
      </MenuItem>
      <MenuItem placeholder="service3" value="service3">
        SA Citizen
      </MenuItem>
    </Select>
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
      label="Refernce Number"
      type="text"
      name="enquiry"
      value={referenceNumber}
      onChange={(event) => setReferenceNumber(event.target.value)}
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
  serviceType,
  setServiceType,
  elaborate,
  setElaborate,
  documentUpload,
  setDocumentUpload,
}: {
  serviceType: string;
  setServiceType: Dispatch<SetStateAction<string>>;
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
        What service do you require?
      </Typography>
      <Select
        placeholder={"Select"}
        value={serviceType}
        onChange={(value) => {
          if (value) {
            setServiceType(value);
          }
        }}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      >
        <MenuItem placeholder="" value="" disabled>
          Asylum seeker appeal/review
        </MenuItem>
        <MenuItem placeholder="service1" value="service1">
          Asylum seeker visa extension
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Critical skills visa application
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Letter of good cause application (FORM 20)
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Naturalisation application
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Permanent residence appeal
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Permanent residence application
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Prohibition appeal
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          PRP Exemptions
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          PRP Waiver
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Refugee permit extension
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Standing Committee application
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Standing Committee rejection (NB: PROVIDE REJECTION LETTER)
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Study visa application
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Study visa rejection
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Temporary residence renewal
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          TRV Exemptions
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          TRV Waiver
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          ZEP Migration
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          ZEP Waiver
        </MenuItem>
      </Select>
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
      <DocumentUpload />
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

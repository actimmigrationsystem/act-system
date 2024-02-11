import { useState, Dispatch, SetStateAction } from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button, Select, MenuItem } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
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



 const [formValues, setFormValues] = useState({
         name: '',
    _subject: 'Enquiry',
    email: '',
    message: '',
    contactEmail: '',
    gender: '',
    dob: '',
    maritalStatus: '',
    residentialAddress: '',
    entryDate: '',
    passportNumber: '',
    referenceNumber: '',
    serviceType: '',
    elaborate: '',
    documentUpload: '',
    immigrationStatus: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
};
    const handleRefreshClick = () => {
        // refresh the page
        setFormSubmitted(false);
        window.location.reload();
    };
    const ThankYouMessage = () => (
        <div>
        <div style={{ backgroundColor: '#ffa000', color: 'white', padding: '10px', marginBottom: '10px' }}>
        Thank you for your message! I will respond shortly.
        </div>
            <br />
            <Button placeholder="Refresh Page" className="sendagain" onClick={handleRefreshClick}>
                <RiMailSendLine style={{ marginRight: '8px' }} />
                Send Another Enquiry
            </Button>
        </div>

    );
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = document.createElement('form');
        form.action = 'https://formsubmit.co/rileymanda0@gmail.com';
        form.method = 'POST';
        form.target = '_blank';

        // form data
        Object.entries(formValues).forEach(([name, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();

        // Clear the form
        setFormValues({
          name: '',
    _subject: 'Enquiry',
    email: '',
    message: '',
    contactEmail: '',
    gender: '',
    dob: '',
    maritalStatus: '',
    residentialAddress: '',
    entryDate: '',
    passportNumber: '',
    referenceNumber: '',
    serviceType: '',
    elaborate: '',
    documentUpload: '',
    immigrationStatus: ''

        });
        setFormSubmitted(true);
    };





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
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={handleChange}
          nextStep={nextStep}
        />
        <Step2
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
          gender={gender}
          setGender={setGender}
          dob={dob}
          setDOB={setDOB}
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={handleChange}
          nextStep={nextStep}
        />
        <Step3
          maritalStatus={maritalStatus}
          setMaritalStatus={setMaritalStatus}
          residentialAddress={residentialAddress}
          setResidentialAddress={setResidentialAddress}
          immigrationStatus={immigrationStatus}
          setImmigrationStatus={setImmigrationStatus}
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={handleChange}
          nextStep={nextStep}
        />
        <Step4
          entryDate={entryDate}
          setEntryDate={setEntryDate}
          passportNumber={passportNumber}
          setPassportNumber={setPassportNumber}
          referenceNumber={referenceNumber}
          setReferenceNumber={setReferenceNumber}
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={handleChange}
          nextStep={nextStep}
        />
        <Step5
          serviceType={serviceType}
          setServiceType={setServiceType}
          elaborate={elaborate}
          setElaborate={setElaborate}
          documentUpload={documentUpload}
          setDocumentUpload={setDocumentUpload}
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </StepWizard>
      {formSubmitted && <ThankYouMessage />}
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
  formValues,
  setFormValues,
  handleChange,
  nextStep,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  surname: string;
  setSurname: Dispatch<SetStateAction<string>>;
  phonenumber: string;
  setPhonenumber: Dispatch<SetStateAction<string>>;
  formValues: any;
  setFormValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  gender,
  setGender,
  dob,
  setDOB,
  formValues,
  setFormValues,
  handleChange,
  nextStep,
}: {
  contactEmail: string;
  setContactEmail: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  dob: string;
  setDOB: Dispatch<SetStateAction<string>>;
  formValues: any;
  setFormValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}) => (
  <div>
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
      <MenuItem placeholder="male" value="male">
        Male
      </MenuItem>
      <MenuItem placeholder="female" value="female">
        Female
      </MenuItem>
      <MenuItem placeholder="other" value="other">
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
  maritalStatus,
  setMaritalStatus,
  residentialAddress,
  setResidentialAddress,
  immigrationStatus,
  setImmigrationStatus,
  formValues,
  setFormValues,
  handleChange,
  nextStep,
}: {
  immigrationStatus: string;
  setImmigrationStatus: Dispatch<SetStateAction<string>>;
  maritalStatus: string;
  setMaritalStatus: Dispatch<SetStateAction<string>>;
  residentialAddress: string;
  setResidentialAddress: Dispatch<SetStateAction<string>>;
  formValues: any;
  setFormValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}) => (
  <div>
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
      <MenuItem placeholder="married" value="married">
        Married
      </MenuItem>
      <MenuItem placeholder="divorced" value="divorced">
        Divorced
      </MenuItem>
      <MenuItem placeholder="seperated" value="separated">
        Seperated
      </MenuItem>
      <MenuItem placeholder="widow" value="widow">
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
      <MenuItem placeholder="status1" value="status1">
        Recognized Refugee
      </MenuItem>
      <MenuItem placeholder="status2" value="status2">
        Permanent Resident
      </MenuItem>
      <MenuItem placeholder="status3" value="status3">
        Temporary Resident
      </MenuItem>
      <MenuItem placeholder="status4" value="status5">
        SA Citizen
      </MenuItem>
    </Select>
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
  entryDate,
  setEntryDate,
  passportNumber,
  setPassportNumber,
  referenceNumber,
  setReferenceNumber,
  formValues,
  setFormValues,
  handleChange,
  nextStep,
}: {
  entryDate: string;
  setEntryDate: Dispatch<SetStateAction<string>>;
  passportNumber: string;
  setPassportNumber: Dispatch<SetStateAction<string>>;
  referenceNumber: string;
  setReferenceNumber: Dispatch<SetStateAction<string>>;
 formValues: any;
  setFormValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        Passport Number
      </Typography>
      <FloatingLabel
        variant="filled"
        label=" Date of first entry into SA"
        type="text"
        name="entryDate"
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

const Step5 = ({
  serviceType,
  setServiceType,
  elaborate,
  setElaborate,
  documentUpload,
  setDocumentUpload,
  formValues,
  setFormValues,
  handleSubmit,
}: {
  serviceType: string;
  setServiceType: Dispatch<SetStateAction<string>>;
  elaborate: string;
  setElaborate: Dispatch<SetStateAction<string>>;
  documentUpload: string;
  setDocumentUpload: Dispatch<SetStateAction<string>>;
   formValues: any;
  setFormValues: any;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        <MenuItem placeholder="" value="">
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
        <MenuItem placeholder="service4" value="service4">
          Naturalisation application
        </MenuItem>
        <MenuItem placeholder="service5" value="service5">
          Permanent residence appeal
        </MenuItem>
        <MenuItem placeholder="service6" value="service6">
          Permanent residence application
        </MenuItem>
        <MenuItem placeholder="service7" value="service7">
          Prohibition appeal
        </MenuItem>
        <MenuItem placeholder="service8" value="service8">
          PRP Exemptions
        </MenuItem>
        <MenuItem placeholder="service9" value="service9">
          PRP Waiver
        </MenuItem>
        <MenuItem placeholder="service10" value="service10">
          Refugee permit extension
        </MenuItem>
        <MenuItem placeholder="service11" value="service11">
          Standing Committee application
        </MenuItem>
        <MenuItem placeholder="service12" value="service12">
          Standing Committee rejection (NB: PROVIDE REJECTION LETTER)
        </MenuItem>
        <MenuItem placeholder="service13" value="service13">
          Study visa application
        </MenuItem>
        <MenuItem placeholder="service14" value="service14">
          Study visa rejection
        </MenuItem>
        <MenuItem placeholder="service15" value="service15">
          Temporary residence renewal
        </MenuItem>
        <MenuItem placeholder="service16" value="service16">
          TRV Exemptions
        </MenuItem>
        <MenuItem placeholder="service17" value="service17">
          TRV Waiver
        </MenuItem>
        <MenuItem placeholder="service18" value="service18">
          ZEP Migration
        </MenuItem>
        <MenuItem placeholder="service19" value="service19">
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
        onClick={handleSubmit}
      >
        Submit Enquiry
      </Button>
    </div>
  </form>
);
const ThankYouMessage = () => (
  <div>
    <div
      style={{
        backgroundColor: "#B05656",
        color: "white",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      Thank you for your message! We will respond shortly.
    </div>
    <br />
    <Button placeholder="Refresh Page" className="sendagain">
      <RiMailSendLine style={{ marginRight: "8px" }} />
      Send Another Enquiry
    </Button>

  </div>
  );
export default EnquiryForm;

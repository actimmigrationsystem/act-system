import { useState,} from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button, Select, MenuItem } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import { FloatingLabel } from "flowbite-react";
import DocumentUpload from "./DocumentUpload";

const EnquiryForm = () => {
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  // const [contactEmail, setContactEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [dob, setDOB] = useState("");
  // const [maritalStatus, setMaritalStatus] = useState("");
  // const [residentialAddress, setResidentialAddress] = useState("");
  // const [entryDate, setEntryDate] = useState("");
  // const [passportNumber, setPassportNumber] = useState("");
  // const [referenceNumber, setReferenceNumber] = useState("");
  // const [serviceType, setServiceType] = useState("");
  // const [elaborate, setElaborate] = useState("");
  // const [documentUpload, setDocumentUpload] = useState("");
  // const [immigrationStatus, setImmigrationStatus] = useState("");



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
        <div style={{ backgroundColor: '#EB6F6F', color: 'white', padding: '10px', marginBottom: '10px' }}>
            Thank you for your message! We will respond shortly.
        </div>
        <br />
        <Button placeholder="Refresh Page" className="sendagain" onClick={handleRefreshClick}>
            <RiMailSendLine className="w-4 h-4 me-2" style={{ marginRight: '12px' }} />
            Send Another Enquiry
        </Button>
    </div>
);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = document.createElement('form');
        form.action = "https://formsubmit.co/enquiries@actimmigration.co.za";
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


// const handleSelectChange = (value: string | undefined) => {
//   if (value) {
//     setFormValues(prevState => ({ ...prevState, gender: value }));
//   }
// };

const handleGenderChange = (value: string | undefined) => {
  if (value) {
    setFormValues(prevState => ({ ...prevState, gender: value }));
  }
};
// const handleResidentialChange = (value: string | undefined) => {
//   if (value) {
//     setFormValues(prevState => ({ ...prevState, gender: value }));
//   }
// };

const handleMaritalStatusChange = (value: string | undefined) => {
  if (value) {
    setFormValues(prevState => ({ ...prevState, gender: value }));
  }
};

const handleImmigrationStatusChange = (value: string | undefined) => {
  if (value) {
    setFormValues(prevState => ({ ...prevState, gender: value }));
  }
};


  const nextStep = () => {};

  return (
    <div>
      <StepWizard>
        <Step1
          formValues={formValues}
          handleChange={handleChange}
          nextStep={nextStep}
        />
        <Step2
          formValues={formValues}
          handleChange={handleChange}
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
          handleChange={handleChange}
          nextStep={nextStep}
        />
        <Step5
          formValues={formValues}
          handleChange={handleChange}
          handleGenderChange={handleGenderChange}
          handleSubmit={handleSubmit}
          nextStep={nextStep}
        />
      </StepWizard>
      {formSubmitted && <ThankYouMessage />}
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
  nextStep,
}: {
  formValues: any;
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
      Gender
    </Typography>
    <Select
      placeholder={"Select"}
  value={formValues.gender}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    >
      <MenuItem placeholder="" value="" disabled>
        Select Gender
      </MenuItem>
      <MenuItem placeholder="male" name="male" value="male">
        Male
      </MenuItem>
      <MenuItem placeholder="female" name="female" value="female">
        Female
      </MenuItem>
      <MenuItem placeholder="other" name="other" value="other">
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
      name="dob"
      value={formValues.dob}
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
      value={formValues.dob}
      onChange={handleMaritalStatusChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    >
      <MenuItem placeholder="" name="single" value="single">
        Single
      </MenuItem>
      <MenuItem placeholder="married" name="single" value="married">
        Married
      </MenuItem>
      <MenuItem placeholder="divorced" name="divorced" value="divorced">
        Divorced
      </MenuItem>
      <MenuItem placeholder="seperated" name="seperated" value="separated">
        Seperated
      </MenuItem>
      <MenuItem placeholder="widow" name="widow" value="widow">
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
    <Select
      placeholder={"Select"}
      value={formValues.immigrationStatus}
      onChange={handleImmigrationStatusChange}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    >
      <MenuItem
        placeholder=""
        value="Asylum Seeker"
        name="Asylum Seeker"
        disabled
      >
        Asylum Seeker
      </MenuItem>
      <MenuItem placeholder="status1" value="status1" name="Recognized Refugee">
        Recognized Refugee
      </MenuItem>
      <MenuItem placeholder="status2" value="status2" name="Permanent Resident">
        Permanent Resident
      </MenuItem>
      <MenuItem placeholder="status3" value="status3" name="Temporary Resident">
        Temporary Resident
      </MenuItem>
      <MenuItem placeholder="status4" value="status5" name="SA Citizen">
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
  formValues,
  handleChange,
  nextStep,
}: {
  formValues: any;
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
      value={formValues.entryDate}
      onChange={handleChange}
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
      name="enquiry"
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
  handleChange,
  handleSubmit,
  handleGenderChange,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleGenderChange: (value: string | undefined) => void;
  nextStep: () => void;
}) => (
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
      value={formValues.dob}
      onChange={handleGenderChange}
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
      value={formValues.elaborate}
      onChange={handleChange}
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
);
export default EnquiryForm;

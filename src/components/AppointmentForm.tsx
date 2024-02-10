import { useState, Dispatch, SetStateAction } from "react";
import StepWizard from "react-step-wizard";
import {
  Typography,
  Button,
  Select,
  MenuItem,
} from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";
import DateComponent from "./DateComponents";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [service, setService] = useState("");
  const [immigrationStatus, setImmigrationStatus] = useState("");
  const [previousAdvice, setPreviousAdvice] = useState("");
  const [nationality, setNationality] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [category, setCategory] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

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
          service={service}
          setService={setService}
          nextStep={nextStep}
        />
        <Step3
          immigrationStatus={immigrationStatus}
          setImmigrationStatus={setImmigrationStatus}
          previousAdvice={previousAdvice}
          setPreviousAdvice={setPreviousAdvice}
          nextStep={nextStep}
        />
        <Step4
          nationality={nationality}
          setNationality={setNationality}
          serviceType={serviceType}
          setServiceType={setServiceType}
          nextStep={nextStep}
        />
        <Step5
          category={category}
          setCategory={setCategory}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
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
  service,
  setService,
  nextStep,
}: {
  contactEmail: string;
  setContactEmail: Dispatch<SetStateAction<string>>;
  service: string;
  setService: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
    <div>
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
    </div>

    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Which service do you require?
      </Typography>
      <Select
        placeholder={"Select"}
        value={service}
        onChange={(value) => {
          if (value) {
            setService(value);
          }
        }}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      >
        <MenuItem placeholder="" value="" disabled>
          Visa
        </MenuItem>
        <MenuItem placeholder="service1" value="service1">
          Permits
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Appeals
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Legal Assistance(Other)
        </MenuItem>
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

const Step3 = ({
  immigrationStatus,
  setImmigrationStatus,
  previousAdvice,
  setPreviousAdvice,
  nextStep,
}: {
  immigrationStatus: string;
  setImmigrationStatus: Dispatch<SetStateAction<string>>;
  previousAdvice: string;
  setPreviousAdvice: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
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
          No Status
        </MenuItem>
        <MenuItem placeholder="service1" value="service1">
          Work Visa
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Permanent Resident
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Asylum
        </MenuItem>
      </Select>
    </div>
    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Have you received previous advice on this before?
      </Typography>
      <Select
        placeholder={"Select"}
        value={previousAdvice}
        onChange={(value) => {
          if (value) {
            setPreviousAdvice(value);
          }
        }}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      >
        <MenuItem placeholder="" value="Select Option">
          Yes
        </MenuItem>
        <MenuItem placeholder="No" value="no">
          No
        </MenuItem>
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
  nationality,
  setNationality,
  serviceType,
  setServiceType,
  nextStep,
}: {
  nationality: string;
  setNationality: Dispatch<SetStateAction<string>>;
  serviceType: string;
  setServiceType: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}) => (
  <div>
    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        What is your nationality?
      </Typography>
      <Select
        placeholder={"Select"}
        value={nationality}
        onChange={(value) => {
          if (value) {
            setNationality(value);
          }
        }}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      >
        <MenuItem placeholder="" value="" disabled>
          Zimbabwe
        </MenuItem>
        <MenuItem placeholder="service1" value="service1">
          Kenya
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Ehtiopia
        </MenuItem>
      </Select>
    </div>
    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        How would you like to receive this service?
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
          In Person-Office
        </MenuItem>
        <MenuItem placeholder="service1" value="service1">
          Remote(Zoom)
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Email
        </MenuItem>
        <MenuItem placeholder="service3" value="service3">
          Phonecall
        </MenuItem>
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


const Step5 = ({
  category,
  setCategory,
  appointmentDate,
  setAppointmentDate,
}: {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  appointmentDate: string;
  setAppointmentDate: Dispatch<SetStateAction<string>>;
}) => (
  <div>
    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Select legal category
      </Typography>
      <Select
        placeholder={"Select"}
        value={category}
        onChange={(value) => {
          if (value) {
            setCategory(value);
          }
        }}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      >
        <MenuItem placeholder="" value="" disabled>
          Visa
        </MenuItem>
        <MenuItem placeholder="service1" value="service1">
          Permits
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Appeals
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Legal Advice
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Conveyance
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Legal Represenation
        </MenuItem>
        <MenuItem placeholder="service2" value="service2">
          Commision of Oaths
        </MenuItem>
      </Select>
    </div>
    <div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Select Date
      </Typography>
      <DateComponent
        appointmentDate={appointmentDate}
        setAppointmentDate={setAppointmentDate}
      />
    </div>
    <Button
      placeholder={"Button"}
      size="lg"
      type="submit"
      style={{ backgroundColor: "#0e5a97" }}
    >
      Book Appointment
    </Button>
  </div>
);

export default AppointmentForm;

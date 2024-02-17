import { useState } from "react";
import StepWizard from "react-step-wizard";
import { Typography, Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import { FloatingLabel, Select } from "flowbite-react";
import DateComponent from "./DateComponent";
import TimePicker from "./TimePicker";


const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    _subject: "Appointment",
    email: "",
    serviceType: "",
    appointmentType: "",
    appointmentDate: "",
    appointmentTime: "",
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
      surname: "",
      _subject: "Appointment",
      email: "",
      serviceType: "",
      appointmentType: "",
      appointmentDate: "",
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
            handleServiceChange={handleServiceChange}
            handleAppointmentType={handleAppointmentType}
            nextStep={nextStep}
          />
          <Step3
            formValues={formValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFormValues={setFormValues}
            setAppointmentDate={(value: string) =>
              setFormValues((prevState: any) => ({
                ...prevState,
                appointmentDate: value,
              }))
            }
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
  handleServiceChange,
  handleAppointmentType,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleServiceChange: (value: string | undefined) => void;
  handleAppointmentType: (value: string | undefined) => void;
  nextStep: () => void;
}) => (
  <div>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Email
    </Typography>
    <FloatingLabel
      variant="filled"
      label="Email"
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
        How would you like to receive this service?
      </Typography>
      <div className="max-w-full">
        <Select
          id="appointmentType"
          name="appointmentType"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handleAppointmentType(event.target.value)
          }
          value={formValues.appointmentType}
        >
          <option>Phone call</option>
          <option>Email</option>
          <option>Remote(zoom|skype)</option>
          <option>In-Person(Office)</option>
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
  </div>
);

const Step3 = ({
  handleSubmit,
}: {
  formValues: any;
  setFormValues: React.Dispatch<React.SetStateAction<any>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setAppointmentDate: (value: string) => void;
}) => (
  <div>
    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Select appointment date
    </Typography>
    <DateComponent />

    <Typography
      placeholder={"Typography"}
      variant="small"
      color="blue-gray"
      className="mb-2 font-medium"
    >
      Select appointment time
    </Typography>

    <TimePicker
      value={"8:00"}
      onChange={function (): void {
        throw new Error("Function not implemented.");
      }}
    />

    <Button
      placeholder={"Button"}
      size="lg"
      type="submit"
      style={{ backgroundColor: "#0e5a97" }}
      onClick={handleSubmit}
      className="mt-8 w-full"
    >
      Book Appointment
    </Button>
  </div>
);


export default AppointmentForm;

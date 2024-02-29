import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import StepWizard from "react-step-wizard";
import { Typography, Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import { FloatingLabel, Checkbox, Label } from "flowbite-react";
import AppointmentDatePicker from "./AppointmentDatePicker";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    _subject: "Appointment",
    email: "",
    serviceType: "",
    appointmentType: "",
    appointmentDate: new Date(),
    appointmentTime: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

const handleAppointmentDateChange = (date: Date | undefined) => {
    if (date) {
      setFormValues((prevState) => ({
        ...prevState,
        appointmentDate: date,
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        appointmentDate: new Date(),
      }));
    }
}





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
      input.value = value instanceof Date ? value.toISOString() : value;
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
      appointmentDate: new Date(),
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
    <div className="mt-8">
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
            handleAppointmentDateChange={handleAppointmentDateChange}
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
    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/2 px-2">
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
      </div>
      <div className="w-full md:w-1/2 px-2">
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
      </div>
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

const Step2 = ({
  formValues,
  handleAppointmentDateChange,
  handleSubmit,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAppointmentDateChange: (date: Date | undefined) => void;
  handleServiceChange: (value: string | undefined) => void;
  handleAppointmentType: (value: string | undefined) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  const serviceOptions = [
    "Asylum seeker appeal/review",
    "Asylum seeker visa extension",
    "Critical skills visa application",
    "Letter of good cause application (FORM 20)",
    "Naturalisation application",
    "Permanent residence appeal",
    "Permanent residence application",
    "Prohibition appeal",
    "PRP Exemptions",
    "PRP Waiver",
    "Refugee permit extension",
    "Standing Committee application",
    "Study visa application",
    "Study visa rejection",
    "Temporary residence renewal",
    "TRV Exemptions",
    "TRV Waiver",
    "ZEP Migration",
    "ZEP Waiver",
  ];

  const appointmentOptions = [
    "Phone call",
    "Email",
    "Remote (zoom|skype)",
    "In-Person (Office)",
  ];

  const venueOptions = [
    "Cape Town Office",
    "East London Office",
    "Johannesburg Office",
    "Kariega Office",
    "Mthatha",
  ];

  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [selectedAppointmentType, setSelectedAppointmentType] = useState(
    appointmentOptions[0]
  );
  const [selectedVenueType, setSelectedVenueType] = useState(venueOptions[0]);
  return (
    <div className="mt-8">
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        What service do you require?
      </Typography>
      <div className="max-w-full mb-4">
        <Listbox value={selectedService} onChange={setSelectedService}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selectedService}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {serviceOptions.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active, selected }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      } ${selected ? "font-medium" : "font-normal"}`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className="block truncate">{option}</span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        How would you like to receive this service?
      </Typography>
      <div className="max-w-full mb-4">
        <Listbox
          value={selectedAppointmentType}
          onChange={setSelectedAppointmentType}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selectedAppointmentType}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {appointmentOptions.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active, selected }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      } ${selected ? "font-medium" : "font-normal"}`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className="block truncate">{option}</span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Select Appointment Date/Time
          </Typography>
          <AppointmentDatePicker
            value={formValues.appointmentDate}
            onChange={handleAppointmentDateChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Select Appointment Venue
          </Typography>
          <div className="max-w-full">
            <Listbox value={selectedVenueType} onChange={setSelectedVenueType}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedVenueType}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {venueOptions.map((option, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active, selected }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-blue-100 text-blue-900"
                              : "text-gray-900"
                          } ${selected ? "font-medium" : "font-normal"}`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span className="block truncate">{option}</span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      <div className="flex max-w-md flex-col gap-4" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="accept" defaultChecked />
          <Label htmlFor="accept" className="flex">
            I agree with the&nbsp;
            <Link
              to="/privacy-policy"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
      </div>

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
};

export default AppointmentForm;

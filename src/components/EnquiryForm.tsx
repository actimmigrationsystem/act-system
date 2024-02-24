import { useState, ChangeEvent, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import StepWizard from "react-step-wizard";
import { Typography, Button } from "@material-tailwind/react";
import { RiMailSendLine } from "react-icons/ri";
import { FloatingLabel } from "flowbite-react";
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
            handleMaritalStatusChange={handleMaritalStatusChange}
            nextStep={nextStep}
          />
          <Step3
            formValues={formValues}
            handleChange={handleChange}
            handleDateChange={(date: Date) =>
              handleDateChange("entryDate", date)
            }
            handleImmigrationStatusChange={handleImmigrationStatusChange}
            nextStep={nextStep}
          />
          <Step4
            formValues={formValues}
            handleChange={handleChange}
            handleServiceChange={handleServiceChange}
            handleChangeTextarea={handleChangeTextarea}
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
      className="!border-t-blue-gray-200 focus:!border-t-gray-900 mb-4"
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
      className="!border-t-blue-gray-200 focus:!border-t-gray-900 mb-4"
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
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 mb-4"
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
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 mb-4"
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
  handleDateChange,
  handleChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string | undefined) => void;
  handleDateChange: (date: Date) => void;
  handleMaritalStatusChange: (value: string | undefined) => void;
  nextStep: () => void;
}) => {
  const genderOptions = ["Female", "Male", "Other"];
  const maritalStatusOptions = [
    "Single",
    "Married",
    "Divorced",
    "Widow",
    "Separated",
  ];
  const [selectedGender, setSelectedGender] = useState(genderOptions[0]);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(
    maritalStatusOptions[0]
  );

  return (
    <div className="mt-8">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            What is your gender
          </Typography>

          <Listbox value={selectedGender} onChange={setSelectedGender}>
            {({ open }) => (
              <>
                <div className="relative mt-1 mb-4">
                  <Listbox.Button className="relative z-10 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedGender}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {genderOptions.map((option, index) => (
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
              </>
            )}
          </Listbox>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Date of Birth
          </Typography>
          <div className="absolute z-20 mb-4">
            <DatePickerComponent
              value={formValues.dob}
              onChange={(date: Date) => handleDateChange(date)}
            />
          </div>
        </div>
      </div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Marital Status
      </Typography>
      <div className="max-w-full mb-4">
        <Listbox
          value={selectedMaritalStatus}
          onChange={setSelectedMaritalStatus}
        >
          {({ open }) => (
            <>
              <div className="relative mt-1">
                <Listbox.Button className="relative z-10 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selectedMaritalStatus}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {maritalStatusOptions.map((option, index) => (
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
            </>
          )}
        </Listbox>
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
};

const Step3 = ({
  formValues,
  handleChange,
  handleDateChange,
  nextStep,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImmigrationStatusChange: (value: string | undefined) => void;
  handleDateChange: (date: Date) => void;
  nextStep: () => void;
}) => {
  const immigrationStatusOptions = [
    "Recognized Refugee",
    "Asylum Seeker",
    "Permanent Resident",
    "Temporary Resident",
    "SA Citizen",
  ];
  const [selectedImmigrationStatus, setSelectedImmigrationStatus] = useState(
    immigrationStatusOptions[0]
  );

  return (
    <div className="mt-8">
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        What is your current immigration status?
      </Typography>

      <div className="max-w-full mb-4">
        <Listbox
          value={selectedImmigrationStatus}
          onChange={setSelectedImmigrationStatus}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {selectedImmigrationStatus}
              </span>
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
                {immigrationStatusOptions.map((option, index) => (
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
      <div className="w-full md:w-full mb-8">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Date of First Entry into South Africa
        </Typography>
        <div className="absolute z-20">
          <DatePickerComponent
            value={formValues.entryDate}
            onChange={(date: Date) => handleDateChange(date)}
          />
        </div>
      </div>
      <div className="w-full md:w-full mb-8">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
      </div>
      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        Asylum/Refugee Reference number:
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Reference Number"
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
};

const Step4 = ({
  formValues,
  handleChangeTextarea,
  handleSubmit,
}: {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleServiceChange: (value: string | undefined) => void;
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

  const [selectedService, setSelectedService] = useState(serviceOptions[0]);

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
      <div className="max-w-full">
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
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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
      <div>
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Please explain in detail what you require:
        </Typography>
        <div className="mb-6">
          <textarea
            rows={4}
            name="elaborate"
            value={formValues.elaborate}
            onChange={handleChangeTextarea}
            className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          />
        </div>
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
};
export default EnquiryForm;

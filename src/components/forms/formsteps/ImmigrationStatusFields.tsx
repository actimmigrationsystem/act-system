import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Typography, Button } from "@material-tailwind/react";
import { FloatingLabel  } from "flowbite-react";
import DatePickerComponent from "../datepickers/DatePickerComponent";
import { FaArrowLeft } from "react-icons/fa";

interface ImmigrationStatusFieldsProps {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImmigrationStatusChange: (value: string | undefined) => void;
  handleEntryDateChange: (date: Date) => void;
  nextStep: () => void;
  previousStep: () => void;
}

const ImmigrationStatusFields: React.FC<ImmigrationStatusFieldsProps> = ({
  formValues,
  handleChange,
  handleEntryDateChange,
  handleImmigrationStatusChange,
  previousStep,
  nextStep,
}) => {
  const immigrationStatusOptions = [
    "Recognized Refugee",
    "Asylum Seeker",
    "Permanent Resident",
    "Temporary Resident",
    "SA Citizen",
    "Other",
    "Undocumented",
  ];
  const [selectedImmigrationStatus, setSelectedImmigrationStatus] = useState(
    immigrationStatusOptions[0]
  );

    const [filledFields, setFilledFields] = useState<Record<string, boolean>>(
      {}
    );
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   handleChange(e);
  //   setFilledFields({
  //     ...filledFields,
  //     [name]: !!value,
  //   });
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(e);
    setFilledFields({
      ...filledFields,
      [name]: !!value,
    });
  };


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
            Your current immigration status?
          </Typography>

          <div className="max-w-full mb-4">
            <Listbox
              value={selectedImmigrationStatus}
              onChange={(value) => {
                setSelectedImmigrationStatus(value);
                handleImmigrationStatusChange(value);
              }}
            >
              {({ open }) => (
                <>
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
                      show={open}
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
        </div>
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Date of First Entry into South Africa
          </Typography>
          <div className="absolute z-20 mb-8">
            <DatePickerComponent
              value={formValues.entryDate}
              onChange={(date: Date) => handleEntryDateChange(date)}
            />
          </div>
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
          onChange={handleInputChange}
          className={`focus:border-red-600 ${
            filledFields["residential_address"] ? "border-green-600" : ""
          }`}
        />
      </div>
      <div className="w-full md:w-full mb-4">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Asylum/Refugee/Permit Reference number:
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
      </div>
      <div className="flex justify-between">
        <Button
          className="mr-4"
          style={{ backgroundColor: "#0e5a97" }}
          type="button"
          placeholder=""
          onClick={previousStep}
        >
          <FaArrowLeft />
        </Button>
        <Button
          style={{ backgroundColor: "#0e5a97" }}
          type="button"
          placeholder=""
          onClick={nextStep}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ImmigrationStatusFields;
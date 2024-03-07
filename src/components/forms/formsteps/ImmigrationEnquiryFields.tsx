import { useState, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { Typography, Button } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";
import DatePickerComponent from "../datepickers/DatePickerComponent";

interface ImmigrationEnquiryProps {
  formValues: {
    entryDate: Date;
    passportNumber: string;
    referenceNumber: string;
  };
  handleDateChange: (date: Date) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

const ImmigrationEnquiry: React.FC<ImmigrationEnquiryProps> = ({
  formValues,
  handleDateChange,
  handleChange,
  nextStep,
}) => {
  const immigrationStatusOptions = [
    "Recognized Refugee",
    "Asylum Seeker",
    "Permanent Resident",
    "UnDocumented Asylum Seeker",
    "Temporary Resident",
    "SA Citizen",
    "Other",
  ];
  const [selectedImmigrationStatus, setSelectedImmigrationStatus] = useState(
    immigrationStatusOptions[0]
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
                  <Listbox.Options className="z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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
            Date of Entry into South Africa
          </Typography>
          <div className="absolute z-20 mb-8">
            <DatePickerComponent
              value={formValues.entryDate}
              onChange={(date: Date) => handleDateChange(date)}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-2 mb-8">
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

      <div className="w-full md:w-full mb-8">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Asylum/Refugee/Visa Reference number:
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

export default ImmigrationEnquiry;

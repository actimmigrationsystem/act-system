import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Typography } from "@material-tailwind/react";
import DatePickerComponent from "../datepickers/DatePickerComponent";
import { FloatingLabel, Button } from "flowbite-react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface PersonalInfoFieldsProps {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string | undefined) => void;
  handleDateChange: (date: Date) => void;
  handleMaritalStatusChange: (value: string | undefined) => void;
  nextStep: () => void;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
  formValues,
  handleChange,
  handleDateChange,
  nextStep,
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
        onClick={nextStep}
      >
        Next
      </Button>
    </div>
  );
};

export default PersonalInfoFields;

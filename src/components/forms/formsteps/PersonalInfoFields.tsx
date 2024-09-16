import React, { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Typography, Button } from "@material-tailwind/react";
import DatePickerComponent from "../datepickers/DatePickerComponent";
import { FloatingLabel } from "flowbite-react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FaArrowLeft } from "react-icons/fa";

interface PersonalInfoFieldsProps {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string | undefined) => void;
  handleDOBChange: (date: Date | undefined) => void;
  handleMaritalStatusChange: (value: string | undefined) => void;
  previousStep: () => void;
  nextStep: () => void;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
  formValues,
  handleChange,
  handleGenderChange,
  handleMaritalStatusChange,
  handleDOBChange,
  previousStep,
  nextStep,
}) => {
  const genderOptions = ["Select Gender", ,"Female", "Male", "Other"];
  const maritalStatusOptions = [
    "Select Marital Status",
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

  const [filledFields, setFilledFields] = useState<Record<string, boolean>>({
    residentialAddress: false,
  });

useEffect(() => {
}, [filledFields]);


  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   handleChange(e);
  //   setFilledFields({
  //     ...filledFields,
  //     [name]: !!value.trim(),
  //   });
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(e);
    setFilledFields({
      ...filledFields,
      [name]: typeof value === "string" ? !!value.trim() : true,
    });
  };

  const handleContinue = () => {
    const allFieldsFilled = Object.values(filledFields).every(Boolean);
    if (allFieldsFilled) {
      nextStep();
    } else {
      console.log("Some fields are not filled");
    }
  };

  return (
    <div className="mt-8">
      <div className="mt-8 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            What is your gender
          </Typography>
          <Listbox
            value={selectedGender}
            onChange={(value) => {
              setSelectedGender(value);
              handleGenderChange(value);
            }}
          >
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

        <div className="w-full md:w-1/2 px-2 mb-4">
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Date of Birth
          </Typography>
          <div
            className={`absolute z-20 mb-8 ${
              filledFields["dob"] ? "border-green-600" : "focus:border-red-600"
            }`}
          >
            <DatePickerComponent
              value={formValues.dob}
              onChange={(date: Date) => {
                handleDOBChange(date);
                handleInputChange({
                  target: { name: "dob", value: date },
                } as unknown as React.ChangeEvent<HTMLInputElement>);
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 px-2 mb-4">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Marital Status
        </Typography>
        <div className="max-w-full mb-4">
          <Listbox
            value={selectedMaritalStatus}
            onChange={(value) => {
              setSelectedMaritalStatus(value);
              handleMaritalStatusChange(value);
            }}
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
      </div>

      <Typography
        placeholder={"Typography"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        Residential Address
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Residential Address"
        type="text"
        name="residentialAddress"
        value={formValues.residentialAddress}
        onChange={handleInputChange}
        className={`focus:border-red-600 ${
          filledFields["residentialAddress"] ? "border-green-600" : ""
        }`}
      />
      <div className="flex justify-between">
        <Button
          className="mr-4"
          style={{ backgroundColor: "#0e5a97" }}
          type="button"
          placeholder=""
          onClick={previousStep}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <FaArrowLeft />
        </Button>
        <div className="flex justify-end mt-4">
          <Button
            id="continueButton"
            placeholder={""}
            style={{ backgroundColor: "#0e5a97" }}
            type="button"
            onClick={handleContinue}
            disabled={!Object.values(filledFields).every(Boolean)}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFields;

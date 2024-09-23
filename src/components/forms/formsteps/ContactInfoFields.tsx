import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";

interface ContactInfoFieldsProps {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

const ContactInfoFields = ({
  formValues,
  handleChange,
  nextStep,
}: ContactInfoFieldsProps) => {
  const [filledFields, setFilledFields] = useState<Record<string, boolean>>({
    name: false,
    surname: false,
    phonenumber: false,
    email: false,
  });

  useEffect(() => {
    const allFieldsFilled = Object.values(filledFields).every(Boolean);
    console.log("All fields filled:", allFieldsFilled);
  }, [filledFields]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(e);
    const updatedFilledFields = {
      ...filledFields,
      [name]: !!value, // Set to true if value is not empty
    };
    // console.log("Updated filled fields:", updatedFilledFields);
    setFilledFields(updatedFilledFields);
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
      <Typography
        placeholder={"Name"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        Name
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Name"
        type="text"
        name="name"
        value={formValues.name || ""}
        onChange={handleInputChange}
        className={`focus:border-red-600 ${
          filledFields["name"] ? "border-green-600" : ""
        }`}
      />

      <Typography
        placeholder={"Surname"}
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        Surname
      </Typography>
      <FloatingLabel
        variant="filled"
        label="Surname"
        type="text"
        name="surname"
        value={formValues.surname || ""}
        onChange={handleInputChange}
        className={`focus:border-red-600 ${
          filledFields["surname"] ? "border-green-600" : ""
        }`}
      />
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Contact Number"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Contact number
          </Typography>
          <FloatingLabel
            variant="filled"
            label="Contact Number"
            type="tel"
            name="phonenumber"
            value={formValues.phonenumber || ""}
            onChange={handleInputChange}
            className={`focus:border-red-600 ${
              filledFields["phonenumber"] ? "border-green-600" : ""
            }`}
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <Typography
            placeholder={"Email Address"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Email Address
          </Typography>
          <FloatingLabel
            variant="filled"
            label="name@email.com"
            type="email"
            name="email"
            value={formValues.email || ""}
            onChange={handleInputChange}
            className={`focus:border-red-600 ${
              filledFields["email"] ? "border-green-600" : ""
            }`}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          id="continueButton"
          placeholder={""}
          style={{ backgroundColor: "#0e5a97" }}
          type="button"
          onClick={handleContinue}
          disabled={!Object.values(filledFields).every(Boolean)}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoFields;

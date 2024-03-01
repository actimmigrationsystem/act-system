import React from "react";
import { Typography } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";

interface ContactInfoFieldsProps {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInfoFields = ({ formValues, handleChange }: ContactInfoFieldsProps) => {

    return (
      <>
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
        </div>
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
      </>
    );
    };

export default ContactInfoFields;

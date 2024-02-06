import React, { useState } from 'react';
import {
  Typography, Select,
  MenuItem,
} from '@material-tailwind/react';
import { FloatingLabel } from 'flowbite-react';
import FormButton from './FormButton';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [category, setCategory] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form
        action="https://formsubmit.co/rileymanda0@gmail.com"
        method="POST"
        className="mt-12 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Name
          </Typography>
          <FloatingLabel
            variant="filled"
            label="Fullname"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
        </div>
        <div>
          <Typography
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
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
        </div>
        <div>
          <Typography
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
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Select Category For your appointment
          </Typography>
          <Select
            value={category}
            onChange={(selectedOption) => {
              console.log('Selected value:', selectedOption.value);
              setCategory(selectedOption.value);
            }}
            displayEmpty
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem value="" disabled>
              Select Service Type
            </MenuItem>
            <MenuItem value="appeals">Appeals</MenuItem>
            <MenuItem value="commision of oaths">Commission of Oaths</MenuItem>
            <MenuItem value="visaspermits">Visa & Permits</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </div>
        <FormButton
          btnlabel="Submit Enquiry"
          size="lg"
          color="#2393cb"
          type="submit"
        >
          request Appointment
        </FormButton>
      </form>
    </div>
  );
};

export default AppointmentForm;

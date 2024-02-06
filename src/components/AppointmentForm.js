import React, { useState } from 'react';
import { FloatingLabel } from 'flowbite-react';
import {
  MenuItem,
  Select,
  Typography,
} from '@material-tailwind/react';
import FormButton from './FormButton';
import formSubmitEndpoint from '../api/data/formSubmitApi';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [category, setCategory] = useState('');

  const handleCaseTypeChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <form
        action={formSubmitEndpoint}
        method="POST"
        className="mt-12 flex flex-col gap-4"
      >
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Fullname
          </Typography>
          <FloatingLabel
            variant="filled"
            label="Fullname"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
            Phonenumber
          </Typography>
          <FloatingLabel
            variant="filled"
            label="Phone Number"
            type="tel"
            value={phonenumber}
            onChange={(event) => setPhonenumber(event.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
            onChange={handleCaseTypeChange}
            displayEmpty
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem value="" disabled>
              Select Service Type
            </MenuItem>
            <MenuItem value="appeals">Appeals</MenuItem>
            <MenuItem value="commision of oaths">Commision of Oaths</MenuItem>
            <MenuItem value="visaspermits">Visa & Permits</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </div>
        <FormButton
          size="lg"
          btnlabel="Book Appointment"
        />
      </form>
    </div>
  );
};

export default AppointmentForm;

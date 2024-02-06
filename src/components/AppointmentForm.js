import React, { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { FloatingLabel } from 'flowbite-react';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [query, setQuery] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  return (
    <div>
      <form
        action="https://formsubmit.co/david@actimmigration.co.za"
        method="POST"
        className="mt-12 flex flex-col gap-4"
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
            Query
          </Typography>
          <FloatingLabel
            variant="filled"
            label="Your query....."
            type="textarea"
            name="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
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
        <Button
          btnlabel="Submit Enquiry"
          size="lg"
          type="submit"
          style={{ backgroundColor: '#0e5a97' }}
        >
          Submit Enquiry
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;

import React, { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { FloatingLabel } from 'flowbite-react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [query, setQuery] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  return (
    <div>
      <form
        action="https://formsubmit.co/rileymanda0@gmail.com"
        method="POST"
        className="mt-12 flex flex-col gap-4"
      >
        <div>
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
            label="Fullname"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>
        <div>
          <Typography
          placeholder={"Typography"}
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
          />
        </div>
        <div>
          <Typography
          placeholder={"Typography"}
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
          />
        </div>
        <div>
          <Typography
          placeholder={"Typography"}
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
          />
        </div>
        <Button
        placeholder={"Button"}
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

export default EnquiryForm;

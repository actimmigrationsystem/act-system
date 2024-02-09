import { useState } from "react";
import { Typography, Button, MenuItem, Select } from "@material-tailwind/react";
import { FloatingLabel } from "flowbite-react";
import DateComponent from "./DateComponents";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [category] = useState("");
  const [service, setService] = useState("");
  const [immigrationStatus, setImmigrationStatus] = useState("");
  const [previousAdvice, setPreviousAdvice] = useState("");
  const [nationality, setNationality] = useState("");
  const [serviceType, setServiceType] = useState("");

  return (
    <div>
      <form
        action="https://formsubmit.co/david@actimmigration.co.za"
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
            Full Name
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
        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Which service do you require?
          </Typography>
          <Select
            placeholder={"Select"}
            value={service}
            onChange={(value) => {
              if (value) {
                setService(value);
              }
            }}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem placeholder="" value="" disabled>
              Visa
            </MenuItem>
            <MenuItem placeholder="service1" value="service1">
              Permits
            </MenuItem>
            <MenuItem placeholder="service2" value="service2">
              Appeals
            </MenuItem>
            <MenuItem placeholder="service3" value="service3">
             Legal Assistance(Other)
            </MenuItem>
          </Select>
        </div>

        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            What is your current immigration status?
          </Typography>
          <Select
            placeholder={"Select"}
            value={immigrationStatus}
            onChange={(value) => {
              if (value) {
                setImmigrationStatus(value);
              }
            }}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem placeholder="" value="" disabled>
             No Status
            </MenuItem>
            <MenuItem placeholder="service1" value="service1">
              Work Visa
            </MenuItem>
            <MenuItem placeholder="service2" value="service2">
              Permanent Resident
            </MenuItem>
            <MenuItem placeholder="service3" value="service3">
              Asylum
            </MenuItem>
          </Select>
        </div>

        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Have you received previous advice on this before?
          </Typography>
          <Select
            placeholder={"Select"}
            value={previousAdvice}
            onChange={(value) => {
              if (value) {
                setPreviousAdvice(value);
              }
            }}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem placeholder="" value="yes" disabled>
             Yes
            </MenuItem>
            <MenuItem placeholder="No" value="no">
              No
            </MenuItem>
          </Select>
        </div>

        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            What is your nationality?
          </Typography>
          <Select
            placeholder={"Select"}
            value={nationality}
            onChange={(value) => {
              if (value) {
                setNationality(value);
              }
            }}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem placeholder="" value="" disabled>
              Zimbabwe
            </MenuItem>
            <MenuItem placeholder="service1" value="service1">
              Kenya
            </MenuItem>
            <MenuItem placeholder="service2" value="service2">
              Ehtiopia
            </MenuItem>
          </Select>
        </div>

        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            How would you like to receive this service?
          </Typography>
          <Select
            placeholder={"Select"}
            value={serviceType}
            onChange={(value) => {
              if (value) {
                setServiceType(value);
              }
            }}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem placeholder="" value="" disabled>
              In Person-Office
            </MenuItem>
            <MenuItem placeholder="service1" value="service1">
              Remote(Zoom)
            </MenuItem>
            <MenuItem placeholder="service2" value="service2">
              Email
            </MenuItem>
            <MenuItem placeholder="service3" value="service3">
              Phonecall
            </MenuItem>
          </Select>
        </div>
        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Select Date
          </Typography>
          <DateComponent />
        </div>
        <div>
          <Typography
            placeholder={"Typography"}
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Select Category For your appointment
          </Typography>
          <Select
            placeholder={"Select"}
            value={category}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <MenuItem placeholder="" value="" disabled>
              Select Service Type
            </MenuItem>
            <MenuItem placeholder="appeals" value="appeals">
              Appeals
            </MenuItem>
            <MenuItem placeholder="appeals" value="commision of oaths">
              Commision of Oaths
            </MenuItem>
            <MenuItem placeholder="appeals" value="visaspermits">
              Visa & Permits
            </MenuItem>
            <MenuItem placeholder="appeals" value="other">
              Other
            </MenuItem>
          </Select>
        </div>
        <Button
          placeholder={"Button"}
          size="lg"
          type="submit"
          style={{ backgroundColor: "#0e5a97" }}
        >
          Submit Enquiry
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;

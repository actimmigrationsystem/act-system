import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../components/auth/UserContext";
import axios from "axios";
import styled from "styled-components";
import { FaMapPin } from "react-icons/fa";

const enquiryRoute = import.meta.env.VITE_ENQUIRY_ROUTE;

interface Enquiry {
  id: number;
  name: string;
  surname: string;
  phonenumber: string;
  email: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  residentialAddress: string;
  immigrationStatus: string;
  entryDate: string;
  passportNumber: string;
  referenceNumber: string;
  documentUpload: string;
  serviceType: string;
  elaborate: string;
}

// Styled component for paper-like background with lines
const PaperBackground = styled.div`
  position: relative;
  background: #fef9e7; /* Light gray-white background */
  border: 1px solid #e2e8f0; /* Tailwind 'gray-200' color */
  border-radius: 0.375rem; /* Tailwind 'rounded-md' class */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Tailwind 'shadow-md' class */
  padding: 1rem; /* Tailwind 'p-4' class */
  max-height: 250px; /* Limit the height of the card */
  overflow: hidden; /* Hide overflow content */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.03) 1px,
    transparent 1px
  );
  background-size: 100% 24px;
  background-color: #fef9e7; /* Paper-like background color */
  cursor: pointer; /* Add cursor pointer for click indication */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #fef9e7 50%, transparent 50%);
    box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }

  & .pin {
    position: absolute;
    top: 8px; /* Adjusted pin position */
    left: 50%;
    transform: translateX(-50%) rotate(-45deg); /* Rotated pin */
    width: 20px;
    height: 20px;
    /* background-color: #ff4d4d; */ /* Pin color */
    /* border-radius: 50%;*/
    /* border: 2px solid #d4d4d4;*/ /* Pin border */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Pin shadow */

    &::after {
      content: "";
      position: absolute;
      bottom: -8px; /* Adjusted pin needle position */
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 20px;
      background-color: #d4d4d4; /* Pin needle color */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Pin needle shadow */
    }
  }
`;

const truncateText = (text: string, maxParagraphs: number) => {
  const paragraphs = text.split("\n").filter((p) => p.trim());
  return paragraphs.slice(0, maxParagraphs).map((p, index) => (
    <p key={index} className="mt-1">
      {p}
    </p>
  ));
};

const ClientEnquiries = () => {
  const { email } = useUser();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }
    const url = `${enquiryRoute}/${email}`;
    axios
      .get(url, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setEnquiries(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setEnquiries([]);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data!", error);
      });
  }, [email]);

  const handleClick = (enquiryId: number) => {
    navigate(`/enquiries/${enquiryId}`);
  };

  return (
    <div className="mt-10 w-full max-w-6xl px-4">
      <div className="bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-6 py-4">
          Enquiries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {enquiries.map((enquiry) => (
            <PaperBackground
              key={enquiry.id}
              onClick={() => handleClick(enquiry.id)}
            >
              <div className="pin">
                <FaMapPin />
              </div>{" "}
              {/* Pin element */}
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.name} {enquiry.surname}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Service Type
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.serviceType}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.phonenumber}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.email}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.gender}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    DOB
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.dob}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Marital Status
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.maritalStatus}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Residential Address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.residentialAddress}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Immigration Status
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.immigrationStatus}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Entry Date
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.entryDate}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Passport Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.passportNumber}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Reference Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.referenceNumber}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Document Upload
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.documentUpload}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Elaborate
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {truncateText(enquiry.elaborate, 3)}
                  </dd>
                </div>
              </div>
            </PaperBackground>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientEnquiries;

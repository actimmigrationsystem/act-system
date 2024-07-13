import { useEffect, useState } from "react";
import { useUser } from "../../../components/auth/UserContext";
import axios from "axios";
// import { useUser } from "../../components/auth/UserContext";
import { FaCalendarAlt, FaEnvelope, FaFileAlt } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const enquiryRoute = import.meta.env.VITE_ENQUIRY_ROUTE;
const appointmentRoute = import.meta.env.VITE_APPOINTMENT_ROUTE;

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

interface Appointment {
  id: number;
  name: string;
  surname: string;
  phonenumber: string;
  email: string;
  serviceType: string;
  venue: string;
  appointmentDate: Date;
  appointmentType: string;
}

const getUserName = (email: string) => {
  return email ? email.split("@")[0] : "User";
};

const submissions = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    serviceType: "Pre-Consultation",
    documents: "Passport, Visa",
    date: "2024-07-03",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const ClientEnquiries = () => {
  const { email } = useUser();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

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

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }
    const url = `${appointmentRoute}/${email}`;
    axios
      .get(url, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setAppointments([]);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [email]);
  const totalSubmissions = enquiries.length + appointments.length;
  return (
    <div className="mt-10 w-full max-w-6xl px-4">
      {/* Enquiries Section */}
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-6 py-4">
          Enquiries
        </h2>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
          {enquiries.map((enquiry) => (
            <div key={enquiry.id} className="p-6">
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Full Name:</span>{" "}
                  {enquiry.name} {enquiry.surname}
                </p>
                <p>
                  <span className="font-semibold">Service Type:</span>{" "}
                  {enquiry.serviceType}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {enquiry.phonenumber}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {enquiry.email}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {enquiry.gender}
                </p>
                <p>
                  <span className="font-semibold">DOB:</span> {enquiry.dob}
                </p>
                <p>
                  <span className="font-semibold">Marital Status:</span>{" "}
                  {enquiry.maritalStatus}
                </p>
                <p>
                  <span className="font-semibold">Residential Address:</span>{" "}
                  {enquiry.residentialAddress}
                </p>
                <p>
                  <span className="font-semibold">Immigration Status:</span>{" "}
                  {enquiry.immigrationStatus}
                </p>
                <p>
                  <span className="font-semibold">Entry Date:</span>{" "}
                  {enquiry.entryDate}
                </p>
                <p>
                  <span className="font-semibold">Passport Number:</span>{" "}
                  {enquiry.passportNumber}
                </p>
                <p>
                  <span className="font-semibold">Reference Number:</span>{" "}
                  {enquiry.referenceNumber}
                </p>
                <p>
                  <span className="font-semibold">Document Upload:</span>{" "}
                  {enquiry.documentUpload}
                </p>
                <p>
                  <span className="font-semibold">Elaborate:</span>{" "}
                  {enquiry.elaborate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ClientEnquiries;

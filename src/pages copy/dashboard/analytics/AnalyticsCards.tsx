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

const AnalyticsCards = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4">
      <Link to="/appointments">
        <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
          <div
            className="flex items-center justify-center text-white rounded-t-lg h-24"
            style={{ backgroundColor: "#0e5a97" }}
          >
            <FaCalendarAlt className="text-5xl" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Appointments
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {appointments.length}
            </p>
          </div>
        </div>
      </Link>
      <Link to="/enquiries">
        <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
          <div className="flex items-center justify-center bg-green-500 text-white rounded-t-lg h-24">
            <FaEnvelope className="text-5xl" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Enquiries
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {enquiries.length}
            </p>
          </div>
        </div>
      </Link>
      <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
        <div className="flex items-center justify-center bg-orange-500 text-white rounded-t-lg h-24">
          <FaFileAlt className="text-5xl" />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Submissions
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {totalSubmissions}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsCards;

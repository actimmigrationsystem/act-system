import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";
import React from "react";
import AnalyticsCards from "./analytics/AnalyticsCards";
import ClientAppointments from "./clientappointments/ClientAppointments";
import ClientEnquiries from "./clientenquiries/ClientEnquiries";
import Submissions from "./clientsubmissions/Submissions";
import { FaRegCommentDots } from "react-icons/fa"; // Import chat icon

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

const DashboardView = () => {
  const { email } = useUser();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State for managing chat visibility

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

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-10 dark:bg-gray-800">
        <h5 className="text-xl font-bold text-gray-800 dark:text-white">
          Welcome to your Dashboard, {getUserName(email)}
        </h5>
        {/* Analytics Section */}
        <AnalyticsCards />
        {/* Appointments Section */}
        <div className="w-full px-6">
          <h5 className="text-xl font-bold text-gray-800 dark:text-white mt-10">
            Appointments
          </h5>
          <ClientAppointments />
        </div>

        {/* Enquiries Section */}
        <div className="w-full px-6">
          <h5 className="text-xl font-bold text-gray-800 dark:text-white mt-10">
            Enquiries
          </h5>
          <ClientEnquiries />
        </div>

        {/* Submissions Section */}
        <div className="w-full px-6">
          <h5 className="text-xl font-bold text-gray-800 dark:text-white mt-10">
            Submissions
          </h5>
          <Submissions />
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg focus:outline-none"
        style={{ backgroundColor: "#0e5a97" }}
        aria-label="Open chat"
        onClick={toggleChat}
      >
        <FaRegCommentDots className="h-6 w-6" />
      </button>

      {/* Chat Section */}
      {isChatOpen && (
        <div className="fixed bottom-0 right-0 m-4 w-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="text-white px-4 py-2 flex items-center justify-between"
            style={{ backgroundColor: "#0e5a97" }}
          >
            <h2 className="text-lg">Chat</h2>
            <button onClick={toggleChat} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            {/* Chat messages can go here */}
            <p className="text-gray-700">Chat with an agent</p>
          </div>
          <div className="border-t p-4 flex items-center">
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Type your message..."
            />
            <button
              className="ml-2  text-white rounded-full p-2"
              style={{ backgroundColor: "#0e5a97" }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
export default DashboardView;

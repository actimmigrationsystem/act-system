import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";
import React from "react";
import AnalyticsCards from "./analytics/AnalyticsCards";
import ClientAppointments from "./clientappointments/ClientAppointments";
import ClientEnquiries from "./clientenquiries/ClientEnquiries";
import Submissions from "./clientsubmissions/Submissions";

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
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-50 dark:bg-gray-80">
        <h5 className="text-xl font-bold text-gray-800 dark:text-white">
          Welcome to your Dashboard, {getUserName(email)}
        </h5>
        {/* Analytics Section */}
        <AnalyticsCards />
        {/* Appointments and Enquiries Sections */}
        <ClientAppointments />

        <ClientEnquiries />
        {/* client submissions */}
        <Submissions />
      </div>
    </DashboardLayout>
  );
};
export default DashboardView;

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";

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
  appointmentDate: string;
  appointmentType: string;
}

const getUserName = (email: string) => {
  return email ? email.split("@")[0] : "User";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const DashboardView = () => {
  const { email } = useUser();
  console.log("User email:", email);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const formatDate = (date: Date) => {

      return new Date(date).toLocaleDateString();
    };

    const handleAppointmentClick = (appointment) => {
      setSelectedAppointment(appointment);
    };

    const closeModal = () => {
      setSelectedAppointment(null);
    };

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }
    const url = `${enquiryRoute}/${email}`;
    console.log("Making request to:", url);
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Enquiry response data:", response);

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
    console.log("Making request to:", url);
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Full response:", response);

        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setEnquiries([]);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [email]);


  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome to your Dashboard, {getUserName(email)}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4">
          <div className="col-span-1 bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-6 py-4">
              Appointments
            </h2>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Appointment {appointment.id}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                      <span className="font-semibold">Date:</span>{" "}
                      {formatDate(appointment.appointmentDate)}
                    </p>
                    <p>
                      <span className="font-semibold">Venue:</span>{" "}
                      {appointment.venue}
                    </p>
                    <p>
                      <span className="font-semibold">Name:</span>{" "}
                      {appointment.name} {appointment.surname}
                    </p>
                    <p>
                      <span className="font-semibold">Service Type:</span>{" "}
                      {appointment.serviceType}
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span>{" "}
                      {appointment.phonenumber}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      {appointment.email}
                    </p>
                    <p>
                      <span className="font-semibold">Type:</span>{" "}
                      {appointment.appointmentType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
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
                      <span className="font-semibold">Email:</span>{" "}
                      {enquiry.email}
                    </p>
                    <p>
                      <span className="font-semibold">Gender:</span>{" "}
                      {enquiry.gender}
                    </p>
                    <p>
                      <span className="font-semibold">Date of Birth:</span>{" "}
                      {enquiry.dob}
                    </p>
                    <p>
                      <span className="font-semibold">Marital Status:</span>{" "}
                      {enquiry.maritalStatus}
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
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
                      <span className="font-semibold">Documents:</span>{" "}
                      {enquiry.documentUpload}
                    </p>
                    <p>
                      <span className="font-semibold">Elaboration:</span>{" "}
                      {enquiry.elaborate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardView;

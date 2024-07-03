import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";
import { FaCalendarAlt, FaEnvelope, FaFileAlt, FaEdit, FaTrash,FaComment,FaFilePdf} from "react-icons/fa";

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

const DashboardView = () => {
  const { email } = useUser();
  console.log("User email:", email);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const handleAppointmentClick = (appointment: any) => {
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
        <h5 className="text-xl font-bold text-gray-800 dark:text-white">
          Welcome to your Dashboard, {getUserName(email)}
        </h5>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4">
          <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center justify-center bg-blue-500 text-white rounded-t-lg h-24">
              <FaCalendarAlt className="text-5xl" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Appointments
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">0</p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center justify-center bg-green-500 text-white rounded-t-lg h-24">
              <FaEnvelope className="text-5xl" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Enquiries
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">3</p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center justify-center bg-red-500 text-white rounded-t-lg h-24">
              <FaFileAlt className="text-5xl" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Submissions
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">3</p>
            </div>
          </div>
        </div>

        {/* Appointments and Enquiries Sections */}
        <div className="mt-10 w-full max-w-6xl px-4">
          {/* Appointments Section */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden mb-8">
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

          {/* Submissions Table */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-6 py-4">
              Submissions
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Service Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                  {submissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {submission.name} {submission.surname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {submission.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {submission.serviceType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {formatDate(new Date(submission.date))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <div className="flex items-center space-x-4">
                          {/* Edit Icon */}
                          <span className="cursor-pointer">
                            <FaEdit className="text-blue-500 hover:text-blue-700" />
                          </span>
                          {/* Delete Icon */}
                          <span className="cursor-pointer">
                            <FaTrash className="text-red-500 hover:text-red-700" />
                          </span>
                          {/* Comments Icon */}
                          <span className="cursor-pointer">
                            <FaComment className="text-green-500 hover:text-green-700" />
                          </span>
                          {/* Documents Icon (assuming PDF icon) */}
                          <span className="cursor-pointer">
                            <FaFilePdf className="text-purple-500 hover:text-purple-700" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};


export default DashboardView;

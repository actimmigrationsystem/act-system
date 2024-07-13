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

const ClientAppointments = () => {
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
    // <div className="mt-10 w-full max-w-6xl px-4">
    //   {/* Appointments Section */}
    //   <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden mb-8">
    //     <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-6 py-4">
    //       Appointments
    //     </h2>
    //     <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
    //       {appointments.map((appointment) => (
    //         <div key={appointment.id} className="p-6">
    //           <h3 className="text-lg font-medium text-gray-900 dark:text-white">
    //             Appointment {appointment.id}
    //           </h3>
    //           <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
    //             <p>
    //               <span className="font-semibold">Date:</span>{" "}
    //               {formatDate(appointment.appointmentDate)}
    //             </p>
    //             <p>
    //               <span className="font-semibold">Venue:</span>{" "}
    //               {appointment.venue}
    //             </p>
    //             <p>
    //               <span className="font-semibold">Name:</span>{" "}
    //               {appointment.name} {appointment.surname}
    //             </p>
    //             <p>
    //               <span className="font-semibold">Service Type:</span>{" "}
    //               {appointment.serviceType}
    //             </p>
    //             <p>
    //               <span className="font-semibold">Phone:</span>{" "}
    //               {appointment.phonenumber}
    //             </p>
    //             <p>
    //               <span className="font-semibold">Email:</span>{" "}
    //               {appointment.email}
    //             </p>
    //             <p>
    //               <span className="font-semibold">Type:</span>{" "}
    //               {appointment.appointmentType}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="mt-10 w-full max-w-auto mx-auto px-4">
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              tabIndex={0}
              className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
            >
              Appointments
            </p>
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
              <p>Sort By:</p>
              <select
                aria-label="select"
                className="focus:text-blue-600 focus:outline-none bg-transparent ml-1"
              >
                <option className="text-sm text-blue-800">Latest</option>
                <option className="text-sm text-blue-800">Oldest</option>
                <option className="text-sm text-blue-800">Latest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-blue-50 focus:ring-blue-800"
                href=" javascript:void(0)"
              >
                <div className="py-2 px-8 bg-blue-100 text-blue-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-blue-50 focus:ring-blue-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-blue-700 hover:bg-blue-100 rounded-full ">
                  <p>Active</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-blue-50 focus:ring-blue-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-blue-700 hover:bg-blue-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-blue-50 focus:ring-blue-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-blue-700 hover:bg-blue-100 rounded-full ">
                  <p>InProgress</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-blue-50 focus:ring-blue-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-blue-700 hover:bg-blue-100 rounded-full ">
                  <p>Completed</p>
                </div>
              </a>
            </div>

            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange-700 hover:bg-blue-500 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Enquire
              </p>
            </button>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr
                    key={index}
                    className="focus:outline-none h-16 border border-gray-100 rounded"
                  >
                    <td>
                      <div className="ml-5">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            placeholder="checkbox"
                            type="checkbox"
                            className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                          />
                          <div className="check-icon hidden bg-blue-700 text-white rounded-sm">
                            <svg
                              className="icon icon-tabler icon-tabler-check"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                          {appointment.appointmentType}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                            stroke="#3B82F6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                            stroke="#3B82F6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </td>
                    <td className="pl-24">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <circle
                            cx="7.50004"
                            cy="7.49967"
                            r="1.66667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></circle>
                        </svg>
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          Urgent
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 5H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 10H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 15H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 5V5.00667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 10V10.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 15V15.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          {totalSubmissions}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M10 9.1665V9.17484"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M6.66669 9.1665V9.17484"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M13.3333 9.1665V9.17484"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          23
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          04/07
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                        at {formatDate(appointment.appointmentDate)}
                      </button>
                    </td>
                    <td className="pl-4">
                      <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientAppointments;

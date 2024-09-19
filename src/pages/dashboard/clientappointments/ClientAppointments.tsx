import { useEffect, useState } from "react";
import { useUser } from "../../../components/auth/UserContext";
import axios from "axios";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import React from "react";

// const enquiryRoute = import.meta.env.VITE_ENQUIRY_ROUTE;
const appointmentRoute = import.meta.env.VITE_APPOINTMENT_ROUTE;


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

// const getUserName = (email: string) => {
//   return email ? email.split("@")[0] : "User";
// };
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const ClientAppointments = () => {
  const { email } = useUser();
  // const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("Latest");

  // useEffect(() => {
  //     if (!email) {
  //       console.error("Email is not defined");
  //       return;
  //     }
  //     const url = `${enquiryRoute}/${email}`;
  //     axios
  //       .get(url, { headers: { Accept: "application/json" } })
  //       .then((response) => {
  //         if (Array.isArray(response.data)) {
  //           setEnquiries(response.data);
  //         } else {
  //           console.error("Expected an array but received:", response.data);
  //           setEnquiries([]);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("There was an error fetching data!", error);
  //       });
  //   }, [email]);

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

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    if (filter === "Latest") {
      return (
        new Date(b.appointmentDate).getTime() -
        new Date(a.appointmentDate).getTime()
      );
    } else {
      return (
        new Date(a.appointmentDate).getTime() -
        new Date(b.appointmentDate).getTime()
      );
    }
  });

  const totalSubmissions = appointments.length;

  const openModal = (appointment: any) => {
    setSelectedAppointment(appointment);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setIsOpen(false);
  };


  return (
    <div className="mt-10 w-full max-w-auto mx-auto ">
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <div className="relative inline-flex">
              <span className="rounded-l-md inline-flex items-center px-3 bg-gray-200 text-gray-600 text-sm">
                Filter By:
              </span>
              <select
                aria-label="select"
                className="rounded-r-md border-t border-b border-r border-gray-300 focus:text-blue-600 focus:outline-none bg-white h-full py-2 pl-2 pr-7 text-sm leading-5 text-gray-600"
                value={filter}
                onChange={handleFilterChange}
              >
                <option className="text-sm text-blue-800" value="Latest">
                  Latest
                </option>
                <option className="text-sm text-blue-800" value="Oldest">
                  Oldest
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-blue-50 focus:ring-blue-800"
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
                  <p>Booked</p>
                </div>
              </a>

              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-blue-50 focus:ring-blue-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-blue-700 hover:bg-blue-100 rounded-full ">
                  <p>Cancelled</p>
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
                {sortedAppointments.map((appointment, index) => (
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                        <IoChatbubbleEllipsesOutline />
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          04/07
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                        {formatDate(appointment.appointmentDate)}
                      </button>
                    </td>
                    <td className="pl-4">
                      <button
                        onClick={() => openModal(appointment)}
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                      >
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
      {/* Modal Component */}
      {isOpen && selectedAppointment && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-auto z-50 shadow-lg transform transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Appointment Details
              </h2>
              <button
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={closeModal}
              >
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
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <span className="font-semibold text-gray-700">
                  Appointment Type:
                </span>
                <p className="text-base font-medium leading-none text-gray-700 ml-2">
                  {selectedAppointment.appointmentType}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700">Date:</span>
                <p className="text-base font-medium leading-none text-gray-700 ml-2">
                  {formatDate(selectedAppointment.appointmentDate)}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700">Time:</span>
                <p className="text-base font-medium leading-none text-gray-700 ml-2">
                  {new Date(
                    selectedAppointment.appointmentDate,
                  ).toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700">Location:</span>
                <p className="text-base font-medium leading-none text-gray-700 ml-2">
                  {selectedAppointment.venue}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700">Status:</span>
                <p className="text-base font-medium leading-none text-gray-700 ml-2">
                  {selectedAppointment.appointmentDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ClientAppointments;

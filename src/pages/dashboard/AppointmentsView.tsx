import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";

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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const AppointmentView = () => {
  const { email } = useUser();
  console.log("User email:", email);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

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
          setAppointments([]);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [email]);

  return (
    <DashboardLayout pageTitle="Appointments">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-3 gap-4 mt-10">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white shadow overflow-hidden sm:rounded-lg mb-4 col-span-1 max-w-sm"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Appointment
                </h2>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {appointment.name} {appointment.surname}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Service Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {appointment.serviceType}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Phone Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {appointment.phonenumber}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {appointment.email}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Appointment Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {formatDate(appointment.appointmentDate)}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Appointment Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {appointment.appointmentType}
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Venue</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {appointment.venue}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AppointmentView;

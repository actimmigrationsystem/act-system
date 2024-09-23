import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";
import "react-calendar/dist/Calendar.css";
import CalendarComponent from "../../components/calendar/CalendarComponent";

const appointmentRoute: string = import.meta.env.VITE_APPOINTMENT_ROUTE;

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


const AppointmentView = () => {
  const [] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });


  const { email } = useUser();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }

    const fetchAppointments = async () => {
      try {
        const url = `${appointmentRoute}/${email}`;
        const response = await axios.get<Appointment[]>(url, {
          headers: {
            Accept: "application/json",
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error("There was an error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [email]);

  // const handleDateClick = (
  //   value: Date | Date[] | null,
  //   event: React.MouseEvent<HTMLButtonElement>,
  // ) => {};

  return (
    <DashboardLayout pageTitle="My Appointments">
      <div className="flex w-full">
        <CalendarComponent />
      </div>
      <div className="appointments-list">
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                {appointment.name} {appointment.surname} - {appointment.serviceType} on {appointment.appointmentDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AppointmentView;

import React, { useEffect, useState } from "react";
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

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const AppointmentView = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

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

  const handleDateClick = (
    value: Date | Date[] | null,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {};

  return (
    <DashboardLayout pageTitle="My Appointments">
      <div className="flex w-full">
        <CalendarComponent />
      </div>
    </DashboardLayout>
  );
};

export default AppointmentView;

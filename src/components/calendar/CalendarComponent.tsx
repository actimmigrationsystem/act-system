import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardAppointmentForm, {
  FormValuesInterface,
} from "./DashboardAppointmentForm";

const appointmentRoute = import.meta.env.VITE_APPOINTMENT_ROUTE;

interface CalendarComponentProps {}

interface CalendarComponentState {
  currentYear: number;
  currentMonth: number;
  showModal: boolean;
  selectedDate: string;
  formValues: FormValuesInterface;
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
  color: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = () => {
  const [state, setState] = useState<CalendarComponentState>({
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    showModal: false,
    selectedDate: "",
    formValues: {
      name: "",
      surname: "",
      email: "",
      serviceType: "",
      venue: "",
      appointmentType: "",
      appointmentDate: "",
    },
  });

  const [today, setToday] = useState({
    month: "",
    day: 0,
    weekday: "",
    time: "",
  });

  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Material design colors
  const materialColors = [
    "#F44336",
    "#FFEBEE",
    "#FFCDD2",
    "#EF9A9A",
    "#E57373",
    "#EF5350",
    "#E53935",
    "#D32F2F",
    "#C62828",
    "#B71C1C",
    "#FF8A80",
    "#FF5252",
    "#FF1744",
    "#D50000",
    "#FCE4EC",
    "#F8BBD0",
    "#F48FB1",
    "#F06292",
    "#EC407A",
    "#E91E63",
    "#D81B60",
    "#C2185B",
    "#AD1457",
    "#880E4F",
    "#FF80AB",
    "#FF4081",
    "#F50057",
    "#C51162",
    "#F3E5F5",
    "#E1BEE7",
    "#CE93D8",
    "#BA68C8",
    "#AB47BC",
    "#9C27B0",
    "#8E24AA",
    "#7B1FA2",
    "#6A1B9A",
    "#4A148C",
    "#EA80FC",
    "#E040FB",
    "#D500F9",
    "#AA00FF",
    "#EDE7F6",
    "#D1C4E9",
    "#B39DDB",
    "#9575CD",
    "#7E57C2",
    "#673AB7",
    "#5E35B1",
    "#512DA8",
    "#4527A0",
    "#311B92",
    "#B388FF",
    "#7C4DFF",
    "#651FFF",
    "#6200EA",
    "#E8EAF6",
    "#C5CAE9",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#3F51B5",
    "#3949AB",
    "#303F9F",
    "#283593",
    "#1A237E",
    "#8C9EFF",
    "#536DFE",
    "#3D5AFE",
    "#304FFE",
    "#E3F2FD",
    "#BBDEFB",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
    "#2196F3",
    "#1E88E5",
    "#1976D2",
    "#1565C0",
    "#0D47A1",
    "#82B1FF",
    "#448AFF",
    "#2979FF",
    "#2962FF",
    "#E1F5FE",
    "#B3E5FC",
    "#81D4FA",
    "#4FC3F7",
    "#29B6F6",
    "#03A9F4",
    "#039BE5",
    "#0288D1",
    "#0277BD",
    "#01579B",
    "#80D8FF",
    "#40C4FF",
    "#00B0FF",
    "#0091EA",
    "#E0F7FA",
    "#B2EBF2",
    "#80DEEA",
    "#4DD0E1",
    "#26C6DA",
    "#00BCD4",
    "#00ACC1",
    "#0097A7",
    "#00838F",
    "#006064",
    "#84FFFF",
    "#18FFFF",
    "#00E5FF",
    "#00B8D4",
    "#E0F2F1",
    "#B2DFDB",
    "#80CBC4",
    "#4DB6AC",
    "#26A69A",
    "#009688",
    "#00897B",
    "#00796B",
    "#00695C",
    "#004D40",
    "#A7FFEB",
    "#64FFDA",
    "#1DE9B6",
    "#00BFA5",
    "#E8F5E9",
    "#C8E6C9",
    "#A5D6A7",
    "#81C784",
    "#66BB6A",
    "#4CAF50",
    "#43A047",
    "#388E3C",
    "#2E7D32",
    "#1B5E20",
    "#B9F6CA",
    "#69F0AE",
    "#00E676",
    "#00C853",
    "#F1F8E9",
    "#DCEDC8",
    "#C5E1A5",
    "#AED581",
    "#9CCC65",
    "#8BC34A",
    "#7CB342",
    "#689F38",
    "#558B2F",
    "#33691E",
    "#CCFF90",
    "#B2FF59",
    "#76FF03",
    "#64DD17",
    "#F9FBE7",
    "#F0F4C3",
    "#E6EE9C",
    "#DCE775",
    "#D4E157",
    "#CDDC39",
    "#C0CA33",
    "#AFB42B",
    "#9E9D24",
    "#827717",
    "#F4FF81",
    "#EEFF41",
    "#C6FF00",
    "#AEEA00",
    "#FFFDE7",
    "#FFF9C4",
    "#FFF59D",
    "#FFF176",
    "#FFEE58",
    "#FFEB3B",
    "#FDD835",
    "#FBC02D",
    "#F9A825",
    "#F57F17",
    "#FFFF8D",
    "#FFFF00",
    "#FFEA00",
    "#FFD600",
    "#FFF8E1",
    "#FFECB3",
    "#FFE082",
    "#FFD54F",
    "#FFCA28",
    "#FFC107",
    "#FFB300",
    "#FFA000",
    "#FF8F00",
    "#FF6F00",
    "#FFE57F",
    "#FFD740",
    "#FFC400",
    "#FFAB00",
    "#FFF3E0",
    "#FFE0B2",
    "#FFCC80",
    "#FFB74D",
    "#FFA726",
    "#FF9800",
    "#FB8C00",
    "#F57C00",
    "#EF6C00",
    "#E65100",
    "#FFD180",
    "#FFAB40",
    "#FF9100",
    "#FF6D00",
    "#FBE9E7",
    "#FFCCBC",
    "#FFAB91",
    "#FF8A65",
    "#FF7043",
    "#FF5722",
    "#F4511E",
    "#E64A19",
    "#D84315",
    "#BF360C",
    "#FF9E80",
    "#FF6E40",
    "#FF3D00",
    "#DD2C00",
    "#EFEBE9",
    "#D7CCC8",
    "#BCAAA4",
    "#A1887F",
    "#8D6E63",
    "#795548",
    "#6D4C41",
    "#5D4037",
    "#4E342E",
    "#3E2723",
    "#FAFAFA",
    "#F5F5F5",
    "#EEEEEE",
    "#E0E0E0",
    "#BDBDBD",
    "#9E9E9E",
    "#757575",
    "#616161",
    "#424242",
    "#212121",
    "#ECEFF1",
    "#CFD8DC",
    "#B0BEC5",
    "#90A4AE",
    "#78909C",
    "#607D8B",
    "#546E7A",
    "#455A64",
    "#37474F",
    "#263238",
    "#000000",
  ];

  const getColorForAppointment = (appointmentId) => {
    const storedColors =
      JSON.parse(localStorage.getItem("appointmentColors")) || {};
    if (storedColors[appointmentId]) {
      return storedColors[appointmentId];
    } else {
      const newColor =
        materialColors[Math.floor(Math.random() * materialColors.length)];
      storedColors[appointmentId] = newColor;
      localStorage.setItem("appointmentColors", JSON.stringify(storedColors));
      return newColor;
    }
  };

  const generateCalendar = (year: number, month: number): JSX.Element => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    let calendarHTML: JSX.Element[] = [];

    const daysOfWeek: string[] = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    daysOfWeek.forEach((day) => {
      calendarHTML.push(
        <div key={day} className="text-center font-semibold">
          {day}
        </div>,
      );
    });

    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarHTML.push(<div key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date();
      const isCurrentDate =
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate();

      const appointment = appointments.find(
        (appointment) =>
          new Date(appointment.appointmentDate).getFullYear() === year &&
          new Date(appointment.appointmentDate).getMonth() === month &&
          new Date(appointment.appointmentDate).getDate() === day,
      );

      calendarHTML.push(
        <div
          key={day}
          className={`text-center py-2 border cursor-pointer ${isCurrentDate ? "bg-blue-500 text-white" : ""}`}
          style={{ backgroundColor: appointment ? appointment.color : "" }}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>,
      );
    }

    return <div className="grid grid-cols-7 gap-2 p-4">{calendarHTML}</div>;
  };

  const handlePrevMonth = (): void => {
    setState((prevState) => {
      let newYear = prevState.currentYear;
      let newMonth = prevState.currentMonth - 1;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      return { ...prevState, currentYear: newYear, currentMonth: newMonth };
    });
  };

  const handleNextMonth = (): void => {
    setState((prevState) => {
      let newYear = prevState.currentYear;
      let newMonth = prevState.currentMonth + 1;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      return { ...prevState, currentYear: newYear, currentMonth: newMonth };
    });
  };

  const handleDateClick = (day: number): void => {
    const selectedDateObj = new Date(
      state.currentYear,
      state.currentMonth,
      day,
    );
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = selectedDateObj.toLocaleDateString(
      undefined,
      options,
    );
    setState((prevState) => ({
      ...prevState,
      selectedDate: formattedDate,
      showModal: true,
    }));
  };

  const handleCloseModal = (): void => {
    setState((prevState) => ({ ...prevState, showModal: false }));
  };

  const handleFormSubmit = (formValues: FormValuesInterface): void => {
    console.log("Form submitted with data:", formValues);
    setState((prevState) => ({
      ...prevState,
      formValues,
      showModal: false,
    }));
  };

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: "long" };
    const month = new Intl.DateTimeFormat("en-US", options).format(date);
    const day = date.getDate();
    const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
    const weekday = new Intl.DateTimeFormat("en-US", weekdayOptions).format(
      date,
    );
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setToday({
      month,
      day,
      weekday,
      time: `${time} to 5:00 pm`,
    });
  }, []);

  const { currentYear, currentMonth, showModal, selectedDate, formValues } =
    state;

  const { email } = useUser();

  const [appointments, setAppointments] = useState<Appointment[]>([]);

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
          const appointmentsWithColors = response.data.map((appointment) => ({
            ...appointment,
            color: getColorForAppointment(appointment.id),
          }));
          setAppointments(appointmentsWithColors);
        } else {
          console.error("Expected an array but received:", response.data);
          setAppointments([]);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [email]);

  const formatAppointmentDate = (appointment: Appointment) => {
    const appointmentDate = new Date(appointment.appointmentDate);

    const day = appointmentDate.getDate();
    const month = appointmentDate.getMonth() + 1;
    const year = appointmentDate.getFullYear();
    const time = appointmentDate.toLocaleTimeString();

    return { day, month, year, time };
  };

  return (
    <div className="w-full">
      <div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
        <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
          <div className="block rounded-t overflow-hidden text-center">
            <div className="bg-blue text-white py-1">{today.month}</div>
            <div className="pt-1 border-l border-r border-white bg-white">
              <span className="text-5xl font-bold leading-tight">
                {today.day}
              </span>
            </div>
            <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
              <span className="text-sm">{today.weekday}</span>
            </div>
            <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
              <span className="text-xs leading-normal">{today.time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div
          className="w-1/4 bg-gray-100 p-4 overflow-y-auto"
          style={{ maxHeight: "70vh" }}
        >
          <h5 className="mb-4">Appointments</h5>
          {appointments.map((appointment) => (
            <div key={appointment.id}>
              <div className="w-32 mb-6 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
                <div className="block rounded-t overflow-hidden text-center">
                  <div
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
                    style={{ backgroundColor: appointment.color }}
                  >
                    <div className="mt-px">
                      {formatAppointmentDate(appointment).day}
                    </div>
                  </div>
                  <div className="pt-1 border-l border-r border-white bg-white">
                    <span
                      className="text-5xl font-bold leading-tight"
                      style={{ color: appointment.color }}
                    >
                      {formatAppointmentDate(appointment).day}
                    </span>
                  </div>
                  <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                    <span className="text-sm">{appointment.serviceType}</span>
                  </div>
                  <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                    <span className="text-xs leading-normal">
                      {formatAppointmentDate(appointment).time}
                    </span>
                  </div>
                  <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                    <span className="text-xs leading-normal">
                      {appointment.venue}
                    </span>
                  </div>
                  <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                    <span className="text-xs leading-normal">
                      {appointment.appointmentType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between px-6 py-3"
              style={{ backgroundColor: "#0e5a97" }}
            >
              <button className="text-white" onClick={handlePrevMonth}>
                Previous
              </button>
              <h2 className="text-white">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
              <button className="text-white" onClick={handleNextMonth}>
                Next
              </button>
            </div>
            {generateCalendar(currentYear, currentMonth)}
          </div>
          {showModal && (
            <div className="modal fixed inset-0 flex items-center justify-center z-50">
              <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
              <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                  <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Selected Date</p>
                    <button
                      className="modal-close px-3 py-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring"
                      onClick={handleCloseModal}
                      style={{ color: "#0e5a97" }}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-xl font-semibold">{selectedDate}</div>
                  <DashboardAppointmentForm
                    selectedDate={selectedDate}
                    closeModal={handleCloseModal}
                    formValues={formValues}
                    onClose={handleCloseModal}
                    onSubmit={handleFormSubmit}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;

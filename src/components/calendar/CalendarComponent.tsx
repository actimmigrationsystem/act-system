import React, { useState, useEffect } from "react";

interface CalendarComponentProps {}

interface CalendarComponentState {
  currentYear: number;
  currentMonth: number;
  showModal: boolean;
  selectedDate: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = () => {
  const [state, setState] = useState<CalendarComponentState>({
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    showModal: false,
    selectedDate: "",
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
  // Function to generate the calendar for a specific month and year
  const generateCalendar = (year: number, month: number): JSX.Element => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
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

    // Prepare calendar HTML
    let calendarHTML: JSX.Element[] = [];

    // Days of the week headers
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
        </div>
      );
    });

    // Empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarHTML.push(<div key={`empty-${i}`} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date();
      const isCurrentDate =
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate();

      calendarHTML.push(
        <div
          key={day}
          className={`text-center py-2 border cursor-pointer ${
            isCurrentDate ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2 p-4">{calendarHTML}</div>;
  };

  // Event handlers
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
      day
    );
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = selectedDateObj.toLocaleDateString(
      undefined,
      options
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

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: "long" };
    const month = new Intl.DateTimeFormat("en-US", options).format(date);
    const day = date.getDate();
    const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
    const weekday = new Intl.DateTimeFormat("en-US", weekdayOptions).format(
      date
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

  const { currentYear, currentMonth, showModal, selectedDate } = state;

  return (
    <div className="w-full">
      <div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium mb-12">
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
        {/* Modal */}
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;

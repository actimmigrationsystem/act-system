import React from "react";
import { Datepicker } from "flowbite-react";

const DateComponent = ({
  appointmentDate,
  setAppointmentDate,
}: {
  appointmentDate: string;
  setAppointmentDate: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div>
    <Datepicker
      value={appointmentDate}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAppointmentDate(event.target.value)}
      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
    />
  </div>
);

export default DateComponent;

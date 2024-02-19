import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface AppointmentDateProps {
  value: Date;
  onChange: (date: Date) => void;
}

const AppointmentDatePicker = ({ value, onChange }: AppointmentDateProps) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      popperClassName="date-picker-popper"
      popperPlacement="bottom"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="dd/MM/yyyy h:mm aa"
      popperModifiers={[
        {
          name: "myModifier",
          fn: (state: any) => {
            return state;
          },
        },
      ]}
    />
  );
};

export default AppointmentDatePicker;

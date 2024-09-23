import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerComponentProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DatePickerComponent = ({ value, onChange }: DatePickerComponentProps) => {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      onChange(date);
    }
  };

  return (
    <DatePicker
      placeholderText="dd/mm/yyyy"
      className="border-gray-300 rounded p-2 w-full"
      selected={value}
      onChange={handleDateChange}
      popperClassName="date-picker-popper"
      popperPlacement="bottom"
      dateFormat="dd/MM/yyyy"
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

export default DatePickerComponent;

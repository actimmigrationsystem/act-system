import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerComponentProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DatePickerComponent = ({ value, onChange }: DatePickerComponentProps) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
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

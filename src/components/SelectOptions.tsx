import { Label, Select } from "flowbite-react";

const SelectOptions = () => {
  return (
    <div className="max-w-full">
      <div className="mb-2 block">
        <Label htmlFor="gender" value="What is your gender" />
      </div>
      <Select id="gender">
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
      </Select>
    </div>
  );
}
export default SelectOptions;

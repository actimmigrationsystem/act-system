import { useState } from "react";
import { resetFields } from "./authFormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = resetFields;
let fieldsState: { [key: string]: any } = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Reset() {
  const [resetState, setResetState] = useState(fieldsState);

  const handleChange = (e: any) =>
    setResetState({ ...resetState, [e.target.id]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(resetState);
    resetPassword();
  };

  //handle Signup API Integration here
  const resetPassword = () => {};

  return (
   < form className="mt-8 space-y-6 max-w-md mx-auto w-1/2"
     onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={resetState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass={""}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Reset" loading={false} />
      </div>
    </form>
  );
}

import DynamicForm from "./DynamicForm"; // DynamicForm component
import {
  mainApplicantFields,
  employmentFields,
  contactDetailsFields,
} from "./scraFormFields"; // form field arrays

const SCRAForm = () => {
  return (
    <div>
      <DynamicForm fields={mainApplicantFields} />
      <DynamicForm fields={employmentFields} />
      <DynamicForm fields={contactDetailsFields} />
    </div>
  );
};

export default SCRAForm;

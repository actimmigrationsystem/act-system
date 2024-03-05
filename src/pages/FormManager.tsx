import { useLocation } from "react-router-dom";

interface FormValues {
  [key: string]: string | undefined | Date;
}

interface FormManagerProps {
  formValues: FormValues;
}
const FormManager: React.FC<FormManagerProps> = ({ formValues }) => {
  const location = useLocation();
  const extractedFormValues: FormValues = location.state?.formValues || {};

  const mergedFormValues = { ...formValues, ...extractedFormValues };

  return (
    <div>
      <h2>Preview</h2>
      {Object.entries(mergedFormValues).map(([key, value]) => (
        <p key={key}>
          {key}: {value?.toString()}
        </p>
      ))}
    </div>
  );
};

export default FormManager;

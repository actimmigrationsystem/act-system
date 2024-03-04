import { useLocation } from "react-router-dom";

interface ExternalFormViewProps {
  formValues: {
    name?: string;
    surname?: string;
    _subject?: string;
    email?: string;
    serviceType?: string;
    appointmentType?: string;
    appointmentDate?: Date;
    appointmentTime?: string;
  };
}

const ExternalFormView = ({ formValues }: ExternalFormViewProps) => {

  // Access location state to retrieve formValues
  const location = useLocation();
  const extractedFormValues = location.state?.formValues || {};

  // Destructure properties with default values or optional chaining
  const {
    name,
    surname,
    _subject,
    email,
    serviceType,
    appointmentType,
    appointmentDate,
    appointmentTime,
  } = extractedFormValues || {};

  return (
    <div>
      <h2>External View</h2>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Subject: {_subject}</p>
      <p>Email: {email}</p>
      <p>Service Type: {serviceType}</p>
      <p>Appointment Type: {appointmentType}</p>
      <p>Appointment Date: {appointmentDate?.toString()}</p>
      <p>Appointment Time: {appointmentTime}</p>
    </div>
  );
};

export default ExternalFormView;

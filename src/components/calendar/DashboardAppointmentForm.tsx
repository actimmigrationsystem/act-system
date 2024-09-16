import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// Assuming this is correctly imported or defined elsewhere
const createAppointmentRoute = import.meta.env.VITE_CREATE_APPOINTMENT_ROUTE;

export interface FormValuesInterface {
  name: string;
  surname: string;
  email: string;
  serviceType: string;
  venue: string;
  appointmentType: string;
  appointmentDate: Date | string;
}


export interface DashboardAppointmentFormProps {
  formValues: FormValuesInterface;
  selectedDate: string; // Assuming this is correctly passed as prop
  onClose: () => void;
  closeModal: () => void;
  onSubmit: (formData: FormValuesInterface) => void;
}

const serviceOptions = [
  "Asylum seeker appeal/review",
  "Asylum seeker visa extension",
  "Critical skills visa application",
  "Letter of good cause application (FORM 20)",
  "Naturalisation application",
  "Permanent residence appeal",
  "Permanent residence application",
  "Prohibition appeal",
  "PRP Exemptions",
  "PRP Waiver",
  "Refugee permit extension",
  "Standing Committee application",
  "Study visa application",
  "Study visa rejection",
  "Temporary residence renewal",
  "TRV Exemptions",
  "TRV Waiver",
  "ZEP Migration",
  "ZEP Waiver",
];

const appointmentOptions = [
  "Phone call",
  "Email",
  "Remote (zoom|skype)",
  "In-Person (Office)",
];

const venueOptions = [
  "Cape Town Office",
  "East London Office",
  "Johannesburg Office",
  "Kariega Office",
  "Mthatha",
];


const DashboardAppointmentForm: React.FC<DashboardAppointmentFormProps> = ({
  formValues,
  selectedDate,
  onClose,
  onSubmit,
}) => {
  const [formState, setFormState] = useState<FormValuesInterface>({
    name: "",
    surname: "",
    email: "",
    serviceType: "",
    venue: "",
    appointmentType: "",
    appointmentDate: new Date(),

  });

  const location = useLocation();
  const extractedFormValues: FormValuesInterface =
    location.state?.formValues || {};

  // Merge props formValues with extractedFormValues
  const mergedFormValues = { ...formValues, ...extractedFormValues };

  const formatDate = (date: Date | string): string => {
    if (date instanceof Date) {
      if (!isNaN(date.getTime())) {
        return date.toISOString().split("T")[0];
      }
      return "";
    } else {
      return date;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const appointmentInput = {
        appointment: {
          name: formState.name,
          surname: formState.surname,
          email: formState.email,
          serviceType: formState.serviceType,
          venue: formState.venue,
          appointmentDate: formatDate(formState.appointmentDate),
          appointmentType: formState.appointmentType,
          contact_info: {
            name: formState.name,
            surname: formState.surname,
            email: formState.email,
          },
        },
      };

      const url = `${createAppointmentRoute}`;
      const response = await axios.post(url, appointmentInput, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Form Submitted:", response.data);
      onSubmit(formState); // Assuming you want to pass back form values after submit
      onClose(); // Close modal or handle further actions
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("Error response data:", (error as any).response?.data);
    }
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 px-6">
          <div className="flex justify-between items-center pb-3">
            <h2 className="text-2xl font-bold">Create Appointment</h2>
            <button
              className="modal-close px-3 py-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring"
              onClick={onClose}
              style={{ color: "#0e5a97" }}
            >
              ✕
            </button>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">
              Selected Date: {selectedDate}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formState.surname}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-700"
              >
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formState.serviceType}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a service type</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="venue"
                className="block text-sm font-medium text-gray-700"
              >
                Venue
              </label>
              <select
                id="venue"
                name="venue"
                value={formState.venue}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a venue</option>
                {venueOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="appointmentType"
                className="block text-sm font-medium text-gray-700"
              >
                Appointment Type
              </label>
              <select
                id="appointmentType"
                name="appointmentType"
                value={formState.appointmentType}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select an appointment type</option>
                {appointmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Create Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardAppointmentForm;

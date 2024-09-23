import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../components/auth/UserContext";
import styled from "styled-components";
import { FaMapPin } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import DocumentUpload from "../../../components/forms/DocumentUpload";

const enquiryRoute = import.meta.env.VITE_ENQUIRY_ROUTE;
const createEnquiryRoute = import.meta.env.VITE_CREATE_ENQUIRY_ROUTE;

interface Enquiry {
  id: number;
  name: string;
  surname: string;
  phonenumber: string;
  email: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  residentialAddress: string;
  immigrationStatus: string;
  entryDate: string;
  passportNumber: string;
  referenceNumber: string;
  documentUpload: string;
  serviceType: string;
  elaborate: string;
}

interface FormValues {
  name: string;
  surname: string;
  phonenumber: string;
  email: string;
  gender: string;
  dob: Date;
  maritalStatus: string;
  residentialAddress: string;
  entryDate: Date;
  passportNumber: string;
  referenceNumber: string;
  serviceType: string;
  elaborate: string;
  document_upload: File[];
  immigrationStatus: string;
}

const PaperBackground = styled.div`
  position: relative;
  background: white;
  padding: 16px;
  border-top: 4px solid #10b981; /* Tailwind green-500 color */
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.03) 1px,
    transparent 1px
  );
  background-size: 100% 24px;

  & .pin {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    width: 20px;
    height: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 20px;
      background-color: #d4d4d4;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;


const ClientEnquiries: React.FC = () => {
  const { email } = useUser();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }
    const url = `${enquiryRoute}/${email}`;
    axios
      .get(url, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setEnquiries(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setEnquiries([]);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data!", error);
      });
  }, [email]);

  const handleClick = (enquiry: Enquiry) => {
    navigate(`/enquiries/${enquiry.id}`, { state: { enquiry } });
  };

  const handleCreateEnquiry = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const EnquiryForm: React.FC<{ closeModal: () => void }> = ({
    closeModal,
  }) => {
    const [formValues, setFormValues] = useState<FormValues>({
      name: "",
      surname: "",
      phonenumber: "",
      email: "",
      gender: "",
      dob: new Date(),
      maritalStatus: "",
      residentialAddress: "",
      entryDate: new Date(),
      passportNumber: "",
      referenceNumber: "",
      serviceType: "",
      elaborate: "",
      document_upload: [],
      immigrationStatus: "",
    });

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

    const [selectedService, setSelectedService] = useState(serviceOptions[0]);

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleChangeTextarea = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const formData = new FormData();

        if (Array.isArray(formValues.document_upload)) {
          formValues.document_upload.forEach((file, index) => {
            formData.append(`enquiry[document_upload][${index}]`, file);
          });
        }

        const enquiryInput = {
          name: formValues.name,
          surname: formValues.surname,
          phonenumber: formValues.phonenumber,
          email: formValues.email,
          gender: formValues.gender,
          dob: formValues.dob.toISOString().split("T")[0],
          maritalStatus: formValues.maritalStatus,
          residentialAddress: formValues.residentialAddress,
          immigrationStatus: formValues.immigrationStatus,
          entryDate: formValues.entryDate.toISOString().split("T")[0],
          passportNumber: formValues.passportNumber,
          referenceNumber: formValues.referenceNumber,
          serviceType: selectedService,
          elaborate: formValues.elaborate,
          contact_info: {
            name: formValues.name,
            surname: formValues.surname,
            phonenumber: formValues.phonenumber,
            email: formValues.email,
          },
        };

        Object.entries(enquiryInput).forEach(([key, value]) => {
          if (key === "contact_info") {
            formData.append(`enquiry[${key}]`, JSON.stringify(value));
          } else {
            formData.append(`enquiry[${key}]`, String(value));
          }
        });

        const url = `${createEnquiryRoute}`;
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        closeModal();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-auto z-50 shadow-lg transform transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Create Enquiry
            </h2>
            <button
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div>
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phonenumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Type
                </label>
                <Listbox value={selectedService} onChange={setSelectedService}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{selectedService}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {serviceOptions.map((option, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active, selected }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-100 text-blue-900"
                                  : "text-gray-900"
                              } ${selected ? "font-medium" : "font-normal"}`
                            }
                            value={option}
                          >
                            {({ selected }) => (
                              <>
                                <span className="block truncate">{option}</span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div>
                <label
                  htmlFor="elaborate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Elaborate
                </label>
                <textarea
                  id="elaborate"
                  name="elaborate"
                  rows={3}
                  value={formValues.elaborate}
                  onChange={handleChangeTextarea}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
                <div className="text-gray-500 text-right">
                  {formValues.elaborate.length}/1000
                </div>
              </div>
              <DocumentUpload
                onFileChange={(files: File[]) =>
                  setFormValues({ ...formValues, document_upload: files })
                }
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="mr-2 bg-gray-200 text-gray-700 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white px-4 py-2 rounded"
                style={{ backgroundColor: "#0e5a97" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10 w-full">
      <div className="flex justify-end mb-4">
        <button
          className="hover:bg-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateEnquiry}
        >
          New Enquiry
        </button>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {enquiries.map((enquiry) => (
            <PaperBackground
              key={enquiry.id}
              onClick={() => handleClick(enquiry)}
            >
              <div className="pin">
                <FaMapPin />
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Service Type
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.serviceType}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Status
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.immigrationStatus}
                  </dd>
                </div>
                <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Reference Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.referenceNumber}
                  </dd>
                </div>
              </div>
            </PaperBackground>
          ))}
        </div>
      </div>
      {isModalOpen && <EnquiryForm closeModal={handleCloseModal} />}
    </div>
  );
};

export default ClientEnquiries;

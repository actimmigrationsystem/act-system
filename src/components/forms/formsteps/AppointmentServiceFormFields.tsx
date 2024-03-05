import { useState, useEffect, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import AppointmentDatePicker from "../datepickers/AppointmentDatePicker";
import { Listbox, Transition } from "@headlessui/react";
import { Typography } from "@material-tailwind/react";

interface AppointmentServiceFormFieldsProps {
  formValues: {
    appointmentDate: Date;
  };
  handleAppointmentDateChange: (date: Date | undefined) => void;
  handleServiceChange: (value: string | undefined) => void;
  handleVenueChange: (value: string | undefined) => void;
  handleAppointmentChange: (value: string | undefined) => void;
}

const AppointmentServiceFormFields: React.FC<
  AppointmentServiceFormFieldsProps
> = ({
  formValues,
  handleAppointmentDateChange,
  handleServiceChange,
  handleVenueChange,
  handleAppointmentChange,
}) => {
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

  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [selectedVenue, setselectedVenue] = useState(venueOptions[0]);

  const [selectedAppointment, setselectedAppointment] = useState(
    appointmentOptions[0]
  );

  useEffect(() => {
    handleServiceChange(selectedService);
  }, [selectedService, handleServiceChange]);

  useEffect(() => {
    handleVenueChange(selectedVenue);
  }, [selectedVenue, handleVenueChange]);

  useEffect(() => {
    handleAppointmentChange(selectedAppointment);
  }, [selectedAppointment, handleAppointmentChange]);

  return (
    <>
      <div className="mt-8">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          What service do you require?
        </Typography>
        <div className="max-w-full mb-4">
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
                <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {serviceOptions.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active, selected }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
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
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          How would you like to receive this service?
        </Typography>
        <div className="max-w-full mb-4">
          <Listbox
            value={selectedAppointment}
            onChange={setselectedAppointment}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedAppointment}</span>
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
                <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {appointmentOptions.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active, selected }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
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
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2">
            <Typography
              placeholder={"Typography"}
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Select Appointment Date/Time
            </Typography>
            <AppointmentDatePicker
              value={formValues.appointmentDate}
              onChange={handleAppointmentDateChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Typography
              placeholder={"Typography"}
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Select Appointment Venue
            </Typography>
            <div className="max-w-full">
              <Listbox value={selectedVenue} onChange={setselectedVenue}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedVenue}</span>
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
                    <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {venueOptions.map((option, index) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentServiceFormFields;



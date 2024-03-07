import { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Typography } from "@material-tailwind/react";
import { Checkbox, Label } from "flowbite-react";
import DocumentUpload from "../DocumentUpload";

interface GeneralServiceFormFieldsProps {
  formValues: any;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleServiceChange: (value: string | undefined) => void;
  onFileChange: (files: File[]) => void;
}

const GeneralServiceFormFields: React.FC<GeneralServiceFormFieldsProps> = ({
  formValues,
  handleChangeTextarea,
  handleServiceChange,
  onFileChange,
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

  const [selectedService, setSelectedService] = useState(serviceOptions[0]);

  useEffect(() => {
    handleServiceChange(selectedService);
  }, [selectedService]);

const handleFileChange = (files: File[]) => {
  console.log("Selected files:", files);
  // save the files to state
  onFileChange(files);
};


  return (
    <div className="mt-8">
      <div className="w-full md:w-full mb-4">
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          What service do you require?
        </Typography>
        <div className="max-w-full">
          <Listbox
            value={selectedService}
            onChange={(value) => {
              setSelectedService(value);
              handleServiceChange(value);
            }}
          >
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
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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
      </div>
      <div>
        <Typography
          placeholder={"Typography"}
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Please explain in detail what you require:
        </Typography>
        <div className="mb-2">
          <textarea
            rows={4}
            name="elaborate"
            value={formValues.elaborate}
            onChange={handleChangeTextarea}
            className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          />
        </div>
        <div className="text-gray-500 text-right">
          {formValues.elaborate.length}/1000
        </div>
      </div>

        <DocumentUpload onFileChange={handleFileChange} />

      <div className="flex max-w-md flex-col gap-4" id="checkbox">
        <div className="flex items-center gap-2 mb-4 text-center justify-center">
          <Checkbox id="accept" defaultChecked />
          <Label htmlFor="accept" className="flex">
            I agree with the&nbsp;
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
      </div>
    </div>
  );
};

export default GeneralServiceFormFields;
import React from "react";
import { useLocation } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { Typography, Button } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";

interface FormValues {
  [key: string]: string | undefined | Date | File | File[];
}

interface FormManagerProps {
  formValues: FormValues;
  onConfirm: () => void;
  onSubmit: () => void;
}

const FormManager: React.FC<FormManagerProps> = ({
  formValues,
  onConfirm,
  onSubmit,
}) => {
  const location = useLocation();
  const extractedFormValues: FormValues = location.state?.formValues || {};
  const mergedFormValues = { ...formValues, ...extractedFormValues };

  return (
    <>
      <SectionContainer>
        <SectionTitle title="Preview" />
        <ContentContainer>
          <div className="grid grid-cols-2 gap-1 items-center justify-center">
            {Object.entries(mergedFormValues).map(([key, value]) => (
              <div key={key} className="mb-4 flex justify-center">
                <Typography placeholder={""} className="font-bold mr-2">
                  {key}:
                </Typography>
                <div className="flex items-center">
                  {Array.isArray(value) && value.length > 0 ? (
                    <ul>
                      {value.map((file: File, index: number) => (
                        <li key={index} className="mr-2">
                          <FaFilePdf className="mr-2" />
                          <a
                            href={URL.createObjectURL(file)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            {file.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : typeof value === "object" && value instanceof File ? (
                    <a
                      href={URL.createObjectURL(value)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaFilePdf className="mr-2" />
                      {value.name}
                    </a>
                  ) : (
                    <Typography placeholder={""}>
                      {value?.toString()}
                    </Typography>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Button placeholder={""} onClick={onConfirm} className="mr-2">
              Confirm
            </Button>
            <Button placeholder={""} color="green" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </ContentContainer>
      </SectionContainer>
    </>
  );
};

export default FormManager;

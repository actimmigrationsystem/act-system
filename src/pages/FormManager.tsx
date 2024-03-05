import React from "react";
import { useLocation } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

interface FormValues {
  [key: string]: string | undefined | Date | File | File[];
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
        <div key={key}>
          <p>
            {key}:{" "}
            {Array.isArray(value) && value.length > 0 ? (
              <ul>
                {value.map((file: File, index: number) => (
                  <li key={index}>
                    <FaFilePdf />
                    <a
                      href={URL.createObjectURL(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : typeof value === "object" && value instanceof File ? (
              <>
                <FaFilePdf />
                <a
                  href={URL.createObjectURL(value)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value.name}
                </a>
              </>
            ) : (
              value?.toString()
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FormManager;

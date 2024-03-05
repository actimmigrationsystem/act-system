import { FileInput, Label } from "flowbite-react";

interface DocumentUploadProps {
  onFileChange: (file: File) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onFileChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div id="fileUpload" className="max-w-md mb-8">
      <div className="mb-2 block">
        <Label
          color="primary"
          htmlFor="file"
          value="Please upload your documents for further assistance:"
        />
      </div>
      <FileInput
        id="file"
        multiple
        color="primary"
        helperText="(E.g. Passport, Asylum/Refugee status, Visa(s), Rejection letter(s), Marriage certificate, etc.)"
        theme={{
          field: {
            input: {
              colors: {
                primary: "#0e5a97",
              },
            },
          },
        }}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DocumentUpload;

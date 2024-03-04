
import { FileInput, Label } from "flowbite-react";

const DocumentUpload = () => {
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
        helperText="(E.g. Passport,
        Asylum/Refugee status, Visa(s), Rejection letter(s), Marriage
        certificate, etc.)"
        theme={{
          field: {
            input: {
              colors: {
                primary: "#0e5a97",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DocumentUpload;

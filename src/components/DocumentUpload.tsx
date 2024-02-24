import { FileInput, Label } from 'flowbite-react';

const DocumentUpload = () => {
  return (
    <div id="fileUpload" className="max-w-md">
      <div className="mb-2 block">
        <Label
          htmlFor="file"
          value="Please upload your documents for further assistance:"
        />
      </div>
      <FileInput
        id="file"
        multiple
        helperText="(E.g. Passport,
        Asylum/Refugee status, Visa(s), Rejection letter(s), Marriage
        certificate, etc.)"
      />
    </div>
  );
};
export default DocumentUpload;
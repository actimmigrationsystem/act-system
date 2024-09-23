import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

interface DocumentUploadProps {
  onFileChange: (files: File[]) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const onDrop = (acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    onFileChange(acceptedFiles);
  };

  useEffect(() => {
    if (file) {
      const timer = setInterval(() => {
        setUploadProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            return 100;
          }
          return Math.min(oldProgress + 10, 100);
        });
      }, 500);
    }
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center justify-center mb-2">
      <div
        {...getRootProps()}
        className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <input {...getInputProps()} id="dropzone-file" className="hidden" />
        <div className="flex flex-col items-center justify-center pb-4 pt-4">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">
              Upload additional documents here
            </span>
            (drag and drop)
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PDF, DOC.
          </p>
        </div>
      </div>
      {file && (
        <p>
          Selected file: {file.name} - {file.size} bytes
        </p>
      )}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <p>Uploading file: {uploadProgress}%</p>
      )}
    </div>
  );
};

export default DocumentUpload;

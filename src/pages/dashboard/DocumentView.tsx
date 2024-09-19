import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";
import React from "react";

const documentRoute = import.meta.env.VITE_DOCUMENT_ROUTE;
const documentUploadRoute = import.meta.env.VITE_DOCUMENT_UPLOAD;

interface Document {
  id: string;
  name: string;
  dateUploaded: string;
  type: string;
  url: string;
}

const DocumentView = () => {
  const { email } = useUser();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentError, setDocumentError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files && files.length > 0) {
    setSelectedFile(files[0]);
  }
};


  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      await axios.post(`${documentUploadRoute}/${email}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Document uploaded successfully");
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Failed to upload document");
    }
  };

  // Fetch Documents
  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }

    const url = `${documentRoute}/${email}`;

    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.message) {
          setDocumentError(response.data.message);
        } else {
          setDocuments(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
        // Check if the error response from the server has a message, if not, use a default message
        const errorMessage =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "An error occurred";
        setDocumentError(errorMessage);
      });
  }, [email]);

  return (
    <DashboardLayout pageTitle="Documents">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Welcome to the Documents
        </h1>
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload Document</button>
        </div>

        {/* Display documents */}
        {documents.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {documents.map((document) => (
              <div key={document.id} className="p-4 border rounded-lg">
                <p className="text-sm font-medium mb-1">{document.name}</p>
                <p className="text-xs text-gray-500 mb-1">
                  {document.dateUploaded}
                </p>
                <p className="text-xs text-gray-500 mb-1">{document.type}</p>
                <a
                  href={document.url}
                  className="text-blue-500 hover:underline text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Display error if fetching documents fails */}
        {documentError && (
          <div className="text-red-500 mt-4">{documentError}</div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DocumentView;

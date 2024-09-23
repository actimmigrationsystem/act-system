import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";
import ClientEnquiries from "./clientenquiries/ClientEnquiries";
const enquiryRoute = import.meta.env.VITE_ENQUIRY_ROUTE;

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
  documentUpload: string[];
  serviceType: string;
  elaborate: string;
}

const EnquiryView = () => {
  const { email } = useUser();
  console.log("User email:", email);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      console.error(enquiries);
      return;
    }
    const url = `${enquiryRoute}/${email}`;
    console.log("Making request to:", url);
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Full response:", response);

        if (Array.isArray(response.data)) {
          setEnquiries(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setEnquiries([]);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [email]);

  return (
    <DashboardLayout pageTitle="My Enquiries">
      <div className="flex items-center justify-center h-full">
        <ClientEnquiries />
      </div>
    </DashboardLayout>
  );
};

export default EnquiryView;

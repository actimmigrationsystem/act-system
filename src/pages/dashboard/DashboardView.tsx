import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";

const enquiryRoute = import.meta.env.VITE_ENQUIRY_ROUTE;

interface Enquiry {
  id: number;
  name: string;
  serviceType: string;
}

const DashboardView = () => {
  const { email } = useUser();
  console.log("User email:", email);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

useEffect(() => {
  if (!email) {
    console.error("Email is not defined");
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
    <DashboardLayout pageTitle="Dashboard">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome to your Dashboard, {email}
        </h1>
        {enquiries.map((enquiry) => (
          <div key={enquiry.id}>
            <h2>{enquiry.name}</h2>
            <p>{enquiry.serviceType}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default DashboardView;

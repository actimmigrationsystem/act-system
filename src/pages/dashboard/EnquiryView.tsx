import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";

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
  documentUpload: string;
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
    <DashboardLayout pageTitle="Enquiries">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-3 gap-4 mt-10">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-white shadow overflow-hidden sm:rounded-lg mb-4 col-span-1 max-w-sm"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Enquiry
                </h2>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.name} {enquiry.surname}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Phone Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.phonenumber}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.email}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Gender
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.gender}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">DOB</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.dob}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Marital Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.maritalStatus}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Residential Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.residentialAddress}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Immigration Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.immigrationStatus}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      First Entry Date into South Africa
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.entryDate}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Passport Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.passportNumber}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Visa Reference Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.referenceNumber}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Service Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.serviceType}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Elaboration
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {enquiry.elaborate}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EnquiryView;

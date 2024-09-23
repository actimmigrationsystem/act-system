// import React from "react";
import { useLocation, useParams } from "react-router-dom";
import DashboardLayout from "../DashBoardLayout";
import styled from "styled-components";

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

const CardWithGreenLine = styled.div`
  background-color: white;
  padding: 16px;
  border-top: 4px solid #10b981; /* Tailwind green-500 color */
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const EnquiryDetails = () => {
  useParams<{ enquiryId: string }>();
  const location = useLocation();
  const enquiry = location.state.enquiry as Enquiry;

  return (
    <DashboardLayout pageTitle="My Enquiries">
      <div className="container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Enquiry Details */}
        <div className="lg:col-span-2">
          <CardWithGreenLine>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Enquiry Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Enquiry details.
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.name} {enquiry.surname}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.serviceType}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.phonenumber}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.email}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.gender}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    DOB
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.dob}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Marital Status
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.maritalStatus}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Residential Address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.residentialAddress}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Immigration Status
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.immigrationStatus}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Entry Date
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.entryDate}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Passport Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.passportNumber}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Reference Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.referenceNumber}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Document Upload
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.documentUpload}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Elaborate
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {enquiry.elaborate}
                  </dd>
                </div>
              </dl>
            </div>
          </CardWithGreenLine>
        </div>
        {/* Timeline */}
        <div className="lg:col-span-1">
          <CardWithGreenLine>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Enquiry Timeline
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <ul role="list" className="divide-y divide-gray-100">
                <li className="py-4">
                  <div className="flex space-x-3">
                    <span className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      O
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">Open</p>
                      <p className="text-sm text-gray-500">
                        The enquiry has been received and is open for
                        processing.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex space-x-3">
                    <span className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                      V
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Viewed
                      </p>
                      <p className="text-sm text-gray-500">
                        The enquiry has been viewed by the responsible team.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex space-x-3">
                    <span className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      I
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        In Progress
                      </p>
                      <p className="text-sm text-gray-500">
                        The enquiry is currently being processed.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex space-x-3">
                    <span className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      C
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Closed
                      </p>
                      <p className="text-sm text-gray-500">
                        The enquiry has been processed and closed.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardWithGreenLine>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EnquiryDetails;

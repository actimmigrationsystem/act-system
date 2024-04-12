import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../components/auth/UserContext";
import DashboardLayout from "./DashBoardLayout";

const profileRoute = import.meta.env.VITE_PROFILE_ROUTE;

interface UserProfile {
  email: string;
  name: string;
  surname: string;
  passportNumber: string;
  immigrationStatus: string;
  residentialAddress: string;
}

const ProfileView = () => {
  const { email } = useUser();
  const [userData, setUserData] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (!email) {
      console.error("Email is not defined");
      return;
    }

    const url = `${profileRoute}/${email}`;
    console.log("Making request to:", url);

    axios
      .get<UserProfile>(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Full response:", response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [email]);

  return (
    <DashboardLayout pageTitle="Profile">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full max-w-3xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Profile
            </h1>
            <p className="text-gray-600">{email}</p>
          </div>
          {userData && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Personal Information
                </h2>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.name}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Surname
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.surname}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Passport Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.passportNumber}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Immigration Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.immigrationStatus}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Residential Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.residentialAddress}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileView;

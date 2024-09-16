import React, { useState } from "react";
import styled from "styled-components";
import DashboardLayout from "./DashBoardLayout";
import { useUser } from "../../components/auth/UserContext";

const ProfileCard = styled.div`
  background-color: white;
  padding: 16px;
  border-top: 4px solid #0e5a97;
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
  margin: 0 auto;
`;

const ProfileName = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a202c;
  margin: 8px 0;
`;

const ProfileTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0e5a97;
`;

const ProfileDescription = styled.p`
  font-size: 0.875rem;
  color: #718096;
`;

const InfoList = styled.ul`
  background-color: #edf2f7;
  color: #0e5a97;
  padding: 8px 16px;
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`;

const FriendCard = styled.div`
  text-align: center;
  margin: 8px 0;
`;

const FriendImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin: 0 auto;
`;

const FriendName = styled.a`
  display: block;
  color: #0e5a97;
  text-decoration: none;
  margin-top: 8px;
`;

const ProfileView = () => {
  const { email } = useUser();
  const name = email.split("@")[0];

  return (
    <DashboardLayout pageTitle="Profile">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            <ProfileCard>
              <ProfileImage
                src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                alt={email}
              />
              <ProfileName>{name}</ProfileName>
              <ProfileTitle>Delivery Agent</ProfileTitle>
              <ProfileDescription>
                Delivering products for Uber eats
              </ProfileDescription>
              <InfoList>
                <InfoItem>
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-[#0e5a97] py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </InfoItem>
                <InfoItem>
                  <span>Member since</span>
                  <span className="ml-auto">March 2024</span>
                </InfoItem>
              </InfoList>
            </ProfileCard>
            <div className="my-4"></div>
            <ProfileCard>
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-[#0e5a97]">
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>History</span>
              </div>
              <FriendsGrid>
                <FriendCard>
                  <FriendName href="#">Asylum Seekers Permit</FriendName>
                </FriendCard>
                <FriendCard>
                  <FriendName href="#">Enquiry Submission</FriendName>
                </FriendCard>
              </FriendsGrid>
            </ProfileCard>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <ProfileCard>
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-[#0e5a97]">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{name.split(" ")[0]}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{name.split(" ")[1]}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Female</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+11 998001001</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                      Beech Creek, PA, Pennsylvania
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Permanent Address
                    </div>
                    <div className="px-4 py-2">
                      Arlington Heights, IL, Illinois
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800" href={`mailto:${email}`}>
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">Feb 06, 1998</div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </ProfileCard>
            <div className="my-4"></div>
            <ProfileCard>
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-[#0e5a97]">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-[#0e5a97]">Delivery Agent</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-[#0e5a97]">Delivery Agent</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-[#0e5a97]">Waiter</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-[#0e5a97]">Tailor</div>
                      <div className="text-gray-500 text-xs">
                        March 2024 - Now
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-[#0e5a97]">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5-9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-[#0e5a97]">
                        Masters Degree in Oxford
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-[#0e5a97]">
                        Bachelors Degree in LPU
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ProfileCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileView;

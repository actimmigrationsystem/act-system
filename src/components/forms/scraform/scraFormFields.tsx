export const mainApplicantFields = [
  {
    legend: "Main Applicant Details",
    fields: [
      { id: "surname", label: "Surname:", type: "text" },
      { id: "full-name", label: "Full name(s):", type: "text" },
      { id: "ref-no", label: "Refugee Ref No:", type: "text" },
      { id: "scra-no", label: "SCRA No:", type: "text" },
      {
        id: "gender",
        label: "Gender:",
        type: "select",
        options: ["Male", "Female", "Other"],
      },
      { id: "dob", label: "Date of Birth:", type: "date" },
      { id: "nationality", label: "Nationality:", type: "text" },
      { id: "home-language", label: "Home Language:", type: "text" },
      {
        id: "marital-status",
        label: "Marital Status:",
        type: "select",
        options: ["Single", "Married", "Divorced"],
      },
      { id: "date-of-marriage", label: "Date of Marriage:", type: "date" },
    ],
  },
];

export const employmentFields = [
  {
    legend: "Employment Details",
    fields: [
      { id: "occupation", label: "Occupation:", type: "text" },
      {
        id: "employer-details",
        label: "Employer details and address:",
        type: "textarea",
      },
    ],
  },
];

export const contactDetailsFields = [
  {
    legend: "Contact Details and Residential Address",
    fields: [
      { id: "street", label: "Street and no:", type: "text" },
      { id: "suburb", label: "Suburb:", type: "text" },
      { id: "city", label: "Town/City:", type: "text" },
      { id: "postal-code", label: "Postal Code:", type: "text" },
      { id: "telephone", label: "Telephone No:", type: "tel" },
      { id: "email", label: "Email address:", type: "email" },
    ],
  },
];

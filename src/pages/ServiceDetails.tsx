import { useParams } from "react-router-dom";
import Img1 from "../assets/services/1.jpg";
import Img3 from "../assets/services/3.jpg";
import Img4 from "../assets/services/4.jpg";
import Img6 from "../assets/services/6.png";
import Img5 from "../assets/services/5.jpeg";

interface Service {
  title: string;
  image: string;
  description: string;
  subsections: { subtitle: string; subdescription: string }[];
}

const serviceData: Service[] = [
  {
    image: Img6,
    title: "Temporary and permanent residence visas",
    description:
      "We offer a range of temporary and permanent residence services, to assist in you acquiring the permit you desire.",
    subsections: [
      {
        subtitle: "Acquisition of Temporary Residence Visas",
        subdescription:
          "In terms of Sections 10 - 23 of the Immigration Act 13 of 2002, foreigners are allowed temporary residence permits for various reasons, such as: work, leisure, spousal, study and various others. Contact ACT Immigration and Labour Consultants today, for superb assistance in the obtainment of these permits. ACT also assists in the acquisition of Asylum Seeker status.",
      },
    ],
  },
  {
    image: Img5,
    title: "SCRA reviews and appeals",
    description:
      "",
    subsections: [
      {
        subtitle: "APPEALS AND REVIEWS",
        subdescription:
          "An aggrieved applicant may submit representations in the form of an appeal or review to the Director-General or the Minister of Home Affairs against a rejection of any visa or permanent residence permit application.\n\n1. An applicant aggrieved by a decision contemplated in subsection (3) may, within 10 working days from receipt of the notification contemplated in subsection (3), make an application in the prescribed manner to the Director-General for the review or appeal of that decision.\n\n2. An applicant aggrieved by a decision of the Director-General contemplated in subsection (5) may, within 10 working days of receipt of that decision, make an application in the prescribed manner to the Minister for the review or appeal of that decision.\n\nContact us for assistance in the above.",
      },
    ],
  },

  {
    image: Img1,
    title: "Appeals and reviews in terms of the immigration act",
    description:
      "We offer a range of temporary and permanent residence services, to assist in you acquiring the permit you desire.",
    subsections: [
      {
        subtitle: "Visitor's Visa - Under 90 days",
        subdescription:
          "A visitor's visa may be issued for any purpose other than those provided for in sections 13 to 24 by the Director-General in respect of a foreigner who provides the financial or other guarantees prescribed in respect of his or her departure:\n\n1. Provided that such visa may not exceed three months and upon application may be renewed by the Director-General for a further period which shall not exceed three months.\n\n",
      },
      {
        subtitle: "Spousal Visa with Working or Business Rights",
        subdescription:
          "A visitor's visa may be issued to a foreigner who is the spouse of a citizen or permanent resident and who does not qualify for any of the visas contemplated in sections 13 to 22.\n\n2. ",
      },
      {
        subtitle: "Study Visa",
        subdescription:
          "A study visa may be issued, in the prescribed manner, to a foreigner intending to study in the Republic for a period not less than the period of study, by the Director-General: Provided that such foreigner complies with the prescribed requirements.\n\n3. ",
      },
      {
        subtitle: "Business Visa",
        subdescription:
          "A business visa may be issued by the Director-General to a foreigner intending to establish or invest in, or who has established or invested in, a business in the Republic in which he or she may be employed, and an appropriate visa for the duration of the business visa to the members of such foreigner's immediate family.\n\n4. ",
      },
      {
        subtitle: "Relative's Visa",
        subdescription:
          "A relative's visa may be issued for the prescribed period by the Director-General to a foreigner who is a member of the immediate family of a citizen or a permanent resident, provided that such citizen or permanent resident provides the prescribed financial assurance.\n\n5. ",
      },
      {
        subtitle: "Work Visa",
        subdescription:
          "(a) General Work Visa\n\nA general work visa may be issued by the Director-General to a foreigner who complies with the prescribed requirements.\n\n(b) Critical Skills Work Visa\n\nSubject to any prescribed requirements, a critical skills work visa may be issued by the Director-General to an individual possessing such skills or qualifications determined to be critical.\n\n6. ",
      },
    ],
  },
  {
    image: Img4,
    title: "Types of temporary residence visas",
    description:
      "We offer a range of temporary and permanent residence services, to assist in you acquiring the permit you desire.",
    subsections: [
      {
        subtitle: "Visitor's Visa - Under 90 days",
        subdescription:
          "A visitor's visa may be issued for any purpose other than those provided for in sections 13 to 24 by the Director-General in respect of a foreigner who provides the financial or other guarantees prescribed in respect of his or her departure:\n\nProvided that such visa may not exceed three months and upon application may be renewed by the Director-General for a further period which shall not exceed three months.\n\n",
      },
      {
        subtitle: "Spousal Visa with Working or Business Rights",
        subdescription:
          "A visitor's visa may be issued to a foreigner who is the spouse of a citizen or permanent resident and who does not qualify for any of the visas contemplated in sections 13 to 22.\n\n2. ",
      },
      {
        subtitle: "Study Visa",
        subdescription:
          "A study visa may be issued, in the prescribed manner, to a foreigner intending to study in the Republic for a period not less than the period of study, by the Director-General: Provided that such foreigner complies with the prescribed requirements.\n\n3. ",
      },
      {
        subtitle: "Business Visa",
        subdescription:
          "A business visa may be issued by the Director-General to a foreigner intending to establish or invest in, or who has established or invested in, a business in the Republic in which he or she may be employed, and an appropriate visa for the duration of the business visa to the members of such foreigner's immediate family.\n\n4. ",
      },
      {
        subtitle: "Relative's Visa",
        subdescription:
          "A relative's visa may be issued for the prescribed period by the Director-General to a foreigner who is a member of the immediate family of a citizen or a permanent resident, provided that such citizen or permanent resident provides the prescribed financial assurance.\n\n5. ",
      },
      {
        subtitle: "Work Visa",
        subdescription:
          "(a) General Work Visa\n\nA general work visa may be issued by the Director-General to a foreigner who complies with the prescribed requirements.\n\n(b) Critical Skills Work Visa\n\nSubject to any prescribed requirements, a critical skills work visa may be issued by the Director-General to an individual possessing such skills or qualifications determined to be critical.\n\n6. ",
      },
    ],
  },
  {
    image: Img3,
    title: "Permanent residence permit applications",
    description:
      "Permanent residence permits are set out in section 26 and 27 of the Immigration Act, 13 of 2002, as amended, read with the Immigration Regulations 2014, to allow a foreigner to apply for permanent residence. An applicant may apply for permanent residence from within South Africa provided that such foreigner is in possession of a valid temporary residence visa. The temporary residence visa must be renewed while the permanent residence application is still pending. Dependents may apply for different categories of permanent residence.Contact us for more information.",
    subsections: [
      {
        subtitle: "",
        subdescription: "",
      },
    ],
  },
];

const ServiceDetails = () => {
  const { serviceTitle } = useParams<{ serviceTitle: string }>();
  if (!serviceTitle) {
    return <div>No service selected</div>;
  }
  // Find the service with the matching title
  const service = serviceData.find((service) => service.title === serviceTitle);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Render the service details with subtitles and subdescriptions
  return (
    <div className="flex flex-col">
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${service.image})`, opacity: 0.7 }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="text-white text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          {service.title}
        </h2>
      </div>
      <div className="p-8">
        <p className="text-lg">{service.description}</p>
        {service.subsections.map((subsection, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-bold mb-2">{subsection.subtitle}</h3>
            <p className="text-base">{subsection.subdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;


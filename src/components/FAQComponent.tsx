import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

interface IconProps {
  open: boolean;
}

const Icon = ({ open }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

interface FAQ {
  id: string | number;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  faqs: FAQ[];
}

const FAQComponent = ({ faqs }: FAQComponentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleOpen = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-full rounded-lg mx-auto px-20 mt-2 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <div className="max-w-[1230px] mx-auto rounded-lg bg-white">
        {faqs.map((faq, index) => (
          <Accordion
            placeholder="Accordion"
            key={faq.id}
            open={openIndex === index}
            icon={<Icon open={openIndex === index} />}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <AccordionHeader
              placeholder="Accordion Header"
              onClick={() => handleOpen(index)}
              className="mt-1 text-lg font-semibold text-dark dark:text-white"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {faq.question}
            </AccordionHeader>

            <AccordionBody>
              <Typography
                placeholder="Accordion"
                className="mb-2 text-xl mt-6 font-bold tracking-tight text-gray-500 dark:text-white text-center"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                {faq.answer}
              </Typography>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;

import React, { useState } from "react";
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
    <div className="w-full mx-auto px-20">
      {faqs.map((faq, index) => (
        <Accordion
          placeholder="Accordion"
          key={faq.id}
          open={openIndex === index}
          icon={<Icon open={openIndex === index} />}
        >
          <AccordionHeader
            placeholder="Accordion Header"
            onClick={() => handleOpen(index)}
          >
            {faq.question}
          </AccordionHeader>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <AccordionBody>
              <Typography
                placeholder="Accordion"
                className="mb-2 text-xl mt-6 font-bold tracking-tight text-gray-500 dark:text-white text-center"
              >
                {faq.answer}
              </Typography>
            </AccordionBody>
          </p>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQComponent;

/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from '@material-tailwind/react';

const Icon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
Icon.propTypes = {
  open: PropTypes.bool.isRequired,
};

const FAQComponent = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => setOpenIndex(openIndex === index ? null : index);

  return (

    <div className="w-full mx-auto px-20">
      {faqs.map((faq) => (
        <Accordion key={faq.id} open={openIndex === faq.id} icon={<Icon open={openIndex === faq.id} animate={CUSTOM_ANIMATION} />}>
          <AccordionHeader onClick={() => handleOpen(faq.id)}>{faq.question}</AccordionHeader>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <AccordionBody>
              <Typography className="mb-2 text-xl mt-6 font-bold tracking-tight text-gray-500 dark:text-white text-center">
                {faq.answer}
              </Typography>

            </AccordionBody>
          </p>
        </Accordion>
      ))}
    </div>
  );
};

FAQComponent.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FAQComponent;

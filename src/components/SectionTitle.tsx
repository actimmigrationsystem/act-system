import React from "react";
import { Typography } from "@material-tailwind/react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <Typography
    placeholder="Typography"
    className="mb-2 text-3xl mt-6 font-bold tracking-tight text-gray-500 dark:text-white text-center"
  >
    {title}
  </Typography>
);

export default SectionTitle;

import { Typography } from "@material-tailwind/react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => (
  <Typography
    placeholder="Typography"
    className="mb-2 text-3xl mt-1 font-bold tracking-tight text-gray-500 dark:text-white text-center"
  >
    {title}
  </Typography>
);

export default SectionTitle;

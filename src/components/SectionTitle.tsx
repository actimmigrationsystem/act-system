import { Typography } from "@material-tailwind/react";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const StyledTitleContainer = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 50px;
  margin-top: -80px;
`;

const StyledUnderline = styled.div`
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  height: 2px;
  background-color: #0E59974F;
`;

const SectionTitle = ({ title, className }: SectionTitleProps) => (
  <StyledTitleContainer className={className}>
    <Typography
      placeholder="Typography"
      className="mb-2 text-3xl mt-1 font-bold tracking-tight text-gray-500 dark:text-white"
    >
      {title}
    </Typography>
    <StyledUnderline />
  </StyledTitleContainer>
);

export default SectionTitle;

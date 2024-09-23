import React from "react";
import styled from "styled-components";
import DashboardLogo from "../assets/logo.jpeg";

interface LogoProps {
  color?: string;
  companyName?: string;
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 60px;
  max-height: 60px;
  margin-right: 10px; /* Space between text and logo */
`;

const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.div<{ color?: string }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const Logo: React.FC<LogoProps> = ({
  color = "#2393cb",
  companyName = "ACT Immigration",
}) => (
  <LogoContainer>
    <LogoImg src={DashboardLogo} alt="Company Logo" />
    <LogoTextContainer>
      <CompanyName color={color}>{companyName}</CompanyName>
      <CompanyName color={color}>& Labour Consultants</CompanyName>
    </LogoTextContainer>
  </LogoContainer>
);

export default Logo;

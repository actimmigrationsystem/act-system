import React from "react";
import styled from "styled-components";
import DashboardLogo from "../assets/dashboard-logo.png";

interface LogoProps {
  color?: string;
  companyName?: string;
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 30px;
  max-height: 30px;
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
  companyName = "",
}) => (
  <LogoContainer>
    <LogoImg src={DashboardLogo} alt="Dashboard Logo" />
    <LogoTextContainer>
      <CompanyName color={color}>{companyName}</CompanyName>
    </LogoTextContainer>
  </LogoContainer>
);

export default Logo;

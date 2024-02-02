import React from 'react';
import styled from 'styled-components';
import ACTLOGO from '../assets/logo.jpeg';

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

const CompanyName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Logo = () => (
  <LogoContainer>
    <LogoImg src={ACTLOGO} alt="Company Logo" />
    <LogoTextContainer>
      <CompanyName>ACT Immigration</CompanyName>
      <CompanyName>& Labour Consultants</CompanyName>
    </LogoTextContainer>
  </LogoContainer>
);

export default Logo;

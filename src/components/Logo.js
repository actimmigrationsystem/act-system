import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  color: ${(props) => props.color};
`;

const Logo = ({ color, companyName }) => (
  <LogoContainer>
    <LogoImg src={ACTLOGO} alt="Company Logo" />
    <LogoTextContainer>
      <CompanyName color={color}>{companyName}</CompanyName>
      <CompanyName color={color}>& Labour Consultants</CompanyName>
    </LogoTextContainer>
  </LogoContainer>
);

Logo.propTypes = {
  color: PropTypes.string,
  companyName: PropTypes.string, // Prop for the company name
};

Logo.defaultProps = {
  color: '#2393cb',
  companyName: 'ACT Immigration', // Default company name
};

export default Logo;

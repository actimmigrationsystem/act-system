import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionContainer = styled.div`
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  
`;

const SectionContainer = ({
  children, height, marginTop, marginBottom,
}) => (
  <StyledSectionContainer
    height={height}
    marginTop={marginTop}
    marginBottom={marginBottom}
  >
    {children}
  </StyledSectionContainer>
);

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string.isRequired,
};

SectionContainer.defaultProps = {
  marginTop: '0',
};

export default SectionContainer;

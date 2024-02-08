import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledSectionContainerProps {
  height: string;
  marginTop: string;
  marginBottom: string;
}

const StyledSectionContainer = styled.div<StyledSectionContainerProps>`
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

interface SectionContainerProps extends StyledSectionContainerProps {
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  height,
  marginTop = "0",
  marginBottom,
}) => (
  <StyledSectionContainer
    height={height}
    marginTop={marginTop}
    marginBottom={marginBottom}
  >
    {children}
  </StyledSectionContainer>
);

export default SectionContainer;

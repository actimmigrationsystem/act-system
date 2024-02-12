import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledSectionContainerProps {
  height: string;
  margintop: string;
  marginbottom: string;
}

const StyledSectionContainer = styled.div<StyledSectionContainerProps>`
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
`;

interface SectionContainerProps extends StyledSectionContainerProps {
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  height,
  margintop = "0",
  marginbottom,
}) => (
  <StyledSectionContainer
    height={height}
    margintop={margintop}
    marginbottom={marginbottom}
  >
    {children}
  </StyledSectionContainer>
);

export default SectionContainer;

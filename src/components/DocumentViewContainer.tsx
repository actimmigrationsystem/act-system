import { ReactNode } from "react";
import styled from "styled-components";

const ContainerLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
  width: 300px;
`;

interface DocumentViewContainerProps {
  children: ReactNode;
}

const DocumentViewContainer = ({ children }: DocumentViewContainerProps) => (
  <ContainerLayout className="min-h-screen">{children}</ContainerLayout>
);

export default DocumentViewContainer;

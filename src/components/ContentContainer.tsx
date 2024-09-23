import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => (
  <div className="container justify-center items-center gap-6 min-h-screen mt-4 overflow-x-hidden">
    {" "}
    {children}
  </div>
);

export default ContentContainer;

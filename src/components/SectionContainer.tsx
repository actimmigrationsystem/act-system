import React from "react";
import PropTypes from "prop-types";

interface SectionContainerProps {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
}

const SectionContainer = ({
  children,
  marginTop = "3rem",
  marginBottom = "3rem",
}: SectionContainerProps) => {
  return (
    <div className="container mx-auto" style={{ marginTop, marginBottom }}>
      {children}
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default SectionContainer;

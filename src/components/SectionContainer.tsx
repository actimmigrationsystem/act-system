import React from "react";
import PropTypes from "prop-types";

interface SectionContainerProps {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  className?: string; // Add className to the props interface
}

const SectionContainer = ({
  children,
  marginTop = "3rem",
  marginBottom = "1rem", // Reduce the default bottom margin
  className = "", // Default to an empty string if no className is provided
}: SectionContainerProps) => {
  return (
    <div className={`container mx-auto ${className}`} style={{ marginTop, marginBottom }}>
      {children}
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  className: PropTypes.string, // Add className to propTypes
};

export default SectionContainer;
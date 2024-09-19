import React from "react";
import PropTypes from "prop-types";

interface ArticleSection {
  subtitle: string;
  subtext?: string;
  paragraphs: string[];
}

interface ArticleProps {
  title: string;
  tagline?: string;
  sections: ArticleSection[];
  className?: string;
}

const BlogComponent = ({
  title,
  tagline,
  sections,
  className,
}: ArticleProps) => {
  return (
    <article className={`max-w-4xl mx-auto p-8 ${className}`}>
      <h1 className="mx-0 mt-0 mb-4 text-5xl font-bold text-gray-800 lg:mt-0 md:mt-32">
        {title}
      </h1>
      {tagline && <p className="text-lg mb-4 text-gray-600">{tagline}</p>}
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="mx-0 mt-0 mb-4 text-xl font-bold text-gray-800 lg:mt-0 md:mt-32">
            {section.subtitle}
          </h2>
          {section.subtext && <p>{section.subtext}</p>}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p className="mx-0 mt-0 mb-4" key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
    </article>
  );
};

BlogComponent.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      subtext: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default BlogComponent;

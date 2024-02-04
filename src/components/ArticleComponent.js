/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function ArticleComponent({
  heading, lead, subheading, subheading2, paragraph,
  paragraph2,
}) {
  return (
    <article className="format lg:format-lg">
      <h1 className="text-2xl">{heading}</h1>
      <p className="lead">{lead}</p>
      <h2 className="text-1xl">{subheading}</h2>
      <p>{paragraph}</p>
      <h2 className="text-1xl">{subheading2}</h2>
      <p>{paragraph2}</p>
    </article>
  );
}

ArticleComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  subheading2: PropTypes.string,
  paragraph: PropTypes.string.isRequired,
  paragraph2: PropTypes.string,
};

ArticleComponent.defaultProps = {
  subheading2: '',
  paragraph2: '',
};

export default ArticleComponent;

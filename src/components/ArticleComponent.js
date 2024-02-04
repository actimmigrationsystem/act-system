/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function ArticleComponent({
  heading, lead, subheading, subheading2, paragraph,
  paragraph2, imageSrc,
}) {
  return (
    <div className="p-2">
      <article className="">
        {imageSrc && <img src={imageSrc} alt="Article" className="w-20 object-cover object-top rounded-md mr-4" />}
        <div>
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-gray-600 mb-6">{lead}</p>
          <h2 className="text-2xl font-bold mb-2">{subheading}</h2>
          <p className="text-lg text-gray-700 mb-4">{paragraph}</p>
          {subheading2 && <h2 className="text-2xl font-bold mb-2">{subheading2}</h2>}
          {paragraph2 && <p className="text-lg text-gray-700 mb-4">{paragraph2}</p>}
        </div>
      </article>
    </div>
  );
}

ArticleComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  subheading2: PropTypes.string,
  paragraph: PropTypes.string.isRequired,
  paragraph2: PropTypes.string,
  imageSrc: PropTypes.string,
};

ArticleComponent.defaultProps = {
  subheading2: '',
  paragraph2: '',
  imageSrc: '',
};

export default ArticleComponent;

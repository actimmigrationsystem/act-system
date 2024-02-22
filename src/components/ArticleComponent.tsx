/* eslint-disable max-len */
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

interface ArticleComponentProps {
  heading: string;
  lead: string;
  subheading: string;
  subheading2: string;
  paragraph: string;
  paragraph2: string;
  imageSrc: string;
}

const ArticleComponent = ({
  heading,
  lead,
  subheading,
  subheading2,
  paragraph,
  paragraph2,
  imageSrc,
}: ArticleComponentProps) => {
  return (
    <div className="p-2 mx-auto">
      <article className="">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Article"
            className="w-20 object-cover object-top rounded-md mr-4"
          />
        )}
        <div>
          <Typography
            variant="h2"
            className="text-2xl font-bold mb-4"
            placeholder=""
          >
            {heading}
          </Typography>
          <Typography
            placeholder=""
            variant="h3"
            className="text-lg text-gray-600 mb-6"
          >
            {lead}
          </Typography>
           <Typography
            placeholder=""
            variant="h2" className="text-2xl font-bold mb-2">{subheading}</Typography>
           <Typography
            placeholder=""
            variant="h5" className="text-lg text-gray-700 mb-4">{paragraph}</Typography>
          {subheading2 && (
             <Typography
            placeholder=""
            variant="h3" className="text-2xl font-bold mb-4">{subheading2}</Typography>
          )}
          {paragraph2 && (
            <p className="text-lg text-gray-700 mb-4">{paragraph2}</p>
          )}
        </div>
      </article>
    </div>
  );
};

ArticleComponent.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  subheading: PropTypes.string,
  subheading2: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph2: PropTypes.string,
  imageSrc: PropTypes.string,
};
export default ArticleComponent;

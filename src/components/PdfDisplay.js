/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { Carousel } from 'flowbite-react';
import PdfFile1 from '../assets/documents/immigration.pdf';
import PdfFile2 from '../assets/documents/immigration-regulations.pdf';
import PdfFile3 from '../assets/documents/medical-report.pdf';
import PdfFile4 from '../assets/documents/immigration-act-13-of-2002-as-amended.pdf';
import PdfFile5 from '../assets/documents/application-for-trp.pdf';
import PdfFile6 from '../assets/documents/application-for-renewal-of-permit.pdf';
import PdfFile7 from '../assets/documents/application-for-permanent-residence-permit.pdf';

const PdfDisplay = () => {
  const docs = [
    { uri: PdfFile1, name: 'immigration.pdf' },
    { uri: PdfFile2, name: 'immigration-regulations.pdf' },
    { uri: PdfFile3, name: 'medical-report.pdf' },
    { uri: PdfFile4, name: 'immigration-act.pdf' },
    { uri: PdfFile5, name: 'application-for-trp.pdf' },
    { uri: PdfFile6, name: 'application-for-renewal-of-permit.pdf' },
    { uri: PdfFile7, name: 'aapplication-for-permanent-residence-permit.pdf' },
  ];

  // Split the docs array into chunks of 3
  const chunks = [];
  for (let i = 0; i < docs.length; i += 3) {
    chunks.push(docs.slice(i, i + 3));
  }

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {chunks.map((chunk, index) => (
          <div key={index} className="flex justify-around">
            {chunk.map((doc) => (
              <div key={doc.name} className="flex flex-col items-center">
                <DocViewer documents={[doc]} pluginRenderers={DocViewerRenderers} />
                <a href={doc.uri} download className="mt-2">Download</a>
                <p className="mt-2">{doc.name}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PdfDisplay;

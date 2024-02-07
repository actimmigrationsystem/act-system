/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
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

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {docs.map((doc) => (
          <DocViewer key={doc.name} documents={[doc]} pluginRenderers={DocViewerRenderers} />
        ))}
      </div>

    </div>

  );
};

export default PdfDisplay;

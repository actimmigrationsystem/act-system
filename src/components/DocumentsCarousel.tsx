import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import "react-responsive-carousel/lib/styles/carousel.min.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const carouselData = [
  [
    {
      pdfSrc: "/documents/medical-report.pdf",
      text: "Medical Report",
    },
  ],
  [
    {
      pdfSrc: "/documents/medical-report.pdf",
      text: "Medical Report",
    },

  ],
];

const DocumentContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin: 0 10px;
  overflow: auto;
  margin-top: 10px;
`;

const DocumentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CarouselContainer = styled.div`
  width: 30%;
  height: 30%;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 10px;
  height: 100%;
  width: 100%;
`;
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  div {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1em;
    border-radius: 1em;

    p {
      max-width: 100%;
      font-size: 2em;
      font-weight: bold;
      line-height: 1.5;
      color: white;
    }
  }
`;

const DocumentsCarousel = () => {
  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    console.log(`Successfully loaded document with ${numPages} pages.`);
  };

  return (
    <CarouselContainer>
      <Carousel autoPlay infiniteLoop>
        {carouselData.map((items, id) => (
          <Container key={id}>
            {items.map((item, id) => (
              <DocumentContainer key={id}>
                <DocumentWrapper>
                  <Document
                    file={item.pdfSrc}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={1} />
                  </Document>
                  <TextOverlay>
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </TextOverlay>
                </DocumentWrapper>
              </DocumentContainer>
            ))}
          </Container>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default DocumentsCarousel;

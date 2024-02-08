import styled from "styled-components";
import {
  Card
} from "@material-tailwind/react";
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
    {
      pdfSrc: "/documents/medical-report.pdf",
      text: "Medical Report",
    },
    {
      pdfSrc: "/documents/medical-report.pdf",
      text: "Medical Report",
    },
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
  height: 50vh;
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
  width: 90%;
  height: 70%;
  margin-bottom: 10px;
  margin-top: -50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 6px;
  width: 100%;
  height: 100%;
  margin: 0 10px;
  overflow: auto;
  margin-top: 10px;
`;

const SectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const DocumentsCarousel = () => {
  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    console.log(`Successfully loaded document with ${numPages} pages.`);
  };

  return (
    <CarouselContainer>
      <Carousel autoPlay infiniteLoop>
        {carouselData.map((items, id) => (
          <SectionContainer key={id}>
            <Container>
              {items.map((item, id) => (
                <StyledCard key={id}>
                  <DocumentContainer>
                    <DocumentWrapper>
                      <Card placeholder="Card">
                        <Document
                          file={item.pdfSrc}
                          onLoadSuccess={onDocumentLoadSuccess}
                        >
                          <Page pageNumber={1} />
                        </Document>
                      </Card>
                      <TextOverlay>
                        <div>
                          <p>{item.text}</p>
                        </div>
                      </TextOverlay>
                    </DocumentWrapper>
                  </DocumentContainer>
                </StyledCard>
              ))}
            </Container>
          </SectionContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default DocumentsCarousel;

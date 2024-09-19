import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Card, Typography, Button } from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import "react-responsive-carousel/lib/styles/carousel.min.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
const carouselData = [
  [
    {
      pdfSrc: "/documents/medical-report.pdf",
      text: "Medical Report",
    },
    {
      pdfSrc: "/documents/radiological-report.pdf",
      text: "Radiological Report",
    },
    {
      pdfSrc: "/documents/immigration-act.pdf",
      text: "Immigration Act",
    },
  ],
  [
    {
      pdfSrc: "/documents/immigration-regulations.pdf",
      text: "Immigration Regulations",
    },
    {
      pdfSrc: "/documents/application-for-trp.pdf",
      text: "TRP Application",
    },
    {
      pdfSrc: "/documents/application-for-renewal-of-permit.pdf",
      text: "Renewal of Permit",
    },
    {
      pdfSrc: "/documents/application-for-permanent-residence-permit.pdf",
      text: "Permanent Residence Permit",
    },
  ],
];

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
  width: 50%;
  height: 70%;
  margin-bottom: 10px;
  margin-top: -50px;

  @media (max-width: 768px) {
    width: 100%;
  }
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

const SectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const DocumentsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<Array<number>>(
    Array(carouselData.flat().length).fill(0)
  );
  const [pageNumber, setPageNumber] = useState<Array<number>>(
    Array(carouselData.flat().length).fill(1)
  );

  const onDocumentLoadSuccess =
    (index: number) =>
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages((prevNumPages) => {
        const newNumPages = [...prevNumPages];
        newNumPages[index] = numPages;
        return newNumPages;
      });
      setPageNumber((prevPageNumber) => {
        const newPageNumber = [...prevPageNumber];
        newPageNumber[index] = 1;
        return newPageNumber;
      });
    };

  const changePage = (index: number, offset: number) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = [...prevPageNumber];
      newPageNumber[index] += offset;
      return newPageNumber;
    });
  };

  const previousPage = (index: number) => {
    changePage(index, -1);
  };

  const nextPage = (index: number) => {
    changePage(index, 1);
  };

   const downloadPdf = (pdfSrc: string) => {
     window.open(pdfSrc, "_blank");
   };

  return (
    <>
      <CarouselContainer>
        <Carousel>
          {carouselData.flat().map((item, index) => (
            <SectionContainer key={index}>
              <Container>
                <StyledCard key={index}>
                  <DocumentContainer ref={containerRef}>
                    <DocumentWrapper>
                      <Card placeholder="Card"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Document
                          file={item.pdfSrc}
                          onLoadSuccess={onDocumentLoadSuccess(index)}
                        >
                          <Page
                            pageNumber={pageNumber[index]}
                            width={
                              containerRef.current
                                ? containerRef.current.clientWidth
                                : 0
                            }
                          />
                        </Document>
                      </Card>
                      <TextOverlay>
                        <div>
                          <Typography
                            variant="h4"
                            placeholder="typography"
                            className="mb-2 mt-2 font-bold tracking-tight text-white dark:text-white text-center"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                          >
                            {item.text}
                          </Typography>
                        </div>
                      </TextOverlay>
                    </DocumentWrapper>
                  </DocumentContainer>
                  <div>
                    <Button
                      type="button"
                      placeholder={"button"}
                      disabled={pageNumber[index] <= 1}
                      onClick={() => previousPage(index)}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      <FiArrowLeft />
                    </Button>
                    <Button
                      type="button"
                      placeholder={"button"}
                      disabled={pageNumber[index] >= numPages[index]}
                      onClick={() => nextPage(index)}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      <FiArrowRight />
                    </Button>
                    <Button
                      type="button"
                      placeholder={"button"}
                      onClick={() => downloadPdf(item.pdfSrc)}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      Download
                    </Button>
                  </div>
                </StyledCard>
              </Container>
            </SectionContainer>
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default DocumentsCarousel;
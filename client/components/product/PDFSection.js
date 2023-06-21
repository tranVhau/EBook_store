import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Spinner from "../ui/loading/Spinner";

const PDFSection = React.memo(({ url }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={{
        url,
      }}
      loading={
        <div className="flex justify-center place-items-center w-full h-screen">
          <Spinner />
        </div>
      }
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
});

PDFSection.displayName = "PDFSection";

export default PDFSection;

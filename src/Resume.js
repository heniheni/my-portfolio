import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './Resume.css'
import Fade from 'react-reveal/Fade';

export default function Resume(props) {
  //   const [numPages] = useState(null);
  const [pageNumber] = useState(1); //setting 1 to show fisrt page
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { pdf } = props;
  return (
    <div className="Resume" id="Resume">
      <Fade bottom>
      <div className="subHeadingSet">
          <h1 className="resume_subHeadText">Resume</h1>
      </div>
      </Fade>
      
      <Document
        className="setResume"
        file={pdf}
        target="_blank"
        options={{ workerSrc: "/pdf.worker.js" }}
      // onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

    </div>
  );
}

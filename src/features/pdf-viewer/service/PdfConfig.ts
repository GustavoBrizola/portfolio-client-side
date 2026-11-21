import { pdfjs } from 'react-pdf';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@6.3.289/build/pdf.worker.min.mjs`;

export const pdfViewerConfig = {
    defaultWidth: 600,
    mobileWidthRatio: 0.9,
    breakpoint: 800,
};

import { pdfjs } from 'react-pdf';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const pdfViewerConfig = {
    defaultWidth: 600,
    mobileWidthRatio: 0.9,
    breakpoint: 800,
};

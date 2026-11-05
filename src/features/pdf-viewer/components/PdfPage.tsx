import React from 'react';
import { Page } from 'react-pdf';
import { pdfViewerConfig } from '../service/PdfConfig';

interface PdfPageProps {
    pageNumber: number;
    textSelect: boolean;
}

export const PdfPage: React.FC<PdfPageProps> = ({ pageNumber, textSelect }) => {
    const width = window.innerWidth > pdfViewerConfig.breakpoint 
        ? pdfViewerConfig.defaultWidth 
        : window.innerWidth * pdfViewerConfig.mobileWidthRatio;

    return (
        <Page 
            pageNumber={pageNumber} 
            renderTextLayer={textSelect}
            renderAnnotationLayer={false}
            width={width}
        />
    );
};

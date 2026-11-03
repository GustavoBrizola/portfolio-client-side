import React from 'react';
import { Document } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { usePdfViewer } from './hooks/usePdfViewer';
import { PdfPage } from './components/PdfPage';

interface PdfViewerProps {
    file: string | File;
    pages?: number[];
    textSelect?: boolean;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file, pages, textSelect = false }) => {
    const { onDocumentLoadSuccess, pagesToRender } = usePdfViewer(pages);

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '20px 0', 
            width: '100%' 
        }}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {pagesToRender.map((pageNumber) => (
                    <PdfPage 
                        key={`page_${pageNumber}`}
                        pageNumber={pageNumber} 
                        textSelect={textSelect}
                    />
                ))}
            </Document>
        </div>
    );
};

export default PdfViewer;

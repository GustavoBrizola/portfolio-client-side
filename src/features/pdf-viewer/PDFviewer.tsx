import { Suspense } from 'react';
import { Document } from 'react-pdf';
import { usePdfViewer } from './hooks/usePdfViewer';
import { PdfPage } from './components/PdfPage';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import styles from './PDFviewer.module.css'

interface PdfViewerProps {
    file: string | File;
    pages?: number[];
    textSelect?: boolean;
}

// The execution of microtasks on this page was reordered to avoid unsafe execution.
// https://firefox-source-docs.mozilla.org/dom/promise/safe-promise-resolve.html?utm_source=devtools&utm_medium=firefox-console-errors&utm_campaign=default
const PdfViewer: React.FC<PdfViewerProps> = ({ file, pages, textSelect = false }) => {
    const { onDocumentLoadSuccess, pagesToRender } = usePdfViewer(pages);

    return (
        <div className={styles.pdfViewer}>
            <Suspense>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {pagesToRender.map((pageNumber) => (
                        <PdfPage 
                        key={`page_${pageNumber}`}
                        pageNumber={pageNumber} 
                        textSelect={textSelect}
                        />
                    ))}
                </Document>
            </Suspense>
        </div>
    );
};

export default PdfViewer;

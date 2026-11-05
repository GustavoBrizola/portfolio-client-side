import { useState } from 'react';

export function usePdfViewer(pages?: number[]) {
    const [numPages, setNumPages] = useState<number | null>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const pagesToRender = pages || (numPages ? Array.from({ length: numPages }, (_, i) => i + 1) : []);

    return {
        numPages,
        onDocumentLoadSuccess,
        pagesToRender,
    };
}

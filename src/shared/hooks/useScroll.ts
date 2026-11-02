import { useEffect } from 'react';

const useScroll = (declaration: boolean) => {
    useEffect(() => {
        const previousOverflowY = document.body.style.overflowY;
        if (declaration) {
            document.body.style.overflowY = 'hidden';
        }
        return () => {
            document.body.style.overflowY = previousOverflowY;
        };
    }, [declaration]);
};

export default useScroll;
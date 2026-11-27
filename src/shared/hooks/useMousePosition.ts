import { useState, useEffect } from "react";

// Get mouse X & Y coordinates
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event: MouseEvent): void => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;
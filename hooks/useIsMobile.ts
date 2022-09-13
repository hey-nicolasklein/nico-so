import React, { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth ?? 0);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth ?? 0);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleWindowSizeChange);
            return () => {
                window.removeEventListener("resize", handleWindowSizeChange);
            };
        }
    }, []);

    return width <= 768;
};

export default useCheckMobileScreen;

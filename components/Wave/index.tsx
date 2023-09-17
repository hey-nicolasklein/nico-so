import { useGesture } from "@use-gesture/react";
import React, { ReactNode, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const Wavy: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [styles, api] = useSpring(() => ({
        x: 0,
        y: 0,
        transform: "rotate(30deg)",
        config: {
            mass: 2,
            tension: 100,
            friction: 10,
        },
    }));

    const [isHovered, setHovered] = useState(false);

    const bind: any = useGesture({
        onHover: () => {
            setHovered(true);
            api.start({
                to: [
                    {
                        transform: "rotate(0deg)",
                    },
                    {
                        transform: "rotate(30deg)",
                    },
                ],
            });
        },
        onMouseLeave: () => {
            setHovered(false);
            api.start({
                transform: "rotate(30deg)",
            });
        },
    });

    return (
        <animated.div style={styles} {...bind()}>
            {children}
        </animated.div>
    );
};

export default Wavy;

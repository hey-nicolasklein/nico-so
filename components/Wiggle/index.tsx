import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ReactNode, useEffect, useState } from "react";

const Wiggle = (props: {
    children: ReactNode;
    factor?: number;
}): JSX.Element => {
    const [isWiggling, setWiggling] = useState(false);

    const [styles, api] = useSpring(() => ({
        x: 0,
        y: 0,
        transform: "rotate(0deg)",
        config: { mass: 2, tension: 300, friction: 10 },
    }));

    // Use Gesture Hook to keep track of mouse movement velocity
    const bind: any = useGesture({
        onMove: ({ velocity, direction }) => {
            api.start({ transform: `rotate(${velocity[0]}deg)` });
        },
    });

    return (
        <animated.div {...bind()} style={styles}>
            {props.children}
        </animated.div>
    );
};

export default Wiggle;

import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ReactNode, useEffect, useState, useRef } from "react";

interface Props {
    children: ReactNode;
    factor?: number;
}

const Wobbly: React.FC<Props> = (props: Props): React.ReactElement => {
    const modifier = props.factor ?? 1;

    // Use Spring Hook to make Card "wiggly"
    const [styles, api] = useSpring(() => ({
        x: 0,
        y: 0,
        transform: "rotate(0deg)",
        config: { mass: 2, tension: 300, friction: 5 * modifier },
    }));

    const [isHovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const animationFrameRef = useRef<number>();
    const timeRef = useRef(0);

    // Detect if device is mobile/touch
    useEffect(() => {
        const checkMobile = () => {
            const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isMobileWidth = window.innerWidth < 1024;
            setIsMobile(hasTouchScreen && isMobileWidth);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Automatic wobble animation for mobile
    useEffect(() => {
        if (!isMobile) return;

        const animate = () => {
            timeRef.current += 0.016; // ~60fps

            // Create natural wobble using sine waves with different frequencies
            const x = Math.sin(timeRef.current * 1.5) * 3 + Math.sin(timeRef.current * 0.8) * 2;
            const y = Math.cos(timeRef.current * 1.2) * 3 + Math.cos(timeRef.current * 0.6) * 2;
            const rotation = Math.sin(timeRef.current * 0.9) * 1.5;

            api.start({
                x,
                y,
                transform: `rotate(${rotation}deg)`,
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isMobile, api]);

    useEffect(() => {
        if (!isHovered || isMobile) return;

        const timeout = setTimeout(() => {
            setHovered(false);
            api.start({ transform: "rotate(0deg)" });
        }, 150);

        api.start({ transform: "rotate(-1deg" });

        return () => clearTimeout(timeout);
    }, [isHovered, api, modifier, isMobile]);

    // Use Gesture Hook to keep track of mouse movement velocity (desktop only)
    const bind: any = useGesture({
        onHover: () => {
            if (!isMobile) setHovered(true);
        },
        onMouseLeave: () => {
            if (!isMobile) setHovered(false);
        },
        onMove: ({ velocity, direction }) => {
            if (!isMobile) {
                api.start({
                    x: velocity[0] * direction[0],
                    y: velocity[1] * direction[1],
                });
            }
        },
    });

    return (
        <animated.div
            {...bind()}
            style={styles}
            onMouseLeave={() => {
                if (!isMobile) api.start({ x: 0, y: 0 });
            }}
        >
            {props.children}
        </animated.div>
    );
};

export default Wobbly;

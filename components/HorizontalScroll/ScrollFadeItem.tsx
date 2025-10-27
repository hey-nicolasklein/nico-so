import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollFadeItemProps {
    children: ReactNode;
    scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollFadeItem: React.FC<ScrollFadeItemProps> = ({
    children,
    scrollContainerRef,
}) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(1);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateItemVisibility = () => {
            if (!itemRef.current || !scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            const item = itemRef.current;

            const containerRect = container.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();

            // Calculate the center of the container
            const containerCenter = containerRect.left + containerRect.width / 2;
            const itemCenter = itemRect.left + itemRect.width / 2;

            // Calculate distance from container center
            const distanceFromCenter = Math.abs(itemCenter - containerCenter);
            const maxDistance = containerRect.width / 2;

            // Calculate visibility ratio (1 at center, 0 at edges)
            const visibilityRatio = Math.max(
                0,
                1 - distanceFromCenter / maxDistance
            );

            // Apply easing for smoother transitions
            const easedRatio = Math.pow(visibilityRatio, 0.6);

            // Calculate opacity (min 0.3, max 1)
            const newOpacity = 0.3 + easedRatio * 0.7;

            // Calculate scale (min 0.85, max 1)
            const newScale = 0.85 + easedRatio * 0.15;

            setOpacity(newOpacity);
            setScale(newScale);
        };

        const container = scrollContainerRef.current;
        if (!container) return;

        // Initial calculation
        updateItemVisibility();

        // Update on scroll
        container.addEventListener("scroll", updateItemVisibility);
        window.addEventListener("resize", updateItemVisibility);

        return () => {
            container.removeEventListener("scroll", updateItemVisibility);
            window.removeEventListener("resize", updateItemVisibility);
        };
    }, [scrollContainerRef]);

    return (
        <div
            ref={itemRef}
            style={{
                opacity,
                transform: `scale(${scale})`,
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            }}
        >
            {children}
        </div>
    );
};

export default ScrollFadeItem;

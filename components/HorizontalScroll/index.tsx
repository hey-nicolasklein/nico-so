import { useRef, useState, useEffect, ReactNode, Children } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { classNames } from "../../lib/tailwind";
import styles from "../../styles/components/HorizontalScroll.module.css";
import useCheckMobileScreen from "../../hooks/useIsMobile";
import ScrollFadeItem from "./ScrollFadeItem";

interface HorizontalScrollProps {
    children: ReactNode;
    className?: string;
    itemClassName?: string;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
    children,
    className = "",
    itemClassName = "",
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);
    const isMobile = useCheckMobileScreen();

    const checkScrollButtons = () => {
        if (!scrollContainerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

        // Show left button if scrolled right
        setShowLeftButton(scrollLeft > 0);

        // Show right button if not at the end
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    };

    useEffect(() => {
        checkScrollButtons();

        const handleResize = () => checkScrollButtons();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [children]);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;

        let scrollAmount;
        
        if (isMobile) {
            // On mobile, scroll exactly one item width
            const firstChild = scrollContainerRef.current.querySelector('.flex')?.firstElementChild as HTMLElement;
            if (firstChild) {
                // Item width + gap (gap-8 = 2rem = 32px)
                const gapSize = 32;
                scrollAmount = firstChild.offsetWidth + gapSize;
            } else {
                // Fallback if child not found
                scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            }
        } else {
            // On desktop, scroll 80% of viewport width
            scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        }

        const targetScroll = direction === "left"
            ? scrollContainerRef.current.scrollLeft - scrollAmount
            : scrollContainerRef.current.scrollLeft + scrollAmount;

        scrollContainerRef.current.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            {/* Scroll Indicators (shadow fallback) */}
            <div className={classNames(
                styles.indicator,
                styles.indicatorLeft,
                showLeftButton ? styles.indicatorVisible : ""
            )} />
            <div className={classNames(
                styles.indicator,
                styles.indicatorRight,
                showRightButton ? styles.indicatorVisible : ""
            )} />

            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className={classNames(
                    "absolute -left-6 top-1/2 z-10 -translate-y-1/2 transform",
                    "h-12 w-12 rounded-full bg-white/90 dark:bg-black/90",
                    "flex items-center justify-center",
                    "shadow-lg backdrop-blur-sm",
                    "transition-all duration-300 ease-in-out",
                    "hover:bg-white dark:hover:bg-black hover:scale-110",
                    showLeftButton ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                )}
                aria-label="Scroll left"
            >
                <BsChevronLeft className="text-black dark:text-white" size={24} />
            </button>

            {/* Scrollable Container with Mask */}
            <div
                ref={scrollContainerRef}
                onScroll={checkScrollButtons}
                className={classNames(
                    styles.scrollContainer,
                    showLeftButton && showRightButton ? styles.fadeBoth :
                    showRightButton ? styles.fadeRight :
                    showLeftButton ? styles.fadeLeft : "",
                    "horizontal-scroller overflow-x-auto overflow-y-visible",
                    "scrollbar-hide scroll-smooth",
                    "py-4",
                    className
                )}
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <div className={classNames("flex gap-8 px-8", itemClassName)}>
                    {Children.map(children, (child, index) => (
                        <ScrollFadeItem
                            key={index}
                            scrollContainerRef={scrollContainerRef}
                        >
                            {child}
                        </ScrollFadeItem>
                    ))}
                </div>
            </div>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className={classNames(
                    "absolute -right-6 top-1/2 z-10 -translate-y-1/2 transform",
                    "h-12 w-12 rounded-full bg-white/90 dark:bg-black/90",
                    "flex items-center justify-center",
                    "shadow-lg backdrop-blur-sm",
                    "transition-all duration-300 ease-in-out",
                    "hover:bg-white dark:hover:bg-black hover:scale-110",
                    showRightButton ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                )}
                aria-label="Scroll right"
            >
                <BsChevronRight className="text-black dark:text-white" size={24} />
            </button>
        </div>
    );
};

export default HorizontalScroll;

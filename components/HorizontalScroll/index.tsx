import { useRef, useState, useEffect, ReactNode } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { classNames } from "../../lib/tailwind";

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

        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        const targetScroll = direction === "left"
            ? scrollContainerRef.current.scrollLeft - scrollAmount
            : scrollContainerRef.current.scrollLeft + scrollAmount;

        scrollContainerRef.current.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative group">
            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className={classNames(
                    "absolute left-0 top-1/2 z-10 -translate-y-1/2 transform",
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

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                onScroll={checkScrollButtons}
                className={classNames(
                    "horizontal-scroller overflow-x-auto overflow-y-hidden",
                    "scrollbar-hide scroll-smooth",
                    className
                )}
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <div className={classNames("flex gap-4", itemClassName)}>
                    {children}
                </div>
            </div>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className={classNames(
                    "absolute right-0 top-1/2 z-10 -translate-y-1/2 transform",
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

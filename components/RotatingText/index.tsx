import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useEffect, useState } from "react";

interface Props {
    /** Words to cycle through, in order. */
    words: string[];
    /** Time each word stays visible, in milliseconds. */
    interval?: number;
    className?: string;
}

/**
 * Cycles through a list of words, animating each in and out.
 * Inspired by React Bits' "Rotating Text" (https://reactbits.dev),
 * reimplemented on framer-motion to reuse the site's existing dependency.
 */
const RotatingText: React.FC<Props> = ({
    words,
    interval = 2500,
    className,
}: Props): ReactElement => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (words.length <= 1) return;
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(id);
    }, [words.length, interval]);

    return (
        <span
            className={`relative inline-flex overflow-hidden align-bottom ${
                className ?? ""
            }`}
        >
            {/* Invisible sizer keeps layout stable at the widest word. */}
            <span aria-hidden="true" className="invisible whitespace-nowrap">
                {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
            </span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    className="absolute left-0 top-0 whitespace-nowrap"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 18, stiffness: 220 }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default RotatingText;

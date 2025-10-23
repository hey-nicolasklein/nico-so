import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MediaType from "../../interfaces/IMediaType";
import { PortfolioItem } from "../../lib/strapi";
import BoopedItem from "../BoopedItem";
import Heading, { HeadingDescription } from "../Heading";
import Link from "../Link";

const fadeInVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 },
};

interface RowArtProps {
    portfolioItems: PortfolioItem[];
    heading?: string;
    description?: string;
}

/**
 * Converts string type from Strapi to MediaType enum
 */
const stringToMediaType = (type: string): MediaType => {
    switch (type) {
        case 'Artwork':
            return MediaType.Artwork;
        case 'Music':
            return MediaType.Music;
        case 'Movie':
            return MediaType.Movie;
        default:
            return MediaType.Other;
    }
};

const RowArt: React.FC<RowArtProps> = ({
    portfolioItems,
    heading = "Things I love",
    description
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInVariants}
        >
            <div className="flex items-center justify-between">
                <Heading>{heading}</Heading>
            </div>
            {description && (
                <HeadingDescription className="opacity-1 dark:font-white mt-3 font-black">
                    {description}
                </HeadingDescription>
            )}
            {!description && (
                <HeadingDescription className="opacity-1 dark:font-white mt-3 font-black">
                    My personal{" "}
                    <Link href="https://de.wikipedia.org/wiki/Wunderkammer">
                        <i>cabinet of curiosities</i>
                    </Link>{" "}
                    with both digital and physical items in it.
                </HeadingDescription>
            )}
            <div
                ref={ref}
                className=" mt-8 grid grid-rows-3 content-between items-center justify-center gap-4 sm:grid-cols-3 sm:grid-rows-1"
            >
                {portfolioItems.map((item) => (
                    <BoopedItem
                        key={item.id}
                        href={item.imageUrl}
                        title={item.title}
                        subtitle={item.subtitle || ""}
                        createdWith={item.createdWith || ""}
                        source={item.externalLink || ""}
                        type={stringToMediaType(item.type)}
                    />
                ))}
            </div>
            <div className=" h-12 w-full bg-transparent"></div>
        </motion.div>
    );
};

export default RowArt;

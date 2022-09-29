import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MediaType from "../../interfaces/IMediaType";
import BoopedItem from "../BoopedItem";
import Heading, { HeadingDescription } from "../Heading";
import Link from "../Link";

const fadeInVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 },
};

const RowArt: React.FC = () => {
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
                <Heading>Things I love</Heading>
            </div>
            <HeadingDescription className="opacity-1 mt-3">
                My personal{" "}
                <Link href="https://de.wikipedia.org/wiki/Wunderkammer">
                    <i>cabinet of curiosities</i>
                </Link>{" "}
                with both digital and physical items in it.
            </HeadingDescription>
            <div
                ref={ref}
                className=" mt-8 grid grid-rows-3 content-between items-center justify-center gap-4 sm:grid-cols-3 sm:grid-rows-1"
            >
                <BoopedItem
                    href="/assets/Day91.png"
                    title="Day 91"
                    subtitle="Made during my 100days of art challenge."
                    createdWith="Blender3D"
                    source="https://www.instagram.com/p/CPyES_kBhVQ/"
                    type={MediaType.Artwork}
                />
                <BoopedItem
                    href="/assets/Day88.png"
                    title="Day 88"
                    subtitle="Made during my 100days of art challenge."
                    createdWith="Blender3D"
                    source="https://www.instagram.com/p/CPK9v2VhphV/"
                    type={MediaType.Artwork}
                />
                <BoopedItem
                    href="/assets/drake.jpg"
                    title="Nothing was the same"
                    subtitle="One of my favorite records of all time. Drake at his peak."
                    createdWith="Music"
                    source="https://www.instagram.com/p/CR_G-qwsMhL/"
                    type={MediaType.Music}
                />
            </div>
            <div className=" h-10 w-full bg-transparent"></div>
        </motion.div>
    );
};

export default RowArt;

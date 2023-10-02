import { useAnimation, motion } from "framer-motion";
import { DateTime } from "luxon";
import { useEffect } from "react";
import { BsSpotify } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import ITrack from "../../interfaces/ITrack";
import { classNames } from "../../lib/tailwind";
import Heading, { HeadingDescription } from "../Heading";
import Track from "../Track";

const fadeInVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 },
};

interface Props {
    tracks: ITrack[];
    refreshed: number;
    title: string;
    subtitle: string;
}

const RowMusic: React.FC<Props> = ({ tracks, refreshed, title, subtitle }) => {
    const refreshedDateTime = DateTime.fromMillis(refreshed);

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
            <div className={classNames("z-50 mb-10 mt-24")}>
                <div className="flex items-center justify-between">
                    <Heading>{title}</Heading>

                    <div className="flex items-center opacity-50">
                        <a
                            href="https://open.spotify.com/user/funforstarax"
                            className="mr-2 pb-1"
                        >
                            <BsSpotify size={20} />
                        </a>
                        <p className="m-0 hidden p-0 pr-4 font-thin leading-none md:block">
                            last refreshed{" "}
                            {refreshedDateTime.toLocaleString({
                                hour: "numeric",
                                minute: "2-digit",
                            })}
                        </p>
                    </div>
                </div>
                <HeadingDescription className="mt-3">
                    {subtitle}
                </HeadingDescription>
                <div
                    ref={ref}
                    className="mt-8 grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-1"
                >
                    {tracks.slice(0, 4).map((track: ITrack, index: number) => (
                        <Track key={index} track={track} />
                    ))}
                </div>
                <div className=" h-10 w-full bg-transparent"></div>
            </div>
        </motion.div>
    );
};

export default RowMusic;

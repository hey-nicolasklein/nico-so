import { motion, useAnimationControls } from "framer-motion";
import React, { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.8 },
};

const AnimateInView = (props: { children: ReactElement[] }) => {
    const [ref, inView] = useInView();
    const controls = useAnimationControls();

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
            <div ref={ref}>{props.children}</div>
        </motion.div>
    );
};

export default AnimateInView;

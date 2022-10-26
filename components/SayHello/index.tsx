import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { SiFlutter } from "react-icons/si";
import { IconContext } from "react-icons";
import Heading from "../Heading";
import Wiggle from "../Wiggle";
import Wobbly from "../Wobbly";
import Wavy from "../Wave";

const SayHello = () => {
    return (
        <div className="relative mb-20 rounded-[20px]">
            <div className="rounded-[20px]">
                <Heading>
                    <div className="flex">
                        Say hello
                        <Wavy>👋🏼</Wavy>
                    </div>
                </Heading>
                <div className="border-1 relative rounded-[25px] p-5">
                    <p className="text-2xl">
                        Let&apos;s change the world together.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <CustomButton secondary={false} title="CONTACT" />
                        <CustomButton
                            secondary={true}
                            title="Go to my Github"
                            icon={<AiOutlineArrowRight size={20} />}
                        />
                    </div>
                    <div className="absolute right-10 top-0">
                        <IconContext.Provider
                            value={{ className: "text-white opacity-0" }}
                        >
                            <SiFlutter size={200}></SiFlutter>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SayHello;

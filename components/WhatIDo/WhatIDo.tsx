import React from "react";
import styles from "../../styles/WhatIDo.module.css";
import { AiFillDatabase, AiOutlineMobile } from "react-icons/ai";

import Card from "../Card";

const WhatIDo = () => {
    return (
        <div className={styles.Section}>
            <Card
                icon={<AiOutlineMobile size={50} />}
                title="Mobile"
                highlight={<img src="/assets/phoneFaded.png" />}
            >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero
                </p>
            </Card>

            <Card icon={<AiFillDatabase size={50} />} title="Backend" secondary>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut
                </p>
            </Card>
        </div>
    );
};

export default WhatIDo;

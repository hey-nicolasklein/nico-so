import { Skill } from "../interfaces/content";

/**
 * Skills rendered in the orbiting "Skills" section.
 *
 * `iconName` refers to a react-icons component (Simple Icons `Si*` or
 * Font Awesome `Fa*`). Ordered by the `order` field.
 */
const skills: Skill[] = [
    {
        id: 1,
        title: "Python",
        iconName: "SiPython",
        category: "backend",
        order: 0,
    },
    {
        id: 2,
        title: "Flutter",
        iconName: "SiFlutter",
        category: "frontend",
        order: 1,
    },
    {
        id: 3,
        title: "React",
        iconName: "SiReact",
        category: "frontend",
        order: 2,
    },
    {
        id: 4,
        title: "NextJS",
        iconName: "SiNextdotjs",
        category: "frontend",
        order: 3,
    },
    {
        id: 5,
        title: "Qt",
        iconName: "SiQt",
        category: "framework",
        order: 4,
    },
    {
        id: 6,
        title: "Figma",
        iconName: "SiFigma",
        category: "design",
        order: 5,
    },
    {
        id: 7,
        title: "LangChain",
        iconName: "SiLangchain",
        category: "tools",
        order: 8,
    },
];

export default skills;

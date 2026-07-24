import { SocialLink } from "../interfaces/content";

/**
 * Social links shown in the hero section.
 *
 * `iconName` refers to a react-icons/bs component (e.g. `BsGithub`).
 * Ordered by `order`; only entries with `visible: true` are rendered.
 */
const socialLinks: SocialLink[] = [
    {
        id: 1,
        platform: "LinkedIn",
        iconName: "BsLinkedin",
        url: "https://www.linkedin.com/in/heynicolas/",
        order: 1,
        visible: true,
    },
    {
        id: 2,
        platform: "Behance",
        iconName: "BsBehance",
        url: "https://www.behance.net/hey_nicolasklein",
        order: 2,
        visible: true,
    },
    {
        id: 3,
        platform: "GitHub",
        iconName: "BsGithub",
        url: "https://github.com/hey-nicolasklein",
        order: 3,
        visible: true,
    },
    {
        id: 4,
        platform: "Twitter",
        iconName: "BsTwitter",
        url: "https://twitter.com/heynicolask",
        order: 4,
        visible: true,
    },
    {
        id: 5,
        platform: "Instagram",
        iconName: "BsInstagram",
        url: "https://www.instagram.com/hey.nicolasklein/",
        order: 5,
        visible: true,
    },
    {
        id: 6,
        platform: "Instagram 3D",
        iconName: "BsInstagram",
        url: "https://www.instagram.com/3d.nicolasklein/",
        order: 6,
        visible: true,
    },
    {
        id: 7,
        platform: "Spotify",
        iconName: "BsSpotify",
        url: "https://open.spotify.com/user/funforstarax",
        order: 7,
        visible: true,
    },
];

export default socialLinks;

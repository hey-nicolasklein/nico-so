/**
 * Local content types
 *
 * These types describe the site content that used to live in the Strapi CMS.
 * All content is now defined statically in the `data/` directory and committed
 * to the repository (git-first). Images are served from `/public/assets`.
 */

export interface CvEntry {
    id: number;
    title: string;
    category: "education" | "experience";
    timeFrom: string;
    timeTo: string;
    description: string;
    link?: string;
    order: number;
}

export interface Skill {
    id: number;
    title: string;
    iconName: string;
    category?: string;
    order: number;
}

export interface PortfolioItem {
    id: number;
    title: string;
    subtitle?: string;
    /** Path to the image in `/public`, e.g. `/assets/Day91.png` */
    imageUrl: string;
    imageAlt?: string;
    externalLink?: string;
    createdWith?: string;
    type: "Artwork" | "Music" | "Movie" | "Other";
    order: number;
}

export interface SocialLink {
    id: number;
    platform: string;
    /** react-icons/bs component name, e.g. `BsGithub` */
    iconName: string;
    url: string;
    order: number;
    visible: boolean;
}

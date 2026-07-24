import { PortfolioItem } from "../interfaces/content";

/**
 * "Things I love" — personal cabinet of curiosities.
 *
 * Rendered in order by the `order` field. Images live in `/public/assets`.
 */
const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Day 91",
        subtitle: "Made during my 100days of art challenge.",
        imageUrl: "/assets/Day91.png",
        externalLink: "https://www.instagram.com/p/CPyES_kBhVQ/",
        createdWith: "Blender3D",
        type: "Artwork",
        order: 1,
    },
    {
        id: 2,
        title: "Day 88",
        subtitle: "Made during my 100days of art challenge.",
        imageUrl: "/assets/Day88.png",
        externalLink: "https://www.instagram.com/p/CPK9v2VhphV/",
        createdWith: "Blender3D",
        type: "Artwork",
        order: 2,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        subtitle: "Contains Tarantinos best dialogs 🎥",
        imageUrl: "/assets/pulp-fiction.jpg",
        externalLink: "https://www.amazon.de/Pulp-Fiction-Quentin-Tarantino",
        createdWith: "Movie",
        type: "Movie",
        order: 3,
    },
    {
        id: 4,
        title: "Nothing was the same",
        subtitle: "One of my favorite records of all time. Drake at his peak.",
        imageUrl: "/assets/drake.jpg",
        externalLink: "https://www.instagram.com/p/CR_G-qwsMhL/",
        createdWith: "Music",
        type: "Music",
        order: 4,
    },
    {
        id: 5,
        title: "Tretti Art",
        subtitle: "Created as part of my creative months within. 2024",
        imageUrl: "/assets/tretti-art.png",
        externalLink: "https://www.instagram.com/art.nicolasklein/",
        createdWith: "Illustrator",
        type: "Artwork",
        order: 5,
    },
    {
        id: 6,
        title: "Sundown Art",
        subtitle: "Created during my creative weeks in 2024.",
        imageUrl: "/assets/sundown-art.png",
        externalLink: "https://www.instagram.com/art.nicolasklein/",
        createdWith: "Illustrator",
        type: "Artwork",
        order: 6,
    },
    {
        id: 7,
        title: "Santiago",
        subtitle: "Best record to have running while coding. Loops perfectly ✨",
        imageUrl: "/assets/santiago.jpeg",
        externalLink:
            "https://open.spotify.com/intl-de/album/3mX0HbDt7oIzBBJHgQYnDY?si=ewD2inPDRiaXFc698pCsrA",
        createdWith: "Music",
        type: "Music",
        order: 7,
    },
];

export default portfolioItems;

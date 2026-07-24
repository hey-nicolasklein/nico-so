import { CvEntry } from "../interfaces/content";

/**
 * Curriculum vitae entries, split into `experience` and `education` by the
 * `category` field and ordered by `order`.
 */
const cvEntries: CvEntry[] = [
    {
        id: 1,
        title: "UX Engineer @ Ergosign",
        category: "experience",
        timeFrom: "2021",
        timeTo: "now",
        description:
            "As a UX Engineer I work side by side with UX Designers creating tailormade solutions. Lately AI has been a big part of my work, particulary retrieval-augmented generation pipelines (RAG). Technologies utilized include Langchain, Nuxt, Gitlab-CI, Figma and OpenAI.",
        link: "https://www.ergosign.de/de/",
        order: 1,
    },
    {
        id: 2,
        title: "Master Thesis @ Ergosign",
        category: "experience",
        timeFrom: "2020",
        timeTo: "2021",
        description:
            "Master Thesis in industry with focus on Flutter front-end development, real-time synchronization and user experience research. Technologies utilized included Flutter, Bloc, Bloc-Hydrated, Appwrite and Gitlab-CI.",
        link: "https://www.ergosign.de/de/",
        order: 2,
    },
    {
        id: 3,
        title: "Master of Science",
        category: "education",
        timeFrom: "2020",
        timeTo: "2022",
        description:
            "Consolidation of the knowledge gained in the Bachelor's degree. Topics such as machine learning, software development processes and data warehouses are covered.",
        link: "https://www.htwsaar.de/studieren/studiengaenge/ingenieurwissenschaften/master/praktische-informatik-msc",
        order: 1,
    },
    {
        id: 4,
        title: "Bachelor of Science",
        category: "education",
        timeFrom: "2019",
        timeTo: "2020",
        description:
            "Practically oriented study of computer science with a strong focus on application development. During my studies I gained an understanding of software architectures, web development and machine learning.",
        link: "https://www.htwsaar.de/studieren/studiengaenge/ingenieurwissenschaften/bachelor/praktische-informatik-bsc",
        order: 2,
    },
];

export default cvEntries;

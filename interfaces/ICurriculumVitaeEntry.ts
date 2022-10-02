export interface CVItems {
    education: ICvElementEntry[];
    skills: ICvElementEntry[];
}

export interface ICvElementEntry {
    title: string;
    yearFrom: string;
    yearTo: string;
    description: string;
}

export default ICvElementEntry;

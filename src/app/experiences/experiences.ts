import { StaticImageData } from "next/image";

interface Experience {
    image: StaticImageData;
    imageAltText: string;
    company: string;
    expTitle: string;
    description: string;
    rank: number; // For ordering the experiences on page
    dates: string;
}

export const experiences: Experience[] = [

]

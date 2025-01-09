import { StaticImageData } from "next/image";
import { fitDetectFav, letterboxdLogo, wingsLogo, porfolioFav } from "./images";

interface Project {
    description: string;
    projTitle: string;
    dates: string;
    rank: number;
    id: string;
    href: string;
    image: StaticImageData;
    altText: string;
}

export const projects: Project[] = [
    {
        projTitle: "Letterboxd Recommendation System",
        dates: "June 2024 - July 2024",
        rank: 2,
        id: "letterboxd-recs-proj",
        href: "https://github.com/jjoej15/letterboxd-recs",
        image: letterboxdLogo,
        altText: "",
        description: `
            Built a web app that gives film recommendations for any Letterboxd user or a recommendation for two using Blend mode
            by implementing a collaborative filtering based machine learning model utilizing SVD factorization for dimensionality reduction. 
            Users can include filters such as film popularity, film genre, and films  in user's watchlist. Used asynchronous web
            scraping techniques to collect ratings data from over 5,000 Letterboxd users, resulting in a dataset of approximately 13,000,000
            ratings and 950,000 films.
        `
    }, {
        projTitle: "WINGS Ground Station",
        dates: "September 2024 - present",
        rank: 1,
        id: "wings-proj",
        href: "/projects/wings",
        image: wingsLogo,
        altText: "",
        description: `
            Helping develop the UMN rocket team's proprietary WINGS software used for data analysis during and after rocket launches.
            Being a full stack engineering project, I'm contributing by helping build a robust memory-safe Rust back-end that supports 
            live telemetry reception through a USB port and handles data processing, and a front-end written in TypeScript for data visualization
            that features graph displays, indicator light displays, and more. Frameworks utilized include Tauri, SolidJS, and Tailwind CSS.
            Helping to conduct end-to-end testing to ensure that the rest of the team can confidently visualize and interpret data in order 
            to fine-tune their projects.
        `
    }, {
        projTitle: "FitDetect - Outfit Detection + Recommendation System",
        dates: "July 2024 - August 2024",
        rank: 3,
        id: "fitdetect-proj",
        href: "https://github.com/jjoej15/outfit-detect-recs",
        image: fitDetectFav,
        altText: "",
        description: `
            Pre-processed over 30,000 images to help train a YOLOv8 object detection model to identify pieces of a user's outfit, 
            utilizing advancements in deep learning and computer vision. Used OpenCV for real-time outfit detection via webcam or 
            user-submitted photos and integrated OpenAI's GPT-4o-mini LLM to generate personalized outfit recommendations. Implemented 
            a k-means clustering algorithm for dominant color identification of each piece of the outfit in order to enhance recommendations.
            Built a React front-end and a Python back-end with FastAPI to support the web application.  
        `
    }, {
        projTitle: "Letterboxd Higher or Lower Game",
        dates: "May 2024 - June 2024",
        rank: 5,
        id: "letterboxd-hol-proj",
        href: "https://github.com/jjoej15/letterboxd-HoL",
        image: letterboxdLogo,
        altText: "",
        description: `
            Inspired by the popular "Higher or Lower" game format, I made a simple web application that allows users to compare Letterboxd movie 
            ratings and guess which movie has a higher rating. This project uses data scraped from Letterboxd.
        `
    }, {
        projTitle: "Portfolio Website",
        dates: "December 2024 - present",
        rank: 4,
        id: "portfolio-proj",
        href: "https://github.com/jjoej15/joedotcom",
        image: porfolioFav,
        altText: "",
        description: `
            A continuous project, I built this site to show off my work, school, and project experiences and also make it easier for
            potential employers or collaborators to get to know me. I also viewed it as an opportunity to enhance my web development skills.
            As of right now it only has a front-end, which is written in TypeScript and built using Next.js, MDX, and SASS for styling. For
            ease-of-development I decided to use a component library, and I went with Once UI because of it's emphasis on easy styling 
            and accessibility.
        `
    }
]
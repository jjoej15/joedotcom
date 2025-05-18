import { StaticImageData } from "next/image";
import { fitDetectFav, letterboxdLogo, wingsLogo, portfolioFav, otrioLogo, umnEmblem } from "./images";

interface Project {
    description: string;
    projTitle: string;
    dates: string;
    id: string;
    href: string;
    image: StaticImageData;
    altText: string;
}

export const projects: Project[] = [
    {
        projTitle: "WINGS Ground Station",
        dates: "September 2024 - present",
        id: "wings-proj",
        href: "/projects/wings",
        image: wingsLogo,
        altText: "Logo for the UMN Rocket Team.",
        description: `
            Helping develop the UMN rocket team's proprietary WINGS software used for data visualization during and after rocket launches.
            Being a full stack engineering project, I'm contributing by helping build a robust memory-safe Rust back-end that supports 
            live telemetry reception through a USB port and handles data processing, and a front-end written in TypeScript for data visualization
            that features graph displays, indicator light displays, and more. Frameworks utilized include Tauri, SolidJS, and Tailwind CSS.
            Helping to conduct end-to-end testing to ensure that the rest of the team can confidently visualize and interpret data in order 
            to fine-tune their projects.
        `
    },
    {
        projTitle: "FitDetect - Outfit Detection + Recommendation System",
        dates: "July 2024 - August 2024",
        id: "fitdetect-proj",
        href: "https://github.com/jjoej15/outfit-detect-recs",
        image: fitDetectFav,
        altText: "A logo for FitDetect. Cartoon image of a T-shirt.",
        description: `
            Pre-processed over 30,000 images to help train a YOLOv8 object detection model to identify pieces of a user's outfit, 
            utilizing advancements in deep learning and computer vision. Used OpenCV for real-time outfit detection via webcam or 
            user-submitted photos and integrated OpenAI's GPT-4o-mini LLM to generate personalized outfit recommendations. Implemented 
            a k-means clustering algorithm for dominant color identification of each piece of the outfit in order to enhance recommendations.
            Built a React front-end and a Python back-end with FastAPI to support the web application.  
        `
    }, 
    {
        projTitle: "Drone Delivery Simulation System",
        dates: "February 2025 - May 2025",
        id: "drone-delivery-sim-proj",
        href: "https://hub.docker.com/r/jjoej15/team_001_14_final_project",
        image: umnEmblem,
        altText: "Emblem for the University of Minnesota - Twin Cities",
        description: `
            Application that enables users to interact with drones in a lifelike 3D model of the UMN campus. Users can schedule deliveries, 
            change the view of the front end, add additional humans or drones to the simulation, change the simulation speed, and show possible 
            routes for deliveries. Learned about and implemented various design and behavioral patterns to write code and implement a complex system, 
            adhering to SOLID principles. Learned various development processes. In the final month of working on the project, my group and I 
            implemented multiple extensions to the project utilizing the agile Scrum project management framework using Jira.
        `
    },
    {
        projTitle: "Letterboxd Recommendation System",
        dates: "June 2024 - July 2024",
        id: "letterboxd-recs-proj",
        href: "https://github.com/jjoej15/letterboxd-recs",
        image: letterboxdLogo,
        altText: "Letterboxd logo.",
        description: `
            Data scraping project and web app that gives film recommendations for any Letterboxd user or a recommendation for two using Blend mode
            by implementing a collaborative filtering based machine learning model utilizing SVD factorization for dimensionality reduction. 
            Users can include filters such as film popularity, film genre, and films  in user's watchlist. Used asynchronous web
            scraping techniques to collect ratings data from over 5,000 Letterboxd users, resulting in a dataset of approximately 13,000,000
            ratings and 950,000 films.
        `
    },  
    {
        projTitle: "Intelligent Agents for Three Player Otrio",
        dates: "March 2025 - May 2025",
        id: "otrio-proj",
        href: "https://drive.google.com/file/d/1hM1w5lPTsmOcrlQ9qAALCs0ScbQeWxMS/view?usp=drive_link",
        image: otrioLogo,
        altText: "Image of three rings, representing the board game Otrio.",
        description: `
            Group research project in which several AI agents were created and tested to play the game Otrio, a variant of 3D tic-tac-toe, 
            specifically the three player version of the game. Methods utilized by the agents for playing Otrio include the Minimax and Max^n— 
            a variant of the Minimax algorithm generalized for more than two players— algorithms, Monte Carlo Tree Search, and a Deep Q-Network 
            (DQN), which is a reinforcement learning approach that utilizes deep neural networks to learn optimal policies. My primary contributions 
            to the project were the implementation  of the DQN agent and writing the sections related to Q-learning, DQN, and Monte Carlo Tree 
            Search in the final paper.
        `
    },
    {
        projTitle: "Portfolio Website",
        dates: "December 2024 - present",
        id: "portfolio-proj",
        href: "https://github.com/jjoej15/joedotcom",
        image: portfolioFav,
        altText: "Favicon for Joe's portfolio website.",
        description: `
            A continuous project, I built this site to show off my work, school, and project experiences and also make it easier for
            potential employers or collaborators to get to know me. I also viewed it as an opportunity to enhance my web development skills.
            As of right now it only has a front-end, which is written in TypeScript and built using Next.js, MDX, and SASS for styling. For
            ease-of-development I decided to use a component library, and I went with Once UI because of it's emphasis on easy styling 
            and accessibility.
        `
    },
]
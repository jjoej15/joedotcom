import { StaticImageData } from "next/image";
import { umnEmblem, surlyLogo, spsCommerceLogo, rocketTeamLogo } from "./images";

interface Experience {
    image: StaticImageData;
    imageAltText: string;
    company: string;
    expTitle: string;
    description: string;
    dates: string;
    id: string;
}

export const experiences: Experience[] = [
    {
        image: spsCommerceLogo,
        imageAltText: "SPS Commerce logo",
        company: "SPS Commerce",
        expTitle: "Software Engineer Intern",
        description: `
            Right now I'm developing software at SPS Commerce as a contractor through Maverick Software Consulting. I've 
            gotten the opportunity to develop and optimize Electronic Data Interchange (EDI) product maps using 
            Java and Python for integration with customer Enterprise Resource Planning (ERP) systems, ensuring 
            accurate and efficient data exchange that reduces manual intervention and errors for end-users.
        `, 
        dates: "September 2024 - present",
        id: "sps-exp"
    },
    {
        image: rocketTeamLogo,
        imageAltText: "UMN Rocket Team logo",
        company: "UMN Rocket Team",
        expTitle: "Software Lead",
        description: `
            I'm currently leading the development of ground station software for the Rocket Team student org at UMN, 
            enabling real-time and post-flight visualization of telemetry data sent from rockets exceeding altitudes 
            of 30,000+ feet. After joining the team as a developer my junior year (Fall '24), I was chosen to lead the software
            sub-team of the club my senior year (Fall '25). Responsibilities include leading development of software projects
            for the team, recruiting, onboarding, and managing a team of developers, and maintaining WINGS, the team's
            open-sourced ground station software.
        `,
        dates: "September 2024 - present",
        id: "rocket-team-exp"
    },
    {
        image: umnEmblem,
        imageAltText: "Emblem for the University of Minnesota - Twin Cities",
        company: "University of Minnesota - Twin Cities",
        expTitle: "Teaching Assistant",
        description: `
            I got to assist in teaching an Intro to Programming Concepts course with over 800 students. I helped students
            learn fundamental computer science concepts with Python. I held regular office hours, facilitated lab sessions
            with other TAs, and collaborated with course instructors to grade and revise homework assignments.
        `, 
        dates: "January 2024 - May 2024",
        id: "ta-exp"
    }, 
    {
        image: surlyLogo, 
        imageAltText: "Surly Brewing logo",
        company: "Surly Brewing",
        expTitle: "Front of House Staff",
        description: `
            Worked as a barback, server, beertender, food runner, busser, and cashier. Learned a ton about craft beer and working
            in the food service industry. Worked within a fast-paced, highly collaborative, and fun work environment.
        `,
        dates: "September 2023 - September 2024",
        id: "surly-exp"
    },
    {
        image: umnEmblem,
        imageAltText: "Emblem for the University of Minnesota - Twin Cities",
        company: "University of Minnesota - Twin Cities",
        expTitle: "Student",
        description: `
            Currently working towards a B.S. in Computer Science with a minor in Statistics. Being a member and software lead of the UMN Rocket Team, 
            I help develop the team's ground station software for fun. Some relevant courses I've taken include Algorithms &
            Data Structures, Intro to Operating Systems, Machine Learning Fundamentals, Machine Organization & Architecture, 
            Applied Linear Algebra, and Calculus 2. I've been listed on the College of Science & Engineering's Dean's List 
            for 5 consecutive semesters, and have obtained a cumulative GPA of 3.75/4.
        `,
        dates: "September 2022 - May 2026",
        id: "student-exp"
    },  
]

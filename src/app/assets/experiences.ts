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
            gotten the opportunity to help maintain existing and write new data transformation services to be utilized on
            a custom in-house platform, and eventually integrated into our customers' ERP systems. Responsibilities include
            developing new EDI maps and re-factoring or fixing defects for existing ones, using Java and occasionally scripts
            written in Python.
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
            I'm currently developing software for the UMN rocket team, where we're building the WINGS ground station, among other
            software projects. After joining the team my junior year, I was chosen to lead the group of developers that comprise the 
            software sub-team of the club my senior year. Under my leadership thus far, we have open sourced WINGS in order to open
            the door for collaboration among the broader rocketry community, and I am the primary maintainer of the open-source
            repository. Throughout the upcoming year, I plan to upstart the development of new projects, and will get the opportunity
            to design these new systems from scratch.
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

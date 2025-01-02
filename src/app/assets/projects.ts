interface Project {
    description: string;
    projTitle: string;
    dates: string;
    rank: number;
    id: string;
    href: string;
}

export const projects: Project[] = [
    {
        projTitle: "Project 1",
        dates: "September 1921 - January 2887",
        rank: 1,
        id: "proj1",
        href: "https://github.com/jjoej15/letterboxd-recs",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut numquam sequi hic rem, aliquid minus, rerum 
            provident corporis deleniti dolor facere consequatur architecto labore at nostrum debitis obcaecati aut.
        `
    }, {
        projTitle: "Project 2",
        dates: "September 1921 - January 2887",
        rank: 2,
        id: "proj2",
        href: "",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut numquam sequi hic rem, aliquid minus, rerum 
            provident corporis deleniti dolor facere consequatur architecto labore at nostrum debitis obcaecati aut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut numquam sequi hic rem, aliquid minus, rerum 
            provident corporis deleniti dolor facere consequatur architecto labore at nostrum debitis obcaecati aut.
        `
    }, {
        projTitle: "Project 3",
        dates: "September 1921 - January 2887",
        rank: 3,
        id: "proj3",
        href: "",
        description: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut numquam sequi hic rem, aliquid minus, rerum 
            provident corporis deleniti dolor facere consequatur architecto labore at nostrum debitis obcaecati aut.
        `
    }
]
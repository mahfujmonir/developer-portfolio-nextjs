// portfolio.js

const portfolio = {
    personalInfo: {
        name: "Mahfuj Monir",
        email: "mahfujmonir@example.com",
        linkedin: "https://www.linkedin.com/in/mahfujmonir",
        github: "https://github.com/mahfujmonir",
    },
    skills: [
        "JavaScript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Git",
        "GitHub",
    ],
    projects: [
        {
            title: "Personal Website",
            description: "A personal portfolio website to showcase my projects and skills.",
            link: "https://myportfolio.com",
        },
        {
            title: "Recipe App",
            description: "A web application to find and save recipes.",
            link: "https://recipeapp.com",
        }
    ],
    experience: [
        {
            jobTitle: "Frontend Developer",
            company: "Tech Corp",
            duration: "2022 - Present",
            responsibilities: [
                "Developing user-friendly web interfaces",
                "Collaborating with designers and backend developers",
            ]
        },
        {
            jobTitle: "Intern",
            company: "Startup Inc",
            duration: "2021 - 2022",
            responsibilities: [
                "Assisting in project development",
                "Writing documentation",
            ]
        }
    ]
};

export default portfolio;
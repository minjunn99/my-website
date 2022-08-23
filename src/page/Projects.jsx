// Import library
import React from "react";

// Import components
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            name: "play youtube video",
            tags: ["HTML", "CSS", "JavaScript"],
            description:
                "Build play and controls video like youtube project with Vanilla JS.",
            image: "./img/project/play-youtube-video.jpeg",
            github: "https://github.com/minjunn99/Play-Youtube-Video",
            website: "https://minjunn99.github.io/Play-Youtube-Video/",
        },
        {
            name: "rest countries api",
            tags: ["HTML", "CSS", "JavaScript"],
            description:
                "Build rest countries api with color theme switcher master Vanilla JS project.",
            image: "./img/project/rest-countries-api.jpeg",
            github: "https://github.com/minjunn99/RestCountriesAPI",
            website: "https://minjunn99.github.io/RestCountriesAPI/",
        },
        {
            name: "calculator",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "Build calculator app with HTML, CSS, JavaScript.",
            image: "./img/project/calculator.jpeg",
            github: "https://github.com/minjunn99/Calculator",
            website: "https://minjunn99.github.io/Calculator/",
        },
        {
            name: "music",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "Build music app with vanilla javascript.",
            image: "./img/project/music.jpeg",
            github: "https://github.com/minjunn99/Music",
            website: "https://minjunn99.github.io/Music/",
        },
        {
            name: "slide",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "Build easy slider js project.",
            image: "./img/project/slide.jpeg",
            github: "https://github.com/minjunn99/SlideJs",
            website: "https://minjunn99.github.io/SlideJs/",
        },
        {
            name: "todo",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "Build Todo App project with JS.",
            image: "./img/project/todo.jpeg",
            github: "https://github.com/minjunn99/TodoVanilaJs",
            website: "https://minjunn99.github.io/TodoVanilaJs/",
        },
        {
            name: "quiz app",
            tags: ["HTML", "CSS", "JavaScript"],
            description: " Build quiz app project with JS.",
            image: "./img/project/quiz-app.jpeg",
            github: "https://github.com/minjunn99/Quiz-app",
            website: "https://minjunn99.github.io/Quiz-app/",
        },
        {
            name: "typing",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "Build Typing project with JS",
            image: "./img/project/typing.jpeg",
            github: "https://github.com/minjunn99/TypingJs",
            website: "https://minjunn99.github.io/TypingJs/",
        },
        {
            name: "cv resume",
            tags: ["HTML", "CSS", "JS", "PHP", "MySQL"],
            description:
                "How to create CV Resume Project Website with HTML, CSS, JS, Bootstrap, PHP.",
            image: "./img/project/cvresume.jpeg",
            github: "https://github.com/minjunn99/CVResumeProject",
            website: "",
        },
        {
            name: "e-commerce",
            tags: ["HTML", "CSS", "JS"],
            description: "E-Commerce Cart Project with HTML, CSS, JS.",
            image: "./img/project/ecommerce.jpeg",
            github: "https://github.com/minjunn99/E-Commerce",
            website: "https://minjunn99.github.io/E-Commerce/",
        },
        {
            name: "jamblog",
            tags: ["HTML", "CSS", "SASS"],
            description: "Build website blog template.",
            image: "./img/project/blog.jpeg",
            github: "https://github.com/minjunn99/JAMBlog",
            website: "https://minjunn99.github.io/JAMBlog/",
        },
    ];

    return (
        <div className="projects section">
            <div className="projects--container">
                <div className="section--heading text-uppercase mx-auto">
                    projects
                </div>
                <div className="projects--list d-grid">
                    {projects.map((project) => (
                        <div className="project">
                            <div className="project--img">
                                <img
                                    src={project.image}
                                    alt={project.description}
                                />
                            </div>
                            <div className="project--detail flow">
                                <h5 className="project--name">
                                    {project.name}
                                </h5>
                                <div className="project--tags d-flex">
                                    {project.tags.map((tag) => (
                                        <div>{tag}</div>
                                    ))}
                                </div>
                                <p className="project--desc">
                                    {project.description}
                                </p>
                                <div className="project--link d-flex">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub /> github
                                    </a>
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLink /> website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

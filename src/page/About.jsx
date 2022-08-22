// Import library
import React from "react";
import { Link } from "react-router-dom";

// Import components
import Avatar from "../img/myavatar.jpg";

const About = () => {
    const myInfo = [
        {
            name: "Name",
            value: "Hoang Hieu Trung",
        },
        {
            name: "DoB",
            value: "10/09/1999",
        },
        {
            name: "Job",
            value: "Student",
        },
        {
            name: "Residence",
            value: "Vu Huu, Ha Noi",
        },
        {
            name: "Phone",
            value: "077 842 2972",
        },
        {
            name: "Email",
            value: "min2jn99@gmail.com",
        },
    ];

    const myExperience = [
        {
            position: "php intern",
            worked_at: "smartbooks software",
            description:
                "Design reports with cross-platform standalone designer app (ActiveReportsJS). Learn and approach vuejs library in frontend and laravel library in backend.",
            date_start: "2020",
            date_end: "2021",
        },
        {
            position: "waiter",
            worked_at: "an huy computer",
            description:
                "Cleaning computers, tables and chairs. Serve customers the services provided by the store. Statistically, enter enough number of items through each shift change.",
            date_start: "2018",
            date_end: "2019",
        },
    ];

    const myEducation = [
        {
            name: "water resource university",
            description:
                "Currently majoring in information systems at the University of Water Resources in Hanoi campus.",
            date_start: "2017",
            date_end: "present",
        },
        {
            name: "dao duy tu",
            description:
                "Achieved 3 years of excellent student at Dao Duy Tu high school.",
            date_start: "2014",
            date_end: "2017",
        },
        {
            name: "vietnam - angieri",
            description: "Finished secondary school at vietnam angieri school.",
            date_start: "2010",
            date_end: "2014",
        },
        {
            name: "dang tran con a",
            description: "Finished high school at the school dang tran con a",
            date_start: "2005",
            date_end: "2010",
        },
    ];

    return (
        <div className="about section">
            <div className="about--container">
                {/* About Overview */}
                <div className="about--overview">
                    <div className="section--heading text-uppercase mx-auto">
                        about me
                    </div>
                    <div className="about--content d-flex">
                        <div className="about--avatar">
                            <img src={Avatar} alt="My Avatar Profile" />
                        </div>
                        <div className="about--detail flow">
                            <div>
                                <p className="fs-500 fw-medium">
                                    Hello! I'm MinJun
                                </p>
                                <p>
                                    I am a student from Water Resources
                                    University in Viet Nam. The major I am
                                    studying at school is Information System. I
                                    love to learn knowledge related to many
                                    different fields, especially programming.
                                </p>
                            </div>
                            <div className="about--info d-grid">
                                {myInfo.map((item) => (
                                    <div className="about--info__item">
                                        <span className="text-primary-200">
                                            {item.name + ": "}
                                        </span>
                                        <span>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="about--btns d-flex">
                                <button
                                    className="btn"
                                    button-type="primary"
                                    button-variant="contained"
                                >
                                    download cv
                                </button>
                                <Link
                                    to="/contact"
                                    className="btn"
                                    button-type="primary"
                                    button-variant="outlined"
                                >
                                    contact me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Timeline */}
                <div className="about--timeline d-flex">
                    {/* Experience */}
                    <div className="timeline">
                        <div className="section--heading text-uppercase">
                            experience
                        </div>
                        <div className="timeline--list">
                            {myExperience.map((exp) => (
                                <div className="timeline--item">
                                    <div className="timeline--date">
                                        {exp.date_start} - {exp.date_end}
                                    </div>
                                    <div className="timeline--info">
                                        <h6 className="timeline--detail">
                                            {exp.position} - {exp.worked_at}
                                        </h6>
                                        <p className="timeline--desc">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* education */}
                    <div className="timeline">
                        <div className="section--heading text-uppercase">
                            education
                        </div>
                        <div className="timeline--list">
                            {myEducation.map((edu) => (
                                <div className="timeline--item">
                                    <div className="timeline--date">
                                        {edu.date_start} - {edu.date_end}
                                    </div>
                                    <div className="timeline--info">
                                        <h6 className="timeline--detail">
                                            {edu.name}
                                        </h6>
                                        <p className="timeline--desc">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* About Skills */}
                <div className="about--skills d-grid">
                    <div className="about--skill">
                        <div className="section--heading text-uppercase">
                            Frontend Developer
                        </div>
                        <div className="about--skill__list flow">
                            <div className="about--skill__item">HTML / CSS</div>
                            <div className="about--skill__item">
                                ReactJS / JavaScript
                            </div>
                            <div className="about--skill__item">Sass</div>
                            <div className="about--skill__item">Bootstrap</div>
                            <div className="about--skill__item">jQuery</div>
                        </div>
                    </div>
                    <div className="about--skill">
                        <div className="section--heading text-uppercase">
                            Backend Developer
                        </div>
                        <div className="about--skill__list flow">
                            <div className="about--skill__item">NodeJS</div>
                            <div className="about--skill__item">Sanity</div>
                            <div className="about--skill__item">Express</div>
                            <div className="about--skill__item">
                                PHP / MySQL
                            </div>
                        </div>
                    </div>
                    <div className="about--skill">
                        <div className="section--heading text-uppercase">
                            Design
                        </div>
                        <div className="about--skill__list flow">
                            <div className="about--skill__item">Abode CC</div>
                            <div className="about--skill__item">Abode XD</div>
                            <div className="about--skill__item">Figma</div>
                        </div>
                    </div>
                    <div className="about--skill">
                        <div className="section--heading text-uppercase">
                            Other
                        </div>
                        <div className="about--skill__list flow">
                            <div className="about--skill__item">C++ / C#</div>
                            <div className="about--skill__item">Python</div>
                            <div className="about--skill__item">SQL Server</div>
                            <div className="about--skill__item">Git</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

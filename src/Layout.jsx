// Import library
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

// Import component
import MyPhoto from "./img/myphoto.jpg";
import { FeatureNav } from "./components";
import { About, Projects, Stories, Contact } from "./page";

const Layout = () => {
    return (
        <Router>
            <header className="hero">
                <div className="hero--container">
                    <div className="container d-flex justify-content-center align-items-center text-white">
                        <div className="hero--image">
                            <img src={MyPhoto} alt="My avatar" />
                        </div>
                        <div className="hero--name fs-600">Minjun Jang</div>
                        <p className="hero--desc text-capitalize">
                            student & web developer
                        </p>
                        <div className="hero--social d-flex align-items-center">
                            <a
                                className="fs-500"
                                href="https://github.com/minjunn99"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                className="fs-500"
                                href="https://www.instagram.com/__jt.10"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                className="fs-500"
                                href="https://www.facebook.com/jt109"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="feature">
                    <div className="feature--container container">
                        <FeatureNav />
                        <Routes>
                            <Route path="/" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/stories" element={<Stories />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </section>
            </main>
        </Router>
    );
};

export default Layout;

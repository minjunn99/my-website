// Import library
import React from "react";
import { NavLink } from "react-router-dom";

const FeatureNav = () => {
    return (
        <div>
            <nav className="feature--nav">
                <ul className="feature--menu d-flex justify-content-center align-items-center">
                    <li className="feature--item text-uppercase">
                        <NavLink className="feature--link" to="/">
                            about
                        </NavLink>
                    </li>
                    <li className="feature--item text-uppercase">
                        <NavLink className="feature--link" to="/projects">
                            projects
                        </NavLink>
                    </li>
                    <li className="feature--item text-uppercase">
                        <NavLink className="feature--link" to="/stories">
                            stories
                        </NavLink>
                    </li>
                    <li className="feature--item text-uppercase">
                        <NavLink className="feature--link" to="/contact">
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default FeatureNav;

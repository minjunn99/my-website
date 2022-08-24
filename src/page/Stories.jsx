// Import library
import React from "react";

// Import component
import { BsArrowRight } from "react-icons/bs";

const Stories = () => {
    return (
        <div className="stories section">
            <div className="stories--container">
                <div className="section--heading text-uppercase mx-auto">
                    stories
                </div>
                <div className="stories--list d-grid">
                    <div className="card">
                        <div className="card--img">
                            <img
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--J3nLCnnj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lpv2g4bzy7r28xsc8xbh.jpg"
                                alt="title"
                            />
                        </div>
                        <div className="card--info flow">
                            <p className="card--date">
                                Posted on November 13, 2020
                            </p>
                            <h5 className="card--title">
                                Capture Still Images on Browser using JavaScript
                            </h5>
                            <p className="card--desc">
                                In order to click still images on your browser,
                                we are going to use JavaScript's Navigator APIs.
                                Well for those who are unfamiliar with
                                JavaScript's Navigator API, here is a short
                                explanation of it
                            </p>
                            <a className="card--link" href="#!">
                                Read more <BsArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--img">
                            <img
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--J3nLCnnj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lpv2g4bzy7r28xsc8xbh.jpg"
                                alt="title"
                            />
                        </div>
                        <div className="card--info flow">
                            <p className="card--date">
                                Posted on November 13, 2020
                            </p>
                            <h5 className="card--title">
                                Capture Still Images on Browser using JavaScript
                            </h5>
                            <p className="card--desc">
                                In order to click still images on your browser,
                                we are going to use JavaScript's Navigator APIs.
                                Well for those who are unfamiliar with
                                JavaScript's Navigator API, here is a short
                                explanation of it
                            </p>
                            <a className="card--link" href="#!">
                                Read more <BsArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;

import React from "react";

const Contact = () => {
    return (
        <div className="contact section">
            <div className="contact--container">
                <div className="section--heading text-uppercase mx-auto">
                    contact
                </div>
                <form className="contact--form form flow">
                    <div className="form--group">
                        <label htmlFor="yourName" className="form--label">
                            your name
                        </label>
                        <input
                            type="text"
                            id="yourName"
                            className="form--input"
                            placeholder=" "
                        />
                    </div>
                    <div className="form--group">
                        <label htmlFor="yourEmail" className="form--label">
                            your email
                        </label>
                        <input
                            type="email"
                            id="yourEmail"
                            className="form--input"
                            placeholder=" "
                        />
                    </div>
                    <div className="form--group">
                        <label htmlFor="yourMessage" className="form--label">
                            your message
                        </label>
                        <textarea
                            id="yourMessage"
                            className="form--input"
                            placeholder=" "
                        ></textarea>
                    </div>
                    <button
                        className="btn"
                        button-type="primary"
                        button-variant="contained"
                    >
                        contact me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

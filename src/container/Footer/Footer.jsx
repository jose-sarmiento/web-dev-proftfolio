import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(undefined);

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then((result) => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    };

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a
                        href="mailto:jose.dev.official@gmail.com"
                        className="p-text"
                    >
                        jose.dev.official@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <span href="#" className="p-text">
                        (+63) 970 342 4258
                    </span>
                </div>
            </div>

            {error && (
                <div className="app__error">
                    Something wen't wrong. Please try again!
                </div>
            )}

            {!isFormSubmitted ? (
                <form
                    ref={form}
                    className="app__footer-form app__flex"
                    onSubmit={sendEmail}
                >
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Your Name"
                            name="username"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            name="message"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="p-text">
                        {!loading ? "Send Message" : "Sending..."}
                    </button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
);

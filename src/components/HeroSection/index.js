import React from 'react';
import TypedReactDemo from "../TypedReactDemo";

const HeroSection = () => {
    return (
        <section id="hero_content" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Shailesh Patil</h1>
                <p>
                    I'm
                    <TypedReactDemo strings={["Designer", "Developer", "Freelancer"]}/>
                </p>
                <button className="btn btn-primary hire_now_btn">Hire Now</button>
            </div>
        </section>
    );
};

export default HeroSection;
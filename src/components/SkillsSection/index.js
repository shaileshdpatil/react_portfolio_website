import React from 'react';

const SkillsSection = () => {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>
                        Here are some of the skills that I have acquired and mastered over the years, along with the
                        percentage of my proficiency in each one:
                    </p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="progress">
                            <span className="skill">React JS <i className="val">98%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "98%"}}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">NEXT JS <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">98%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "98%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="progress">
                            <span className="skill">HTML5 / CSS3 <i className="val">95%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "95%"}}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">TAILWIND CSS <i className="val">85%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "85%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">NODE <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "70%"}}></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
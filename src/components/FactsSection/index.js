import React from 'react';

const FactsSection = () => {
    return (
        <section id="facts" className="facts">
            <div className="container">

                <div className="section-title">
                    <h2>Facts</h2>
                    <p>
                        In this section, I will describe some of the clients and projects that I have worked with in the past.
                    </p>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            <span className="purecounter">2+</span>
                            <p><strong>Happy Clients</strong></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                         data-aos-delay="100">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"></i>
                            <span className="purecounter">2+</span>
                            <p><strong>Projects</strong></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                         data-aos-delay="200">
                        <div className="count-box">
                            <i className="bi bi-headset"></i>
                            <span className="purecounter">24</span>
                            <p><strong>Hours Of Support</strong></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                         data-aos-delay="300">
                        <div className="count-box">
                            <i className="bi bi-people"></i>
                            <span className="purecounter">2+</span>
                            <p><strong>Hard Workers</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactsSection;
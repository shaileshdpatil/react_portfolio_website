import React from 'react';

const ResumeSection = () => {
    return (
        <section id="resume_content" className="resume_content">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>
                        In this section, I will provide you with some information about my professional background,
                        education, and other important details that demonstrate my skills, knowledge, and experience in
                        the field of web development and design.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Shailesh Patil</h4>
                            <p>
                                <em>
                                    I am a passionate and results-driven Frontend Developer with 3 years of hands-on
                                    experience in building dynamic and user-centric web applications.
                                </em>
                            </p>
                            <ul>
                                <li>Katargam,Surat, IN</li>
                                <li>+91 8866965956</li>
                                <li>
                                    <a href="mailto:shaileshdpatil1@gmail.com">
                                        shaileshdpatil1@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Computer Applications</h4>
                            <h5>2019 - 2021</h5>
                            <p><em>Vivekanand Collage, surat, IN</em></p>
                            <p>
                                I began my journey in the field of web development and design at Vivekanand College,
                                where I pursued a bachelor’s degree in computer applications from 2019 to 2021. During
                                my studies, I learned the fundamentals of programming, web design, database management,
                                and software engineering. I also participated in various projects and competitions that
                                helped me hone my skills and gain practical experience.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior REACT DEVELOPER & Desginer</h4>
                            <h5>2021 - Present</h5>
                            <p><em>Surat, Gujarat, IN </em></p>
                            <ul>
                                <li>
                                    Led a team of web developers and designers in creating and maintaining various web
                                    applications using React, HTML, CSS, and JavaScript.
                                </li>
                                <li>
                                    Designed the user interface, developed the front-end functionality, tested the code,
                                    and deployed the applications to the web server.
                                </li>
                                <li>
                                    Mentored and trained junior developers and collaborated with other senior developers
                                    and project managers.
                                </li>
                                <li>
                                    Used advanced React features such as custom hooks, context API, Redux, and React
                                    Router.

                                </li>
                                <li>
                                    Implemented web performance optimization, accessibility, and SEO best practices.
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>JUNIOR REACT DEVELOPER</h4>
                            <h5>2020 - 2021</h5>
                            <p><em>Surat, Gujarat, IN</em></p>
                            <ul>
                                <li>
                                    Assisted the senior developers in developing and designing web applications using
                                    React, HTML, CSS, and JavaScript.
                                </li>
                                <li>
                                    Learned how to use React hooks, components, state management, routing, and custom
                                    hooks.
                                </li>
                                <li>
                                    Gained experience in using tools such as Git, Webpack, Babel, and ESLint.
                                </li>
                                <li>
                                    Contributed to several projects and improved my skills and knowledge in web
                                    development and design.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResumeSection;
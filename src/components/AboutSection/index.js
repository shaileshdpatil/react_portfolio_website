import React from 'react';

const AboutSection = () => {
    return (
        <section id="about_section" className="about_section">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        My name is Shailesh Patil and I have a bachelor’s degree in computer applications. I started my
                        career as a programmer after completing my BCA. I have always been passionate about creating and
                        solving problems using technology. I enjoy learning new skills and tools to improve my web
                        development and design abilities.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="/assets/profile-img.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Web Developer & Designer.</h3>
                        <p className="fst-italic">
                            My expertise lies in harnessing the power of
                            modern technologies to create seamless and engaging digital experiences.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"/> <strong>Full Name:</strong>
                                        <span>Shailesh Patil</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"/> <strong>Birthday:</strong>
                                        <span>22 July 2000</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"/> <strong>Phone:</strong>
                                        <span>+91 88669 65956</span>
                                    </li>
                                    <li><
                                        i className="bi bi-chevron-right"/> <strong>City:</strong>
                                        <span>Surat, INDIA</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"/> <strong>Age:</strong>
                                        <span>23</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"/> <strong>Degree:</strong>
                                        <span>Bachelor of Computer Applications</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <strong>Email:</strong>
                                        <span>
                                            <a href="mailto:shaileshdpatil1@gmail.com">
                                                shaileshdpatil1@gmail.com
                                            </a>
                                        </span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"/> <strong>Freelance:</strong>
                                        <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            In my spare time, I also run a YouTube channel under my name, where I share my knowledge and
                            experience in web development and design with other aspiring programmers. I hope you enjoy
                            browsing my portfolio and feel free to contact me if you have any questions or inquiries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
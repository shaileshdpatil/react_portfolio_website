import React from 'react';

const HeaderContainer = () => {
    return (
        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src="/assets/profile.jpg" alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light">
                        <span>Shailesh Patil</span>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        <a
                            href="https://www.youtube.com/@shaileshpatil1" target="_blank"
                            className="youtube"
                        >
                            <i className="bx bxl-youtube"/>
                        </a>
                        <a
                            href="https://www.instagram.com/shailu_patil1" target="_blank"
                            className="instagram">
                            <i className="bx bxl-instagram"/>
                        </a>
                        <a
                            href="https://in.linkedin.com/in/shailesh-patil-5ab038204" target="_blank"
                            className="linkedin"
                        >
                            <i className="bx bxl-linkedin"/>
                        </a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li>
                            <a href="#hero_content" className="nav-link scrollto active">
                                <i className="bx bx-home"/>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about_section" className="nav-link scrollto">
                                <i className="bx bx-user"/>
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume_content" className="nav-link scrollto">
                                <i className="bx bx-file-blank"/>
                                <span>Resume</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link scrollto">
                                <i className="bx bx-envelope"/>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderContainer;
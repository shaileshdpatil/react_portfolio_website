import React from 'react';

const ContactForm = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>
                        If you are interested in hiring me for your web development and design project, please feel free
                        to contact me. I can provide you with a free demo of my work and discuss your requirements and
                        expectations.
                    </p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"/>
                                <h4>Location:</h4>
                                <p>Katargam, Surat, IN 395010</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"/>
                                <h4>Email:</h4>
                                <p>shaileshdpatil1@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"/>
                                <h4>Call:</h4>
                                <p>+91 88669 65956</p>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.002754874717!2d72.8170181!3d21.2219055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f8640d54efd%3A0xc3cee73fa44bb168!2sShailesh%20patil!5e0!3m2!1sen!2sin!4v1692007329055!5m2!1sen!2sin"
                                frameBorder="0"
                                style={{border: 0, width: "100%", height: "290px"}}
                                allowFullScreen
                            />
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required/>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"/>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="opacity-25" disabled={true}>Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactForm;
import React from 'react';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>What Clients Say's About Me !</h2>
                </div>

                <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper row">
                        <div className="swiper-slide col-md-4">
                            <div
                                className="testimonial-item cursor-pointer"
                                data-aos="fade-up"
                                onClick={()=>window.open("https://www.upwork.com/freelancers/~017f064651f332cc2f","_blank")}
                            >
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                    Shailesh P's Work is the Highest Quality Both Web Development and Web Design. He is
                                    always available and always fullfill Project Deadline every time.i will looking forword
                                    to work with him. I Highy Recommend Shailesh P. to anyone that require work og a
                                    very high standard.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                </p>
                                <img src="/assets/profile.jpg" className="testimonial-img"
                                     alt=""/>
                                <h3>Keval Ranapriya</h3>
                            </div>
                        </div>
                        <div className="swiper-slide col-md-4">
                            <div
                                className="testimonial-item cursor-pointer" data-aos="fade-up" data-aos-delay="100"
                                onClick={()=>window.open("https://www.upwork.com/freelancers/~017f064651f332cc2f","_blank")}
                            >
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                    I would like to express my sincere gratitude to Shailesh for their exceptional work.
                                    Thank you for bringing my vision to life and for your dedication to creating a truly
                                    remarkable landing page design. I look forward to the opportunity to work with you
                                    again in the future.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                </p>
                                <img src="/assets/profile.jpg" className="testimonial-img"
                                     alt=""/>
                                <h3>Jamie Austin</h3>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"/>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
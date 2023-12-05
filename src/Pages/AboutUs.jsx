import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CssStyle/AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <Navbar />
            <div className="AboutUsCon"> 
                <h1>About Us</h1>
                <section>
                    <h2>Our Mission</h2>
                    <p>
                    Our goal at MovieRanker is to link moviegoers with the greatest theatre experiences available. 
                    We work hard to create a fun and informative site where people can find, review, and rate films
                    from different genres and historical periods. Our objective is to establish a thriving film community. 
                    </p>
                </section>
                <section>
                    <h2>Our Story</h2>
                    <p>
                    MovieRanker was started in 2023 as a side project by some computer science students who were enthusiastic
                    about spreading their love of films. Ever since, we have developed into a premier source for reviews, suggestions,
                    and news from the film business. A thriving community of film enthusiasts who value the craft of filmmaking may be
                    found on our site.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;

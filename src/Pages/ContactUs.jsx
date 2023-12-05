import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CssStyle/ContactUs.css';

function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className="page-content">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, feel free to reach out to us.</p>
                
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="direct-contact">
                    <h2>Direct Contact</h2>
                    <p>Email: movieranker@gmail.com</p>
                    <p>Phone: +518 555 5555</p>
                    <p>Address: 1400 Washington Ave, Albany, NY 12222</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;

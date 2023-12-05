import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CssStyle/TermsAndConditions.css';

function TermsAndConditions() {
    return (
        <div>
            <Navbar />
            <div className="terms-conditions-container">
                <h1>Terms and Conditions</h1>
                <p>
                    Welcome to MovieRanker! These terms and conditions outline the rules and regulations for the use of 
                    MovieRanker's Website, located at movieranker.com.
                </p>
                <p>
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use 
                    MovieRanker if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <h2>License</h2>
                <p>
                    Unless otherwise stated, MovieRanker and/or its licensors own the intellectual property rights for 
                    all material on MovieRanker. All intellectual property rights are reserved. You may access this from 
                    MovieRanker for your own personal use subjected to restrictions set in these terms and conditions.
                </p>

                <h2>User Comments, Reviews, and Content</h2>
                <p>
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in 
                    certain areas of the website. MovieRanker does not filter, edit, publish or review Comments prior to 
                    their presence on the website. Comments do not reflect the views and opinions of MovieRanker, its agents 
                    and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. 
                    To the extent permitted by applicable laws, MovieRanker shall not be liable for the Comments or for any 
                    liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or 
                    appearance of the Comments on this website.
                </p>

                <h2>Hyperlinking to our Content</h2>
                <p>
                    Only our partners may link to our Website without prior written approval
                </p>

                <h2>iFrames</h2>
                <p>
                    Without prior approval and written permission, you may not create frames around our Webpages that alter 
                    in any way the visual presentation or appearance of our Website.
                </p>

                <h2>Content Liability</h2>
                <p>
                    We shall not be held responsible for any content that appears on your Website. You agree to protect and 
                    defend us against all claims that are rising on your Website. No link(s) should appear on any Website 
                    that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or 
                    advocates the infringement or other violation of, any third party rights.
                </p>

                {/* Additional clauses as necessary */}

                <h2>Your Privacy</h2>
                <p>
                    Please read our Privacy Policy.
                </p>

                <h2>Reservation of Rights</h2>
                <p>
                    We reserve the right to request that you remove all links or any particular link to our Website. You 
                    approve to immediately remove all links to our Website upon request. We also reserve the right to amen 
                    these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, 
                    you agree to be bound to and follow these linking terms and conditions.
                </p>

                <h2>Removal of links from our website</h2>
                <p>
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform 
                    us any moment. We will consider requests to remove links but we are not obligated to or so or to respond 
                    to you directly.
                </p>

                <h2>Disclaimer</h2>
                <p>
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and 
                    conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul>
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>
                
                <h2>Contact Information</h2>
                <p>
                    For any inquiries regarding these Terms and Conditions, please contact us using the contact page below.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default TermsAndConditions;

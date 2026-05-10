import './contact.css';
import blessing from '../../assets/blessing.jpg';
import samuel from '../../assets/samuel.jpg';
import iphy from '../../assets/iphy.jpg';
import nelson from '../../assets/nelson.jpg';
import facebookIcon from '../../assets/facebook-icon.png';
import linkdinIcon from '../../assets/linkdin.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const name = formData.get('from_name')?.trim();
        const email = formData.get('from_email')?.trim();
        const message = formData.get('message')?.trim();

        // check if fields are empty
        if(!name || !email || !message){
            return;
        }

        emailjs.sendForm(
            'service_nlvi2nt',
            'template_wfyj4lc',
            form.current,
            'DXJPGMbp_blsYHZYZ'
        )
        .then(() => {
            e.target.reset();
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.log(error);
            // alert('Failed to send message');
        });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Testimonies</h1>
                <span className="clientDesc">
                    Hear what clients and users have to say about my work, creativity, and dedication to delivering quality results.
                </span>
                
                
                <div className="testimonialsContainer">

                    <div className="testimonialCard">
                        <img src={blessing} alt="Client" className="testimonialImg" />
                        <p className="testimonialText">
                            “She is a talented developer and very creative in her designs.”
                        </p>
                        <h3>Mark Blessing</h3>
                        <div className="stars">★★★★★</div>
                    </div>

                    <div className="testimonialCard">
                        <img src={samuel} alt="Client" className="testimonialImg" />
                        <p className="testimonialText">
                            “Her attention to detail and problem-solving skill is outstanding.”
                        </p>
                        <h3>Samuel Kachim</h3>
                        <div className="stars">★★★★★</div>
                    </div>

                    <div className="testimonialCard">
                        <img src={iphy} alt="Client" className="testimonialImg" />
                        <p className="testimonialText">
                            “A professional and reliable developer. Highly recommended!”
                        </p>
                        <h3>Dike Ifeanyi</h3>
                        <div className="stars">★★★★★</div>
                    </div>

                    <div className="testimonialCard">
                        <img src={nelson} alt="Client" className="testimonialImg" />
                        <p className="testimonialText">
                            “A professional and reliable developer. Highly recommended!”
                        </p>
                        <h3>Aaron Nelson</h3>
                        <div className="stars">★★★★★</div>
                    </div>
                </div>


            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>

                    <input 
                        type="text" 
                        className="name" 
                        placeholder='Your name' 
                        name='from_name' 
                        required
                    />

                    <input 
                        type="email" 
                        className="email" 
                        placeholder='Your Email' 
                        name='from_email' 
                        required
                    />

                    <textarea 
                        name="message" 
                        placeholder='Your Message' 
                        rows={5} 
                        className='msg' 
                        required
                    ></textarea>

                    <button 
                        type="submit" 
                        value="Send" 
                        className='submitBtn'
                    >
                        Submit
                    </button>

                    <div className="links">

                        <a href="https://www.facebook.com/profile.php?id=61584141990682" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className="link" />
                        </a>

                        <a href="https://www.youtube.com/@udeaghaugochi1711" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="link" />
                        </a>

                        <a href="https://www.instagram.com/ugobabby" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>

                        <a href="https://www.linkedin.com/in/eaglesprimetechnology" target="_blank" rel="noopener noreferrer">
                            <img src={linkdinIcon} alt="LinkedIn" className="link linkedinIcon" />
                        </a>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ugochi Grace</span> <br />Website Designer</span>
             <p className="introPara">
                I am a creative and passionate website designer with experience in building
                modern, responsive, and user-friendly websites.

                I specialize in creating clean designs that combine functionality with
                attractive visuals to deliver smooth user experiences across all devices.

                My goal is to help individuals and businesses establish a strong online
                presence through professional and engaging web designs.
             </p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className="btnImg" />
                        Hire Me
                    </button>
                </Link>
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
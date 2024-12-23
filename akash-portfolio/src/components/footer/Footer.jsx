import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Akash</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/akash-verma-664b071a1" className="footer__social-link" target='_blank'>
                <i className='uil uil-linkedin'></i>
            </a>

            <a href="https://github.com/akashverma-lkw" className="footer__social-link" target='_blank'>
                <i className='uil uil-github-alt'></i>
            </a>

            <a href="https://www.instagram.com/akash_verma87/profilecard/?igsh=cDIwb2wxdGlnZjhu" className="footer__social-link" target='_blank'>
                <i className='uil uil-instagram'></i>
            </a>
            </div>

            <span className="footer__copy">Copyright &#169; All right reserved - | 2024</span>
        </div>
    </footer>
  )
}

export default Footer
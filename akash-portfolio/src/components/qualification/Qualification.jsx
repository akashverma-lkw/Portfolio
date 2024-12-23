import React, { useState } from 'react';
import './qualification.css';
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualifcation section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                         toggleState ===1 
                         ? "qualification__button qualification__active button--flex"
                          : "qualification__button button--flex"
                          }
                          onClick={() => toggleTab(1)}
                          >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={
                         toggleState === 2
                         ? "qualification__button qualification__active button--flex"
                          : "qualification__button button--flex"
                          }
                          onClick={() => toggleTab(2)}
                          >
                        <i className="uil uil-briefcase-alt qualification__icon" id='experience'></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ 
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }
                        >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Technology</h3>
                                <span className="qualification__subtitle">Ambalika Institute of Management and Technology</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022-Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Diploma </h3>
                                <span className="qualification__subtitle">Feroze Gandhi Polytechnic</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>  2017-2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">SPN INTER COLLEGE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">SPN INTER COLLEGE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2015
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ 
                        toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }

                        >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">Softpro Pvt. Ltd. - Lucknow</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">InternPe</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>  2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">Learning</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
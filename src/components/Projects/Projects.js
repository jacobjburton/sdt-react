import React, { Component } from 'react';
import './Projects.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Projects extends Component
{
    render()
    {
        var settings = 
        {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            pauseOnDotsHover: true,
            cssEase: 'linear',
            initialSlide: 0,
            swipeToSlide: true,
            draggable: true
        };

        return (
            <div id='projects'>
                
                <div className="projectsWrapper">
                    <h1 className='title'>Projects</h1>                    
                    <div className="project">
                        <h3>Innovative new high end ultrasound system</h3>
                        <div className='projectDetails'>
                            <p>Analog aquisition and multiplexer boards.  These boards provide low noise acquisition of a large number of signals at high speed, format and transmit the data to a digital control board and then to a controlling computer.  The analog signal acquisition board has over 3400 parts and 16 layers with extensive plane and island design to preserve the low noise signals in a noisy digital environment.  Four 676 pin BGA FPGA's provide local control.  Formatted data is transmitted out at 48 Gb/sec.  For more information visit <a href="http://delphinusmt.com" target='_blank' rel='noopener noreferrer'>http://delphinusmt.com</a></p>
                            <div className='projectImages'>
                                <div className='projectImagesInner'>
                                    <span>
                                        <img src={require('../../images/high-end-ultrasound-system/Full Leg First Production shots sm.jpg')} alt="" className='img'/>
                                        <p>Initial Production Shot</p>
                                    </span>
                                    <span>
                                        <img src={require('../../images/high-end-ultrasound-system/MUX_bd-top-sm2.jpg')} alt="" className='img'/>
                                        <p>Multiplexer Board</p>
                                    </span>
                                    <span>
                                        <img src={require('../../images/high-end-ultrasound-system/VTB-top-loaded1sm2-rot.jpg')} alt="" className='img'/>
                                        <p>Signal Acquisition Board</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <h3>Heartstream XLT Defibrillator</h3>
                        <div className='projectDetails2'>
                            <p>System and main controller design.  Overall product validation, test, and regulatory qualification testing.  This was the last product designed by the resuscitation group of Agilent Technologies (previously Hewlett Packard, now Philips) in McMinnville, OR.</p>
                            <div className='projectImages'>
                                <div className='projectImagesInner'>
                                    <span>
                                        <img src={require('../../images/xltdefibwithcase.jpg')} alt=""/>
                                        <p>XLT Defibrillator</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <h3>Inovise Heart Sound Detection Algorithm</h3>
                        <div className='projectDetails2'>
                            <div className='projectImages'>
                                <div className='projectImagesInner'>
                                    <span>
                                        <img src={require('../../images/heartsound-algorithm/HSclipsm.JPG')} alt=""/>
                                    </span>
                                </div>
                            </div>
                            <div className='projectDetailsInner'>
                                <p>Developed the heart sound detection algorithm used in the Inovise Audicor product.  This was an extensive DSP algorithm project that involved data collection, biomedical research and sensitivity-specificity evaluation.  You can view the resulting published application at the United States Patent and Trademark Office:  
                                    <a href="http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PG01&s1=20040267148&OS=20040267148&RS=20040267148" target='_blank' rel='noopener noreferrer'> 20040267148 (30Dec04 - Method and System for Detection of Heart Sounds)</a>.  To view Audicor products visit: <a href="https://inovise.com/" target='_blank' rel='noopener noreferrer'>https://inovise.com</a></p>
                                <p>Received Medical Design Excellence Award in 2004 for development of this algorithm.    
                                    <img className='excellenceAward' src={require('../../images/heartsound-algorithm/MDEAlogo-noboxsm.JPG')} alt=""/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <h3>Large Industrial Research Test System</h3>
                        <div className='projectDetails'>
                            <div className='projectDetailsInner2'>
                                <p>The exact details of this project are proprietary information reserved by the customer.  It has 128 RF channels and puts out about 1.3kW of power.  Responsible for much of the system design and integration as well as design and layout of the multichannel output circuit boards.  This was a project coordinated between 7 local area engineering contractors combining the expertise of Electrical Engineers (analog, digital and RF), Software developers, and Mechanical Engineers.</p>
                                <div>
                                    <h4>System Features:</h4>
                                    <ul>
                                        <li>System board size 13" x 14"</li>
                                        <li>Real time OS with running Windows as an app</li>
                                        <li>High Performance backplanes</li>
                                        <li>FPGA interface and control circuits</li>
                                        <li>128 programmable switching supplies</li>
                                        <li>128 synchronized DDS</li>
                                        <li>Rack mounted 2kW power supply</li>
                                        <li>Matched delay clocks for 16 - 8 channel boards</li>
                                        <li>Matched delay signal routing for 128 channels</li>
                                        <li>Power pad through the board thermal management</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='projectImages'>
                                <div className='projectImagesSlider'>
                                    <Slider {...settings} /*className='slider'*/>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/HPAsys.JPG')} alt="" className='img'/>
                                            <p>Full System</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/Rack.JPG')} alt="" className='img'/>
                                            <p>Output Cabling</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/PS-protoBD.JPG')} alt="" className='img'/>
                                            <p>Prototype Circuit</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/8chSigBd.JPG')} alt="" className='img'/>
                                            <p>8-Channel Board</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/8chSigBd-channel.JPG')} alt="" className='img'/>
                                            <p>Close-up of 1-Channel on 8-Channel Board</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/8chSigBd-fpga.JPG')} alt="" className='img'/>
                                            <p>Close-up of FPGA Circuitry on 8-Channel Board</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/2chSigBd-tops.JPG')} alt="" className='img'/>
                                            <p>2 Channel Prototype Board</p>
                                        </div>
                                        <div className='slide'>
                                            <img src={require('../../images/industrial-research-test-system/OutBd.JPG')} alt="" className='img'/>
                                            <p>Output Board</p>
                                        </div>
                                    </Slider> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <h3>Small Projects</h3>
                        <div className='projectDetails3'>
                            <p>Special Function Compact Flash Interface Card.</p>
                            <div className='projectImages'>
                                <div className='projectImagesInner'>
                                    <span>
                                        <img src={require('../../images/small-projects/CFcardTop.JPG')} alt="" className='img'/>
                                        <p>Top View of CF Interface Card</p>
                                    </span>
                                    <span>
                                        <img src={require('../../images/small-projects/CFcardBottom.JPG')} alt="" className='img'/>
                                        <p>Bottom View of CF Interface Card</p>
                                    </span>
                                </div>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
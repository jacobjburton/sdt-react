import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component
{
    render()
    {
        return (
            <div id='projects'>
                
                <div className="projectsWrapper">
                    <h1 className='title'>Projects</h1>                    
                    <div className="project">
                        <h3>Innovative new high end ultrasound system</h3>
                        <div className='projectDetails'>
                            <p>Analog aquisition and multiplexer boards.  These boards provide low noise acquisition of a large number of signals at high speed, format and transmit the data to a digital control board and then to a controlling computer.  The analog signal acquisition board has over 3400 parts and 16 layers with extensive plane and island design to preserve the low noise signals in a noisy digital environment.  Four 676 pin BGA FPGA's provide local control.  Formatted data is transmitted out at 48 Gb/sec.  For more information visit <a href="http://delphinusmt.com" target='_blank' rel='noopener noreferrer'>http://delphinusmt.com</a></p>
                            <div className='projectImages'>
                                <span>
                                    <img src={require('../../images/high-end-ultrasound-system/Full Leg First Production shots sm.jpg')} alt=""/>
                                    <p>Initial Production Shot</p>
                                </span>
                                <span>
                                    <img src={require('../../images/high-end-ultrasound-system/MUX_bd-top-sm2.jpg')} alt=""/>
                                    <p>Multiplexer Board</p>
                                </span>
                                <span>
                                    <img src={require('../../images/high-end-ultrasound-system/VTB-top-loaded1sm2-rot.jpg')} alt=""/>
                                    <p>Signal Acquisition Board</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
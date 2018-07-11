import React, { Component } from 'react';
import './Services.css';

class Services extends Component
{
    render()
    {
        return (
            <div id='services'>
                <div className='servicesWrapper'>
                    <div className='services'>
                        <h3>Services Offered</h3>
                        <ul>
                            <li>Analog/Digital circuit design</li>
                            <li>Embedded processors and firmware</li>
                            <li>Digital signal processing (DSP) algorithms</li>
                            <li>Battery power systems
                                <ul>
                                    <li>Battery powered devices</li>
                                    <li>Battery chargers</li>
                                    <li>Battery maintenance devices</li>
                                </ul>
                            </li>
                            <li>Product test and manufacturability</li>
                            <li>Printed circuit board (PCB) and product design for environmental and regulatory compatability
                                <ul>
                                    <li>Radio frequency (RF) emissions</li>
                                    <li>Electrostatic discharge (ESD) and RF susceptibility</li>
                                    <li>Temperature performance</li>
                                    <li>And more</li>
                                </ul>
                            </li>
                            <li>Thermal scanning and imaging of power consuming assemblies (Infrared imaging)</li>
                            <li>Schematic capture and PCB design (Multisim/Ultiboard design tools)</li>
                        </ul>
                    </div>
                    <div className='thermalImages'>
                        <img src={require('../../images/IRimage-hot SMT Rs.JPG')} alt=""/>
                        <img src={require('../../images/IRimage-Switching Charger.JPG')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;
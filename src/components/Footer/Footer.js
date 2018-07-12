import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component
{
    render()
    {
        return (
            <div id="footer">
                <div id='innerFooter'>
                    <div id='sectionsWrapper'>
                        <div className='copyright'>
                            <p>©<img className='copyrightLogo' src={require('../../images/Logo2.svg')} alt=''/> 2018 Sirius Design & Technology.  All Rights Reserved.</p>
                        </div>                         
                        <div className='footerSections'>
                            <div className='footerSection'>
                                <p>David Burton, MSEE</p>
                                <p>President</p>
                            </div>
                            <div className='footerSection'>
                                <p>Office</p>
                                <p>2300 SW 2nd Street</p>
                                <p>Suite A</p>
                                <p>McMinnville, Oregon 97128</p>
                            </div>
                            <div className='footerSection'>
                                <p>Phone</p>
                                <p>(503) 332-5176</p>
                                <p>Email</p>
                                <p>dburton@siriusdt.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
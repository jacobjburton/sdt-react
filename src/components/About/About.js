import React, { Component } from 'react';
import './About.css';
import pdf from '../../files/SiriusDT-Info.pdf';

class About extends Component
{
    render()
    {
        return (
            <div id='about'>
                <div className='aboutWrapper'>
                    <p>Sirius Design and Technology, LLC is a contract engineering firm specializing in electrical aspects of product development, design and test.</p>

                    <div className='collaboration'>
                        <span>Through close association with firms offering mechanical and software design we are able to offer multidisciplinary services. These services could be small contained portions of a project you need help with, or could range up to full product design and test - from concept to manufacturing. We have combined product design experience of over 100 years and have completed major projects with customers such as Hewlett Packard, Philips Medical, Delphinus Medical and many others. <br/>
                            <p>View the info sheet: <a className='pdfLink' href={pdf} target="_blank" rel="noopener noreferrer">SiriusDT Info Sheet</a></p>
                        </span>
                        <div className='collaborationImage'>
                            <img className='image' src={require('../../images/MeAtWork.JPG')} alt=""/>
                            <p>David Burton, President, MSEE</p>
                        </div>
                        <div>
                            <span>
                                
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;
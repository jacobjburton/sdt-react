import React, { Component } from 'react';
import './About.css';

class About extends Component
{
    render()
    {
        return (
            <div id='about'>
                <div className='aboutWrapper'>
                    <p>Sirius Design and Technology, LLC is a contract engineering firm specializing in electrical aspects of product development, design and test.</p>

                    <br/>

                    <div className='collaboration'>
                        <p>Through close association with firms offering mechanical and software design we are able to offer multidisciplinary services. These services could be small contained portions of a project you need help with, or could range up to full product design and test - from concept to manufacturing. We have combined product design experience of over 80 years, mostly with Hewlett Packard Company designing a variety of medical instruments.</p>
                        <img className='image' src={require('../../images/mahkeo-222757-unsplash.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
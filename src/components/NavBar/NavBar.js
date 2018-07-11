import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component
{

    render()
    {
        return (
            <div id="navbar">
                <div id="innerNav">
                    <span id="titleWrapper">
                        <h1>
                            <Link id='title' to='/'>
                                <img id='logo' src={require('../../images/152px-Nautical_star.svg.png')} alt="logo"/>
                                Sirius Design & Technology
                            </Link>
                        </h1>
                    </span>
                    <ul id='navMenu'>
                        <li><Link className='navLinks' to='/'>Home</Link></li>
                        <li><Link className='navLinks' to='/about'>About</Link></li>
                        <li><Link className='navLinks' to='/services'>Services</Link></li>
                        <li><Link className='navLinks' to='/projects'>Projects</Link></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default NavBar;
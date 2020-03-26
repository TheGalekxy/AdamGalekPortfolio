import React from 'react';
import './Navigation.css';
import Logo3 from './AdamGalekLogo3.png';

const Navigation = () => {
    return (
        <nav>
            
            <img className="img" src={Logo3} alt="Adam Galek's Logo"/>

            <ul className='nav-links'>
                <li className='f2 link dim near-white underline pa3 pointer'>About</li>
                <li className='f2 link dim near-white underline pa3 pointer'>Projects</li>
                <li className='f2 link dim near-white underline pa3 pointer'>Contact</li>
            </ul>
            

        </nav>
    )
}

export default Navigation;
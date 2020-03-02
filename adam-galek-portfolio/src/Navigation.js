import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='nav'>
            <p className='f3 link dim near-white underline pa3 pointer'>About</p>
            <p className='f3 link dim near-white underline pa3 pointer'>Projects</p>
            <p className='f3 link dim near-white underline pa3 pointer'>Contact</p>
        </nav>
    )
}

export default Navigation;
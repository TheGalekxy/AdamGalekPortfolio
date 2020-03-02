import React from 'react';
import Logo1 from './AdamGalekLogo.png';
import Logo2 from './AdamGalekLogo2.png';
import Logo3 from './AdamGalekLogo3.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <div className="">
                <img className="img" src={Logo3} alt="Adam Galek's Logo"/>
            </div>
        </div>
    )
}

export default Logo;
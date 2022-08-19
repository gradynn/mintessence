import React from 'react';
import './footer.css';
import * as graphicalLogoWhite from '../../assets/graphical-logo-white.png';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return(
		<div className='footerWrapper'>
            <div className='footerSection'>
                <img id='footerLogo' src={graphicalLogoWhite} />
            </div>
			<div className='footerSection'>
				<p className='footerSectionHeader'>
					Connect With Us
				</p>
                <hr />
                <a href='https://www.linkedin.com/company/mintessence/' target='_blank'>
                    <BsLinkedin style={{ 'color': 'white', 'width': '40px', 'height': 'auto' }}/>
                </a>
                <a href='mailto: mintessence@berkeley.edu' style={{'text-decoration': 'none', 'color': 'white'}}>
                    <p>mintessence@berkeley.edu</p>
                </a>
            </div>
		</div>
		
  	);
}

export default Footer;
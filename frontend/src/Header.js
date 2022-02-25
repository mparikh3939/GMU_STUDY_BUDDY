import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD

import PersonIcon from '@material-ui/icons/Person';
import MmsIcon from '@material-ui/icons/Mms';
import IconButton from '@material-ui/core/IconButton';

import "./Header.css"
=======
=======

>>>>>>> a670316 (Formatted a couple of things)
import PersonIcon from '@material-ui/icons/Person';
import MmsIcon from '@material-ui/icons/Mms';
import IconButton from '@material-ui/core/IconButton';
>>>>>>> 0c2edba (Implemented a simple header)

import "./Header.css"

function Header (){
    return(
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
            <img 
                className="header__logo"
                src="data:image/png;base64,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"
                alt="gmu logo"
            />
            
            <IconButton>
                <MmsIcon className="header__icon" fontSize="large" />
            </IconButton>
            

        </div>
    );
}

export default Header;
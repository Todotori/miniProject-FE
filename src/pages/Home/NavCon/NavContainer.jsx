import React from 'react';
// import { Navigation } from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const NavContianer = () => {
    return (
        <div className='navContainer'>
            <input type='checkbox' id='trigger'/>
            <label htmlFor='trigger'>
                <span></span>
                <span></span>
                <span></span>
            </label>
            {/* NOTE : 햄버거 클릭시 */}
            <div className='sidebar'></div>
        </div>
    );
};



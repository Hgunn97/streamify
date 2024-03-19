import NavBar from '../Navigation/NavBar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="mx-auto px-3">
                {children}
            </div>
        </>
    )
}

export default Layout
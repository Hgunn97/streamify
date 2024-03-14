import NavBar from "../Navigation/NavBar";
import React from "react";
import {Container} from "react-bootstrap";


const Layout = ({children}) => {
    return(
        <>
            <NavBar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout
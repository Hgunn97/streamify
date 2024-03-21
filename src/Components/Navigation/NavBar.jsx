import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Movie Finder</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
            <Container className='navbar-collapse custom-navbar'>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>
                            About Me
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#timeline" className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('timeline')}>
                            Career Timeline
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SearchContext } from '../Context/SearchContext';
import { useContext } from 'react';

function NavBar() {

    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary h-100">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt="logo-jf"
                        src="./../src/assets/favicon.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top logo-icon"
                    />{' '}
                    <span className='logo-name'>MJ React.js</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className='nav-home'>Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
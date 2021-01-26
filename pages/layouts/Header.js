import Head from 'next/head';

import {Navbar , Nav , NavDropdown} from 'react-bootstrap';

const Header = () => (

    <div style = {{marginBottom : '5%'}}>

<Head>
    <title>News App</title>
    <link rel = "icon" href = "/facicon.ico"/>
</Head>
<Navbar fixed = "top" collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
    <Navbar.Brand href = "/">SGIDUS</Navbar.Brand>
    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
    <Navbar.Collapse id = "responsive-navbar-nav">
<Nav>
    <NavDropdown title = "News" id = "collasible-nav-dropdown">
    <NavDropdown.Item href = "/business">Busniess</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href = "/technology">Technology</NavDropdown.Item>
    </NavDropdown>
</Nav>
    </Navbar.Collapse>
</Navbar>
    </div>
)

export default Header
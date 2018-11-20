import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import SignUp from './SignUp';

class home extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen:false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        return (
            <div>
                <div className="navHome">
                	<Navbar color="faded" light expand="md">
                        <NavbarBrand href='/' className="mr-auto">B.H.S </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                              <NavItem>
                                <NavLink href="/">About</NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
                              </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>


                <div className="bg">
                    <Container>
                        <Row>
                            <Col xs="8" sm="8">
                                <h1 className="slogan 
                                             text-center 
                                             pagination-centered">
                                             B.H.S Document </h1>
                                <h2 className="sub-slogan text-center ">
                                    Collaborate <span class="dot"></span> Create <span class="dot"></span> Write
                                </h2>
                            </Col>
                            <Col className="signup-col" sm="4">
                                <SignUp />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
};

export default home;
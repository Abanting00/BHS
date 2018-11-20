import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from "react-sidebar";
import './Dashboard.css';
import avatar from './head.jpg';


class dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: true,
        modal: false
      };

      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      this.toggle = this.toggle.bind(this);

  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

   toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 

  render() {
      return (
          <div>
              <div className="navHome">
              	<Navbar color="faded" light expand="md">
                      <NavbarBrand href='/' className="mr-auto">B.H.S </NavbarBrand>
                      <Collapse navbar>
                          <Nav className="ml-auto" navbar>
                            <NavItem>
                              <NavLink href="/">Account</NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="/">Logout</NavLink>
                            </NavItem>
                          </Nav>
                      </Collapse>
                  </Navbar>
              </div>


              <div className="dashboard">
                <Container fluid={true}>
                  <Row>
                    <Col xs="auto" style={{padding: 0}}>
                      <div className="dashbox">
                        
                        <Row className="avatar-box">
                          <Col sm="12" md={{ size: 8, offset: 4 }} style={{padding: 0}}>
                            <img className="avatar" src={avatar} alt="Avatar"/>
                          </Col>
                        </Row>
                      
                      <div className="text-center dashboard-links">
                              <h3 className="dash-text">Recent</h3>
                              <h3 className="dash-text">Create</h3>
                              <h3 className="dash-text">Shared With Me</h3>
                              <h3 className="dash-text">All Documents</h3>
                            </div>
                      </div>

                    </Col>
                    

                    <Col xs="auto" style={{padding: 0}}>
                      
                      <div className="docs">
                        <Row style={{padding: '40px 10px', width: '75vw', margin:0}}>
                          <Col sm="4">
                            <Card>
                              <CardImg top width="100%" src="https://dummyimage.com/318x180/ffffff/ffffff.jpg" alt="Card image cap" />
                              <CardBody>
                                  <CardTitle className="text-center">Document Title</CardTitle>
                                  
                                  <Button color="info" 
                                          onClick={this.toggle}
                                          style={{display: "block", margin: "0 auto"}}
                                          >Open Document</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                      <ModalHeader toggle={this.toggle}>Cats and Dogs</ModalHeader>
                                      <ModalBody>

                                        <p className="text-center">
                                          This document is about cats and dogs.
                                        </p>

                                        <p className="text-center">
                                          Status: <span style={{color: 'green'}}>Open</span>
                                        </p>
                                      </ModalBody>
                                      <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Edit Doc</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                      </ModalFooter>
                                    </Modal> 
                              </CardBody>
                            </Card>
                          </Col>

                            <Col sm="4">
                            <Card>
                              <CardImg top width="100%" src="https://dummyimage.com/318x180/ffffff/ffffff.jpg" alt="Card image cap" />
                              <CardBody>
                                  <CardTitle className="text-center">Software Notes</CardTitle>
                                  
                                  <Button color="info" 
                                          onClick={this.toggle}
                                          style={{display: "block", margin: "0 auto"}}
                                          >Open Document</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                      <ModalHeader toggle={this.toggle}>Cats and Dogs</ModalHeader>
                                      <ModalBody>

                                        <p className="text-center">
                                          This document is about cats and dogs.
                                        </p>

                                        <p className="text-center">
                                          Status: <span style={{color: 'green'}}>Open</span>
                                        </p>
                                      </ModalBody>
                                      <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Edit Doc</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                      </ModalFooter>
                                    </Modal> 
                              </CardBody>
                            </Card>
                          </Col>

                            <Col sm="4">
                            <Card>
                              <CardImg top width="100%" src="https://dummyimage.com/318x180/ffffff/ffffff.jpg" alt="Card image cap" />
                               <CardBody>
                                  <CardTitle className="text-center">Cats and Dogs</CardTitle>
                                  
                                  <Button color="info" 
                                          onClick={this.toggle}
                                          style={{display: "block", margin: "0 auto"}}
                                          >Open Document</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                      <ModalHeader toggle={this.toggle}>Cats and Dogs</ModalHeader>
                                      <ModalBody>

                                        <p className="text-center">
                                          This document is about cats and dogs.
                                        </p>

                                        <p className="text-center">
                                          Document Permission: Public                                        </p>

                                        <p className="text-center">
                                          Document Status: <span style={{color: 'green'}}>Open</span>
                                        </p>
                                      </ModalBody>
                                      <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Edit Doc</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                      </ModalFooter>
                                    </Modal> 
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
          </div>
      );
    }
};

export default dashboard;
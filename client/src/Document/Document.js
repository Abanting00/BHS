import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert,InputGroup, InputGroupAddon, InputGroupText, Input, Table } from 'reactstrap';

import './Document.css';

class document extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      modal: false,
      modal2: false
    };
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

   toggle2() {
    this.setState({
      modal2: !this.state.modal2
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
                              <div className="navDoc">
                                <NavItem>
                                  <NavLink href="/">Member List</NavLink>
                                </NavItem>
                              </div>

                              <div className="navDoc">
                                <NavItem>
                                  <NavLink href="/">History</NavLink>
                                </NavItem>
                              </div>

                              <div className="navDoc">
                                <UncontrolledDropdown nav>
                                  <DropdownToggle nav caret>
                                    Edit Permission
                                  </DropdownToggle>
                                  <DropdownMenu right>
                                    <DropdownItem>
                                      Public
                                    </DropdownItem>
                                    <DropdownItem>
                                      Restricted
                                    </DropdownItem>
                                    <DropdownItem>
                                      Shared
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                      Private
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </div>

                              <NavItem className="navDoc">
                                  <NavLink onClick={this.toggle}>Invite</NavLink>

                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                      <ModalHeader toggle={this.toggle}>Member List</ModalHeader>
                                      <Table >
                                        <thead>
                                          <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Role</th>
                                            <th>Report</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Guest User</td>
                                            <td><Button color="danger">Report</Button>{' '}</td>
                                          </tr>
                                          <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@jayt</td>
                                            <td>Ordinary User</td>
                                            <td><Button color="danger">Report</Button>{' '}</td>
                                          </tr>
                                          <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>Ordinary User</td>
                                            <td><Button color="danger">Report</Button>{' '}</td>
                                          </tr>
                                        </tbody>
                                      </Table>
      
                                      <ModalFooter>
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
                                      </ModalFooter>
                                    </Modal> 
                              </NavItem>

                              <NavItem>
                                <Button color="info" 
                                          onClick={this.toggle}
                                          style={{display: "block", margin: "0 auto"}}
                                          >Save</Button>
                              </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>

              <div className="doc-bg">

 
                <form>
                  <div>
                        <textarea>Some  text </textarea>
                  </div>
                </form>
              </div>
            </div>
        );
    }
};

export default document;
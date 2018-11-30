import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import Login from './Login';

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
                            <Login />
                          </Col>
                      </Row>
                  </Container>
              </div>
            </div>
        );
    }
}; // haven't pushed

export default home;
import React, {Component} from 'react';
import { Card, CardTitle, CardImg } from 'reactstrap';
import { CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Dashboard.css';
import avatar from './head.jpg';
import CardList from './CardList';


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
                    

                    <Col style={{padding: '0'}}>
                      <div className="docs">
                        <CardList/>
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
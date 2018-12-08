import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Dashboard.css';
import avatar from './head.jpg';
import CardList from './CardList';
import CreateDoc from './CreateDoc';

class dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        option: 'Recent'
      };

      this.toggle = this.toggle.bind(this);
      this.onClickMode = this.onClickMode.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onClickMode(e) {
    this.setState({
      option: e.target.name
    });  
  }

  render() {
    console.log(this.state.option)
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
                              <button name="Recent" className="dash-text"  onClick={this.onClickMode}>Recent</button>
                              <br />
                              <button name="Create" className="dash-text"  onClick={this.toggle}>Create</button>
                              <br />
                              <button name="Shared" className="dash-text"  onClick={this.onClickMode}>Shared</button>
                              <br />
                              <button name ="Owned" className="dash-text"  onClick={this.onClickMode}>Owned</button>
                            </div>
                      </div>
                    </Col>

                    <Col style={{padding: '0'}}>
                      <div id="docs">
                        <div id="list">
                          <CardList option={this.state.option}/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>



              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Create Document</ModalHeader>
                <ModalBody>
                  <CreateDoc />
                </ModalBody>
              </Modal> 
          </div>
      );
    }
};

export default dashboard;
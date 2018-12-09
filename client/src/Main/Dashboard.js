import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Dashboard.css';
import avatar from './head.jpg';
import CreateDoc from './CreateDoc';
import Search from './Search';



class dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        option: 'Recent',
        search: false
      };

      this.toggle = this.toggle.bind(this);
      this.toggleSearch = this.toggleSearch.bind(this);
      this.onClickMode = this.onClickMode.bind(this);
  }

  toggleSearch() {
    this.setState({
      search: !this.state.search
    });
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

                          <div className="center-icons">
                            <i className="material-icons icons" onClick={this.toggleSearch}>search</i>
                            <i className="material-icons icons">person</i>
                            <i className="material-icons icons">settings</i>
                          </div>
                      </div>
                    </Col>

                    <Col style={{padding: '0'}}>
                      <Search active={this.state.search} option={this.state.option}/>
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
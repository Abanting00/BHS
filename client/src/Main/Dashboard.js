import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Dashboard.css';
import avatar from './head.jpg';
import CreateDoc from './CreateDoc';
import Search from './Search';
import Members from './Members';
import Profile from './Profile.js';
import Taboo from './Taboo';

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        option: 'Recent',
        search: false,
        members: false,
        settings: false,
        taboo: false
      };

      this.toggle = this.toggle.bind(this);
      this.toggleSettings = this.toggleSettings.bind(this);
      this.toggleSearch = this.toggleSearch.bind(this);
      this.toggleTaboo = this.toggleTaboo.bind(this);
      this.toggleMembers = this.toggleMembers.bind(this);
      this.onClickMode = this.onClickMode.bind(this);
  }

  toggleTaboo() {
     this.setState({
      taboo: !this.state.taboo
    });
  }

  toggleSettings() {
    this.setState({
      settings: !this.state.settings
    });
  }

  toggleMembers() {
    this.setState({
      members: !this.state.members
    });
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
                        <i className="material-icons settings" onClick={this.toggleSettings}>settings</i>
                        <br />
                        <Row className="avatar-box">
                          <Col sm="12" md={{ size: 6, offset: 5 }} style={{padding: 0}}>
                            <img className="avatar" src={avatar} alt="Avatar"/>
                          </Col>
                        </Row>
                      
                        <div className="text-center dashboard-links">
                          <button name="Popular" className="dash-text" onClick={this.onClickMode}>Popular</button>
                          <br />
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
                            <i className="material-icons icons" onClick={this.toggleMembers}>people</i>
                            <i className="material-icons icons" onClick={this.toggleTaboo}>list_alt</i>
                          </div>
                      </div>
                    </Col>

                    <Col style={{padding: '0'}}>
                      <Search active={this.state.search} option={this.state.option}/>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Members docmember={false} members={this.state.members} toggle={this.toggleMembers} />
              <Profile open={this.state.settings} toggle={this.toggleSettings} />
              <Taboo open={this.state.taboo} toggle={this.toggleTaboo} />
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

export default Dashboard;
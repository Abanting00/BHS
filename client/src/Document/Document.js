import React, {Component} from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchDoc } from '../Actions/docActions';
import { fetchTabooList } from '../Actions/tabooActions';
import { getUserID } from '../Helper/authHeader';
import './Document.css';
import DocNav from './docNav';

class Document extends Component {
    constructor(props) {
    super(props);

    this.state = {
      body: this.props.body,
      id: this.props.location.state.id,
      view: this.props.location.state.view,
      owner: this.props.location.state.owner,
      clean: true  
    }

    this.onChange = this.onChange.bind(this);
    this.edit = this.edit.bind(this);
    this.onChangeHist = this.onChangeHist.bind(this);
  }

  componentWillMount() {
    this.props.fetchDoc(this.state.id); 
    this.props.fetchTabooList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      body: nextProps.body
    })
  }

  onChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  onChangeHist(history) {
    this.setState({
      body: history
    })
  }

  edit() {
    const x = this.props.words
    let tabooWords = []
    x.map(x => tabooWords.push(x.word));
    let currentBody = this.state.body;
    let editedBody = currentBody;

    for(let i = 0; i < tabooWords.length; i++){
      let edit = new RegExp('\\b('+tabooWords[i]+')\\b',"gi"); 
      editedBody = editedBody.replace(edit, "UNK");
    }
    if(currentBody == editedBody){
      this.setState({
        body: editedBody,
        clean: true
      })
    }

    else{
      this.setState({
        body: editedBody,
        clean: false
      })
    }
  }

  render() {
    let textarea;

    if(this.state.view === 'R'){
      textarea = <textarea className="body" value={this.state.body} onChange={this.onChange} readOnly></textarea>
    }else{
      textarea = <textarea className="body" value={this.state.body} onChange={this.onChange}></textarea>
    }

    return (
      <div>
        <DocNav owner={this.state.owner} body={this.state.body} id={this.state.id} edit={this.edit} viewHistory={this.onChangeHist}/> 
        <div className="doc-bg">
              {!this.state.clean && <Alert color="danger">Please remove taboo words!</Alert>}
              <form>
                <div>
                  {textarea}
                </div>
              </form>
        </div>
      </div>
    );
  }
};    

const mapStateToProps = state => ({
  doc: state.docs.doc,
  body: state.docs.body,
  words: state.words.items
})


export default connect(mapStateToProps, { fetchDoc, fetchTabooList })(Document);
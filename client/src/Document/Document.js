import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDoc, saveDoc } from '../Actions/docActions';
import { fetchTabooList } from '../Actions/tabooActions';
import { getUserID } from '../Helper/authHeader';
import './Document.css';

class document extends Component {
    constructor(props) {
    super(props);

    this.state = {
      body: this.props.body,
      id: this.props.location.state.id 
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    const x = this.props.words
    let tabooWords = []
    x.map(x => tabooWords.push(x.word));
    let currentBody = this.state.body;
    let editedBody = currentBody;

    for(let i = 0; i < tabooWords.length; i++){
      let edit = new RegExp('\\b('+tabooWords[i]+')\\b',"gi"); 
      editedBody = editedBody.replace(edit, "UNK");
    }

    this.setState({
      body: editedBody
    })

    const docData = {
      id: this.state.id,
      body: editedBody,
      modified_by: getUserID()
    }

    this.props.saveDoc(docData);
  }

  render() {
    return (
      <div className="doc-bg">
          <button onClick={this.onSubmit}>Save</button> 
            <form>
              <div>
                <textarea className="body" value={this.state.body} onChange={this.onChange}></textarea>
              </div>
            </form>
      </div>
    );
  }
};    

const mapStateToProps = state => ({
  doc: state.docs.doc,
  body: state.docs.body,
  words: state.words.items
})


export default connect(mapStateToProps, { fetchDoc, saveDoc, fetchTabooList })(document);
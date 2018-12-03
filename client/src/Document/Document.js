import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDoc, saveDoc } from '../Actions/docActions';
import './Document.css';

class document extends Component {
    constructor(props) {
    super(props);

    this.state = {
      body: this.props.body
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const id = "5bfdc6516ee56a4118ecc098"
    this.props.fetchDoc(id);
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
    const docData = {
      id: "5bfdc6516ee56a4118ecc098",
      body: this.state.body
    }

    this.props.saveDoc(docData);

  }

  replaceTaboo() {

  }

  render() {
    console.log(this.props.body)
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
  body: state.docs.body
})


export default connect(mapStateToProps, { fetchDoc, saveDoc })(document);
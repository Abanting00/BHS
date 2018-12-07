import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDoc, saveDoc } from '../Actions/docActions';
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
      id: this.state.id,
      body: this.state.body
    }

    this.props.saveDoc(docData);

  }

  render() {
    console.log(this.state.id)
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
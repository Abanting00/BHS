import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDoc } from '../Actions/docActions';
import './Document.css';

class document extends Component {
    constructor(props) {
    super(props);

    this.state = {
      body: ''
    }
  }

  componentWillMount() {
    const id = "5bfdc6516ee56a4118ecc098"
    this.props.fetchDoc(id);

    this.setState({
      body: this.props.doc
    })
  }

  render() {
     console.log(this.props.doc);
    return (
      <div className="doc-bg">
            <form>
              <div>
                <textarea value={this.state.body}>{this.props.body}</textarea>
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


export default connect(mapStateToProps, { fetchDoc })(document);
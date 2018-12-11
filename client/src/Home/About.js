import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css';


class About extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen:false
        };
    }

    render() {
        return (
            <div>
                <div className="bg">

                </div>
            </div>
        );
    }
};

export default About;
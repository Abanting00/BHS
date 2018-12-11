import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css';


class About extends Component {
    render() {
        return (
            <div className="About-pg">
                <div className="info">
                    <h1>About</h1>
                    <div className="main-text">
                        <p>B.H.S' File Document Sharing System is developed by Abigal
                            Carlos & Josue for Jie Wie's CS322
                        </p>
                    </div>
                </div>


            </div>
        );
    }
};

export default About;
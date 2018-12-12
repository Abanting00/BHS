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
                        <p>B.H.S' File Document Sharing System is developed by Abigail Banting,
                            Carlos Saravia & Josue Hernandez for Jie Wie's <a href="http://www-cs.engr.ccny.cuny.edu/~csjie/322.html">322</a>
                        </p>
                        <p>View Source on: <b> <a href="https://github.com/Abanting00/BHS">Github</a> </b></p>
                    </div>
                </div>


            </div>
        );
    }
};

export default About;
import React from 'react';
import VisitingCard from '../images/VC.JPG';
import {Row, Col} from 'react-bootstrap';
//import withRouter from 'react-router-dom/withRouter';

export default class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        };
    }

    //Updates data after asynchronous data load
    componentWillReceiveProps(nextProps){
        this.setState(nextProps);
    }

    render() {
      return (
        <div style={{background:'#FFE2E2', padding:'3%', marginTop:'3%'}}>
            <Row>
                <Col xs={3} lg={2} md={2}><b>Seema Chamoli (Founder Director)</b></Col>
                <Col xs={5} lg={5} md={5}>
                    <b><p>146 Bhagirathipuram, Lane 10, Jakhan, Dehradun - 248001</p>
                    <p>+91 8939163417</p>
                    <p>seemachamoli22@yahoo.co.in</p>
                    <p>www.woodsorrel.in</p></b>
                </Col>
                <Col xs={4} lg={4} md={4}><img style={{background:'lightgrey'}} src={VisitingCard} className='img-responsive img-thumbnail' alt='contact us 1'></img></Col>
            </Row>
        </div>
      );
    }
}
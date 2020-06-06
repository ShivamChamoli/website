import React from 'react';
import GoogleMap from './GoogleMap';
import { Row, Col } from 'react-bootstrap';
//import withRouter from 'react-router-dom/withRouter';

export default class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        };
    }

    //Updates data after asynchronous data load
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        return (
            <div style={{ background: '#FFE2E2', padding: '3%', marginTop: '3%' }}>
                <Row>
                    <Col xs={6} lg={6} md={6}>
                        <b><p>146 Bhagirathipuram, Lane 10, Jakhan, Dehradun - 248001</p></b>
                    </Col>
                    <Col xs={6} lg={6} md={6}><GoogleMap lat={48.00} lng={-122.00}/></Col>
                </Row>
            </div>
        );
    }
}
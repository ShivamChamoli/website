import React from 'react';
import FeeStructure from '../images/feestructure.JPG';
import {Row, Col} from 'react-bootstrap';
//import withRouter from 'react-router-dom/withRouter';

export default class Admissioninformation extends React.Component {
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
        <div>
            <Row>
                <Col><img src={FeeStructure} className='img-responsive' alt='Fee structure'></img></Col>
            </Row>
        </div>
      );
    }
}
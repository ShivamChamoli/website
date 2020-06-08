import React from 'react';
import FeeStructure from '../images/feestructure.JPG';
import { Row, Col } from 'react-bootstrap';
import '../css/Admissioninformation.css';
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
                  <Col><p className='smaller-text'>*The monthly fees is a recurring fee charged at the beginning of the month, annual charges are taken once every year and the rest of the charges are one time.</p></Col>
              </Row>
            <Row>
                <Col><img src={FeeStructure} className='img-responsive' alt='Fee structure'></img></Col>
            </Row>
        </div>
      );
    }
}
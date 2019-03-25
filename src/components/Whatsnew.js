import React from 'react';
import {Carousel} from 'react-bootstrap';
import AdmissionOpen from '../images/admissionopen.jpeg';
import BabyShow from '../images/babyshow.jpeg';
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default class Whatsnew extends React.Component {
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
            <div>
                <h3>
                    Whats New
                </h3>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img src={AdmissionOpen} className="d-block w-100 img-responsive center-block" alt="First slide" />
                        {/*<Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={BabyShow} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    {/*<Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>*/}
                </Carousel>
            </div>
        </div>
      );
    }
}
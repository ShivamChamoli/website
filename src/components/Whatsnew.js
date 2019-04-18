import React from 'react';
import {Carousel} from 'react-bootstrap';
import AdmissionOpen from '../images/admissionopen.jpeg';
import bs1 from '../images/bs1.JPG';
import bs2 from '../images/bs2.JPG';
import bs3 from '../images/bs3.JPG';
import bs4 from '../images/bs4.JPG';
import bs5 from '../images/bs5.JPG';
import bs6 from '../images/bs6.JPG';
import bs7 from '../images/bs7.JPG';
import bs8 from '../images/bs8.JPG';
import bs9 from '../images/bs9.JPG';
import bs10 from '../images/bs10.JPG';
import bs11 from '../images/bs11.JPG';
import bs12 from '../images/bs12.JPG';
import bs13 from '../images/bs13.jpg';
import bs14 from '../images/bs14.JPG';
import creativeskills from '../images/creativeskills.png';
import '../css/Whatsnew.css';
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
            <div className="carousel-settings">
                <Carousel>
                    <Carousel.Item>
                        <img src={AdmissionOpen} className="d-block w-100 img-responsive center-block" alt="First slide" />
                        {/*<Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={creativeskills} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                        <Carousel.Caption>
                        <h3>Details for the Summer Camp coming soon!</h3>
                        <p>Take home the Early bird and the Army discount while it lasts!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Baby Ivan in the ball pool</h3>
                        </Carousel.Caption>
                        <img src={bs1} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Don't worry, he figured it out later!</h3>
                        </Carousel.Caption>
                        <img src={bs2} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Baby Yashwardhan in the ball pool</h3>
                        </Carousel.Caption>
                        <img src={bs3} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Trust us, that teddy is friendly!</h3>
                        </Carousel.Caption>
                        <img src={bs4} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Baby Ivan in the zone for some creativity</h3>
                        </Carousel.Caption>
                        <img src={bs5} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>The adults to their usual, business!</h3>
                        </Carousel.Caption>
                        <img src={bs6} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        {/*<Carousel.Caption>
                        <h3>Baby Ivan in the ball pool</h3>
                        </Carousel.Caption>*/}
                        <img src={bs7} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Where did that water go?</h3>
                        </Carousel.Caption>
                        <img src={bs8} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>We will name it Woodsorrel!!</h3>
                        </Carousel.Caption>
                        <img src={bs9} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>1st Birthday</h3>
                        </Carousel.Caption>
                        <img src={bs10} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Our toys do seem to bring out the best in them</h3>
                        </Carousel.Caption>
                        <img src={bs11} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Slide away, my boy!</h3>
                        </Carousel.Caption>
                        <img src={bs12} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Oops, thats not chocolate!</h3>
                        </Carousel.Caption>
                        <img src={bs13} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Mr Chubby Cheeks goes to Baby Ivan!</h3>
                        </Carousel.Caption>
                        <img src={bs14} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
      );
    }
}
import React from 'react';
import '../css/Aboutus.css';
import {Row, Col} from 'react-bootstrap';
import founderDirector from '../images/mom.png';
import vision from '../images/vision.png';
import mission from '../images/mission.png';
//import withRouter from 'react-router-dom/withRouter';

export default class Aboutus extends React.Component {
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
            <h4>
                OUR PHILOSOPHY
            </h4>
            <Row>
                <Col xs={12} lg={12} md={12}><p>Wood sorrel offers an <b>intimate, high quality preschool program for 
                    2-5 year olds.</b> Children during <b>preschool years learn more, and at a 
                    greater speed</b> than at any other time in their lives. Research 
                    shows that <b>half of a child’s adult intelligence</b> is formed during the 
                    first four years of his life and a child during these years has an all 
                    absorbent mind. He simply soaks up every experience. <b>He learns by 
                    sound, sight, taste smell and touch.</b></p>
                    <p>This is the <b>best time to focus on developing the overall personality</b> 
                    of a child. <b>Wood sorrel provides an ideal environment</b> for the 
                    <b>all around</b> development of a child by following <b>Montessori inspired 
                    child led/teacher facilitated/play based intensive preschool 
                    curriculum</b>. This system requires that the <b>children are placed in a 
                    well planned and structured environment</b> in which the child grows and 
                    learns in a natural way. The children are <b>free to follow their own 
                    interests within this planned environment</b>, rather than being forced 
                    to learn something that is inappropriate for their development stage. 
                    <b>As a result children develop in a natural way and are highly 
                    motivated. They develop good discipline and master basic skills</b>. 
                    Aspects of Reggio Emilia and other programs are sprinkled throughout 
                    as well.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} lg={6} md={6}><img style={{background:'lightgrey'}} src={vision} className="img-responsive img-thumbnail" alt="founder director" /></Col>
                <Col xs={6} lg={6} md={6}><img style={{background:'lightgrey'}} src={mission} className="img-responsive img-thumbnail" alt="founder director" /></Col>
            </Row>
            <h4 style={{marginTop: '3%'}}>
                DIRECTOR’S PROFILE 
            </h4>
            <Row>
            <Col xs={8} lg={8} md={8}><p>Mrs. Seema Chamoli
                    the founder director of Woodsorrel, Angels' Meadow, is a <b>reputed educationist and has worked with children her whole career</b> and earned invaluable experience in the teaching and administrative field.</p>
                    <p>She is <b>thoughtful, compassionate and highly skilled at working with young children</b>. She approaches <b>each child as an individual</b> and learns about where they are <b>emotionally and developmentally</b> so that she can best facilitate their learning. 
                    The most important areas of her <b>specializations include 'Childhood Education and Nutrition'</b>.</p> <p>Childhood Education emerged as an interest, evolved as a passion and took over all other interests of Mrs. Seema Chamoli.
                    She has <b>experience in private, public and hi-tech preschool settings</b>. She has worked in various Schools and in the best Pre-schools of India.  She has also worked as the VP of educational projects with Futomic Consultancy.</p>
                    <p><b>Realizing the necessity of world class Pre-school in Dehra Dun</b>, she nurtured the <b>concept of Woodsorrel Angels Meadow which is a blend of modernity and traditions</b>. It aims to <b>prepare the children for success in today’s competitive environment and be an excellent global citizen</b>.</p>
                </Col>
                <Col xs={4} lg={4} md={4}> <img style={{background:'lightgrey'}} src={founderDirector} className="img-responsive img-thumbnail" alt="founder director" /> </Col>
            </Row>
        </div>
      );
    }
}
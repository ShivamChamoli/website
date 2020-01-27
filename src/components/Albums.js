import React from 'react';
import '../css/Albums.css';
import { Row } from 'react-bootstrap';
import CarouselDefault from './CarouselDefault.js';

export default class Albums extends React.Component {
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
        const boxShadowStyle = {
            height: "400px",
            width: "60%",
            //boxShadow: "10px 10px 5px grey",
            border: "1px solid grey",
            marginLeft: "1%",
            marginBottom: "2%",
            display: "inline-block"
        }
        const inlineDiv = {
            display: "inline-block",
            width: "33%",
            marginLeft: "2%",
            position: 'absolute'
        }
        return (
            <div style={{ background: '#FFE2E2', padding: '3%', marginTop: '3%'}}>
                <Row>
                    <div style={boxShadowStyle}><CarouselDefault albumName='christmas' /></div>
                    <div style={inlineDiv}>The chilly morning, the freezing nights, the morning fog...Yes...Christmas the season of joy, love and sharing is here! Celebrating Christmas with these little angels is so much fun as they make the atmosphere energetic and joyful.....Woodsorrel had a whole week of Christmas fun ‘n’ frolic🎈🎈🎂🎁</div>
                </Row>
                <Row>
                    <div style={boxShadowStyle}><CarouselDefault albumName='diwali' /></div>
                    <div style={inlineDiv}>Its Diwali time, the festival of lights....celebrations have begun in Woodsorrel Angels’Meadow...children were involved in some beautiful Diwali crafts, covered the art table made Diwali lanterns, Rangoli Diya and did Diya hanging. Moreover, there was singing and dancing.....little lamps are burning bright, burning bright, burning bright, its Diwali.</div>
                </Row>
                <Row>
                    <div style={boxShadowStyle}><CarouselDefault albumName='assessment' /></div>
                    <div style={inlineDiv}>Parents got the opportunity to speak directly with the teacher about the child’s progress and school experience during Assessment Time on 21st December 2019......learning shouldn’t finish when the child leaves school at the end of the day, and with parents on board it is much easier to help these little ones reach their potential.</div>
                </Row>
                <Row>
                    <div style={boxShadowStyle}><CarouselDefault albumName='vidyarambham' /></div>
                    <div style={inlineDiv}>Woodsorrel Angels’ Meadow hosted a special Vidyarambham-Initiation of writing where kids between two and three years are formally initiated into learning. The child is made to write on the barley spread in a plate. It is believed that the child gets the learning initiative blessed by Goddess Saraswati on this auspicious day of Navratri.</div>
                </Row>
            </div>
            //<div style={boxShadowStyle}></div>
        );
    }
}
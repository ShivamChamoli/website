import React from 'react';
//import withRouter from 'react-router-dom/withRouter';

export default class Oursystem extends React.Component {
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
                FLEXIBLE CURRICULUM
            </h4>
            <p style={{paddingTop:'2%'}}>
                <b>Play Group curriculum program: </b> Our Play Group themes are geared towards children aged 20
                months to about 2.5 years. This program is aimed at teaching the toddlers colors, shapes, numbers up
                to 10, and some of the alphabets. Children will use glue, paints, songs, rhymes/stories along
                with other fun activities that goes along with that week's theme to stimulate an all around growth.
            </p>
            <p>
                <b>Preschool curriculum program: </b> Our Preschool curriculum program is geared towards children aged 2.5 years to about 5 years. Our
                curriculum includes circle time, art time, learning time and a special activity for five days per
                week. The curriculum is aimed at teaching the children about shapes, colors, upper and lower case
                alphabets, numbers, learning to tell time, learning a few beginning sounds, simple science activities
                and so much more. Children will be using glue, paints and working on learning how to cut, trace, tell time
                plus work on pre math, pre reading and science. An example science project would be sorting
                fruits and vegetables, growing plants, and many more exciting activities!!
            </p>
        </div>
      );
    }
}
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
        <div>
            <h3>
                Our System
            </h3>
            <p>
            <b>Play Group curriculum program: </b> Our Play Group themes are geared towards children 20
            months to about 2.5 years. Our curriculum is aimed at teaching the toddlers colors, shapes, numbers up
            to 10, and some of the alphabet. Children will be using glue, paint. Songs/finger rhymes/stories, along
            with other fun activities are planned for the children to do each day that goes along with that weeks
            theme.
            </p>
            <p>
            <b>Preschool curriculum program: </b> Our Preschool curriculum program are geared towards children 2.5 up to 5 years old. Our
            curriculum includes circle time, art time, learning time and a special activity for five days per
            week. Our curriculum is aimed at teaching the children their shapes, colors, upper and lower case
            alphabet and numbers, learning to tell time, learning a few beginning sounds, simple science activities
            and so much more. Children will be using glue, paint and working on learning how to cut, trace, tell time
            plus work on pre math, pre reading and science. Some of the simple science projects would be sorting
            fruits and vegetables, growing plants, and so many other exciting activities!!
            </p>
        </div>
      );
    }
}
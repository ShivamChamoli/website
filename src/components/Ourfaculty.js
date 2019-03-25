import React from 'react';
//import withRouter from 'react-router-dom/withRouter';

export default class Ourfaculty extends React.Component {
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
                Our Faculty
            </h3>
            <p>
            Woodsorrel is managed by teams of professional, comprising of people with rich experiences in the field
            of Early Childhood Education. All our staff is chosen for their kind, patient nature. Experienced and
            loving teachers are our biggest strength. We believe in making “Teaching a Joy and Learning a Pleasure”.
            </p>
        </div>
      );
    }
}
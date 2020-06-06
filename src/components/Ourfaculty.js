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
        <div style={{background:'#FFE2E2', padding:'3%', marginTop:'3%'}}>
            <p>
            Woodsorrel is managed by a team of professionals, comprising of people with rich experiences in the field
            of Early Childhood Education. Our staff is chosen for their kind and patient nature. Experienced and
            loving teachers are our biggest strength. We believe in making “Teaching a Joy and Learning a Pleasure”.
            </p>
        </div>
      );
    }
}
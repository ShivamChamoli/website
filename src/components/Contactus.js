import React from 'react';
//import withRouter from 'react-router-dom/withRouter';

export default class Contactus extends React.Component {
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
                Contact Us
            </h3>
            <p>
                <li>Seema Chamoli: </li>
                <li>Sunil Chamoli: </li>
            </p>
        </div>
      );
    }
}
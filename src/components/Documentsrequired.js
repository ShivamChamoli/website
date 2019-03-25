import React from 'react';
//import withRouter from 'react-router-dom/withRouter';

export default class Documentsrequired extends React.Component {
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
                Documents Required
            </h3>
            <p>
                <li>Xerox copy of birth certificate</li>
                <li>Four passport size photographs and one stamp size photographs are to be submitted at the
            time of registration.</li>
            </p>
        </div>
      );
    }
}
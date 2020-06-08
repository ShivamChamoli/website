import React from 'react';
import { Link } from 'react-router-dom';

export default class Ourfaculty extends React.Component {
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
        return (
            <div style={{ background: '#FFE2E2', padding: '3%', marginTop: '3%' }}>
                <Link className="bigger-text" to="https://tinyurl.com/ydy99uu4" target="_blank" onClick={(event) => { event.preventDefault(); window.open("https://tinyurl.com/ydy99uu4"); }}>Admissions Open!! Click here for an online admission form!!</Link>
            </div>
        );
    }
}
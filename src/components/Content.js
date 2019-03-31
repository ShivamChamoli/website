import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Aboutus from './Aboutus.js';
import Oursystem from './Oursystem.js';
import Ourfaculty from './Ourfaculty.js';
import Admissioninformation from './Admissioninformation.js';
import Documentsrequired from './Documentsrequired.js';
import Contactus from './Contactus.js';
import WhatsNew from './Whatsnew.js';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            heading: this.props.heading
        };
    }

    //Updates data after asynchronous data load
    componentWillReceiveProps(nextProps){
        this.setState(prevState => ({
            type: nextProps.type,
            heading: nextProps.heading
        }));
    }

    render() {
        if(this.state.type === "home") {
            return (
                <div>
                    <WhatsNew />
                </div>
            );
        }
        else if(this.state.type === "aboutus") {
            return (
                <div>
                    <Aboutus />
                </div>
            );
        }
        else if(this.state.type === "oursystem") {
            return (
                <div>
                    <Oursystem />
                </div>
            );
        }
        else if(this.state.type === "ourfaculty") {
            return (
                <div>
                    <Ourfaculty />
                </div>
            );
        }
        else if(this.state.type === "whatsnew") {
            return (
                <div>
                    <WhatsNew />
                </div>
            );
        }
        else if(this.state.type === "admissioninformation") {
            return (
                <div>
                    <Admissioninformation />
                </div>
            );
        }
        else if(this.state.type === "documentsrequired") {
            return (
                <div>
                    <Documentsrequired />
                </div>
            );
        }
        else if(this.state.type === "contactus") {
            return (
                <div>
                    <Contactus />
                </div>
            );
        }
        else {
            return (
                <div>
                    <WhatsNew />
                </div>
            );
        }
    }
}
export default withRouter(Content);
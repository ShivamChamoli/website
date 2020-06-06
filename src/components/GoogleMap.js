import React from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    //Updates data after asynchronous data load
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        return (
            <Map
                bootstrapURLKeys={{
                    key: 'AIzaSyAyIvXvVqmpvD_QsFtT5qG__r34Qj704V0',
                    language: 'en'
                }}
                google={this.props.google}
                zoom={8}
                //style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
            </Map>
        );
    }
}
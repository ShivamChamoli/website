import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselDefault.css';
import $ from 'jquery';

export default class CarouselDefault extends React.Component {
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

    componentDidMount() {
        $(".carousel-indicators").css("display", "none");
    }

    componentDidUpdate() {
        $(".carousel-indicators").css("display", "none");
    }

    expressionWithoutQuotes(expressionDiv) {
        var expressionWithoutQuotes = '';
        for (var i = 0; i < expressionDiv.length; i++) {
            if (expressionDiv.charAt(i) !== '"') {
                expressionWithoutQuotes += expressionDiv.charAt(i);
            }
        }
        return expressionWithoutQuotes;
    }

    createCarousel(album, albumName) {
        return (
            album.map((value, index) => {
                var imgSource = require('../images/' + albumName + '/' + value);
                return (
                    /*<Carousel.Item>
                        <img src={require('../images/christmascelebrations/IMG_0257.JPG')} className="d-block w-100 img-responsive center-block carousel-default-image" alt="Second slide" />
                    </Carousel.Item>*/
                    <Carousel.Item>
                        <img src={imgSource} className="d-block w-100 img-responsive center-block carousel-default-image" alt="Second slide" />
                    </Carousel.Item>
                )
            })
        )
    }

    render() {
        var album = [];
        if (this.props.albumName === 'christmas') {
            album = ['IMG_0919.jpg', 'IMG_0682.jpg', 'IMG_0257.JPG', 'IMG_0272.JPG', 'IMG_0804.jpg', 'IMG_9974.JPG', 'IMG_0838.jpg', 'IMG_9786.jpg', 'IMG_0898.jpg', 'IMG_0586.JPG', 'IMG_0953.jpg', 'IMG_0598.JPG', 'IMG_0307.JPG', 'IMG_0684.jpg'];
        }
        else if (this.props.albumName === 'diwali') {
            album = ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_9.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg', 'IMG_6.jpg', 'IMG_7.jpg', 'IMG_8.jpg', 'IMG_10.jpg', 'IMG_11.jpg', 'IMG_12.jpg', 'IMG_13.JPG', 'IMG_14.JPG', 'IMG_15.jpg', 'IMG_16.jpg'];
        }
        else if (this.props.albumName === 'assessment') {
            album = ['IMG_0496.JPG', 'IMG_0500.JPG', 'IMG_0507.JPG'];
        }
        else if (this.props.albumName === 'vidyarambham') {
            album = ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg'];
        }
        else if (this.props.albumName === 'republicday') {
            album = ['IMG_1911.jpg', 'IMG_1947.jpg', 'IMG_1996.jpg', 'IMG_2021.JPG', 'IMG_2026.JPG', 'IMG_2062.JPG', 'IMG_2103.jpg', 'IMG_2114.jpg', 'IMG_2137.JPG', 'IMG_2175.jpg'];
        }
        return (
            <div>
                <Carousel>
                    {this.createCarousel.call(this, album, this.props.albumName)}
                </Carousel>      
            </div>
        );
    }
}
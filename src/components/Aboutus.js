import React from 'react';
//import withRouter from 'react-router-dom/withRouter';

export default class Aboutus extends React.Component {
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
                About Us
            </h3>
            <h4>
                DIRECTOR’S PROFILE 
            </h4>
            <p>
                
    
                Mrs. Seema Chamoli
                The founder and director of Wood sorrel-Angels Meadow, Mrs. Seema Chamoli is a reputed educationist and has worked with children for her whole career and earned invaluable experience in teaching and administrative field.
                She is thoughtful, compassionate and highly skilled at working with young children. She approaches each child as an individual and learns about where they are emotionally and developmentally so that she can best facilitate their learning. 
                The most important areas of her specialization include ’Childhood Education and Nutrition. Childhood Education emerged as an interest, evolved as a passion and took over all other interests of Mrs. Seema Chamoli.
                She has experience in private, public and hi-tech preschool settings. She worked in various Schools and in the best Pre-schools of India.  She also worked as VP educational projects.
                Realizing the necessity of world class Pre-school in Dehra Dun, she nurtured the concept of ‘WOODSORREL’ Angels Meadow which is a blend of modernity and traditions. It aims to prepare the children for success in today’s competitive environment and be an excellent global citizen.
            </p>
        </div>
      );
    }
}
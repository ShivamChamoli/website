import React from 'react';
import '../css/Aboutus.css';
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
        <div style={{background:'#FFE2E2', padding:'3%', marginTop:'3%'}}>
            <h4>
                OUR PHILOSOPHY
            </h4>
            <p>
                Wood sorrel offers an <b>intimate, high quality preschool program for 
                2-5 year olds.</b> Children during <b>preschool years learn more, and at a 
                greater speed</b> than at any other time in their lives. Research 
                shows that <b>half of a child’s adult intelligence</b> is formed during the 
                first four years of his life and a child during these years has an all 
                absorbent mind. He simply soaks up every experience. <b>He learns by 
                sound, sight, taste smell and touch.</b>
            </p>
            <p>
                This is the <b>best time to focus on developing the overall personality</b> 
                of a child. <b>Wood sorrel provides an ideal environment</b> for the 
                <b>all around</b> development of a child by following <b>Montessori inspired 
                child led/teacher facilitated/play based intensive preschool 
                curriculum</b>. This system requires that the <b>children are placed in a 
                well planned and structured environment</b> in which the child grows and 
                learns in a natural way. The children are <b>free to follow their own 
                interests within this planned environment</b>, rather than being forced 
                to learn something that is inappropriate for their development stage. 
                <b>As a result children develop in a natural way and are highly 
                motivated. They develop good discipline and master basic skills</b>. 
                Aspects of Reggio Emilia and other programs are sprinkled throughout 
                as well.
            </p>
            <h4 style={{marginTop: '3%'}}>
                DIRECTOR’S PROFILE 
            </h4>
            <p>
                Mrs. Seema Chamoli
                The founder and director of Woodsorrel, Angels Meadow, Mrs. Seema Chamoli is a reputed educationist and has worked with children her whole career and earned invaluable experience in the teaching and the administrative field.
                She is thoughtful, compassionate and highly skilled at working with young children. She approaches each child as an individual and learns about where they are emotionally and developmentally so that she can best facilitate their learning. 
                The most important areas of her specializations include 'Childhood Education and Nutrition'. Childhood Education emerged as an interest, evolved as a passion and took over all other interests of Mrs. Seema Chamoli.
                She has experience in private, public and hi-tech preschool settings. She worked in various Schools and in the best Pre-schools of India (ranging from ...).  She also worked as VP educational projects (...).
                Realizing the necessity of world class Pre-school in Dehra Dun, she nurtured the concept of ‘WOODSORREL’ Angels Meadow which is a blend of modernity and traditions. It aims to prepare the children for success in today’s competitive environment and be an excellent global citizen.
            </p>
        </div>
      );
    }
}
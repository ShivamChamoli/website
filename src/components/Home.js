import React from 'react';
//import withRouter from 'react-router-dom/withRouter';

export default class Home extends React.Component {
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
                Home
            </h3>
            <p>
            Wood sorrel offers an intimate, high quality preschool program for 
            2-5 year olds. Children during Preschool years learn more, and at a 
            greater speed than at any other time in their lives. The research 
            shows that half of child’s adult intelligence is formed during the 
            first four years of his life and a child during these years has all 
            absorbent mind. He simply soaks up every experience. He learns by 
            sound, sight, taste smell and touch.
            </p>
            <p>
            This is the best time to focus on developing the overall personality 
            of a child. Wood sorrel is able to provide Ideal environment for the 
            all round development of a child by following Montessori inspired 
            child led/teacher facilitated/play based intensive preschool 
            curriculum. This system requires that the children are placed in a 
            well planned and structured environment in which child grows and 
            learns in a natural way. The children are free to follow their own 
            interests within this planned environment, rather than being forced 
            to learn something that is inappropriate to their development stage. 
            As a result children develop in a natural way and are highly 
            motivated. They develop good discipline and master basic skills. 
            Aspects of Reggio Emilia and other programs are sprinkled throughout 
            as well.
            </p>
        </div>
      );
    }
}
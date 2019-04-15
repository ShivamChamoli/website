import React from 'react';
import {Row, Col} from 'react-bootstrap';
import physicalskills from '../images/physicalskills.png';
import creativeskills from '../images/creativeskills.png';
import funactivity from '../images/funactivity.png';
//import withRouter from 'react-router-dom/withRouter';

export default class Oursystem extends React.Component {
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
            {/*<h4>
                FLEXIBLE CURRICULUM
            </h4>
            <p style={{paddingTop:'2%'}}>
                <b>Play Group curriculum program: </b> Our Play Group themes are geared towards children aged 20
                months to about 2.5 years. This program is aimed at teaching the toddlers colors, shapes, numbers up
                to 10, and some of the alphabets. Children will use glue, paints, songs, rhymes/stories along
                with other fun activities that goes along with that week's theme to stimulate an all around growth.
            </p>
            <p>
                <b>Preschool curriculum program: </b> Our Preschool curriculum program is geared towards children aged 2.5 years to about 5 years. Our
                curriculum includes circle time, art time, learning time and a special activity for five days per
                week. The curriculum is aimed at teaching the children about shapes, colors, upper and lower case
                alphabets, numbers, learning to tell time, learning a few beginning sounds, simple science activities
                and so much more. Children will be using glue, paints and working on learning how to cut, trace, tell time
                plus work on pre math, pre reading and science. An example science project would be sorting
                fruits and vegetables, growing plants, and many more exciting activities!!
            </p>*/}
            <h3>
                GROWTH AND DEVELOPMENT
            </h3>
            <Row>
                <Col xs={12} lg={12} md={12}>Education at Woodsorrel Angels Meadow means <b>Education for life</b>. We prepare our children for life by imparting not only <b>age appropriate knowledge</b> but also enhancing their <b>talent</b> and empowering them with <b>life skills</b>, to ensure <b>holistic development</b> of the child. The five main skills/ areas that our programe focuses on development are:-</Col>
            </Row>
            <Row>
                <Col xs={4} lg={4} md={4}><ul><li><b>Physical Skills</b></li></ul></Col>
                <Col xs={4} lg={4} md={4}><ul><li><b>Language Skills</b></li></ul></Col>
                <Col xs={4} lg={4} md={4}><ul><li><b>Intellectual Skills</b></li></ul></Col>
            </Row>
            <Row>
                <Col xs={4} lg={4} md={4}><ul><li><b>Creative Skills</b></li></ul></Col>
                <Col xs={4} lg={4} md={4}><ul><li><b>Socio-emotional Skills</b></li></ul></Col>
            </Row>
            <h4>
                Physical Skills
            </h4>
            <Row>
                <Col xs={8} lg={8} md={8}>
                    <Row>
                        <Col xs={12} lg={12} md={12}>A wide range of free play and structured play has been carefully planned to develop the child's gross and fine motor skills in their indoor and outdoor physical environment. Following indoor and outdoor activities are planned:</Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Splash pool</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Sand pit</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Swings/Slides</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Ball pool</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Clay modelling</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Balancing beam</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Physical exercise</b></li></ul></Col>
                    </Row>
                </Col>
                <Col xs={3} lg={3} md={3}><img style={{background:'lightgrey', maxHeight:'200px', marginLeft:'5%'}} src={physicalskills} className="img-responsive img-thumbnail" alt="physical skills" /></Col>
            </Row>
            <h4>
                Language Skills
            </h4>
            <Row>
                <Col xs={12} lg={12} md={12}>
                    <Row>
                        <Col xs={12} lg={12} md={12}>Development of Listening, Speaking, Reading and Writing skills using the following activities:</Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Story telling</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Music and dance</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Singing</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Rhymes</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Dramatization</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Puppet show</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Magic show</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>English conversation</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Stage exposure</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Library (Reading skills)</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Personality development</b></li></ul></Col>
                    </Row>
                </Col>
            </Row>
            <h4>
                Intellectual Skills
            </h4>
            <Row>
                <Col xs={12} lg={12} md={12}>
                    <Row>
                        <Col xs={12} lg={12} md={12}>Focuses on the child's skill of memory and observation, problem solving, logical thinking, developing a scientific attitude and a sense of curiosity. It helps in developing the basic Intelligence of the child with the help of <b>Montessori Equipments</b> and also focuses on the child's five senses (Sight, Hearing, Touch, Smell & Taste) using the following activities:</Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Experiment</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Learn by doing</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Puzzles</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Block building</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Beads</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Flash cards</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Pink tower</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Spindles</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Brown stairs</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Red rod</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Number rod</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Balancing beam</b></li></ul></Col>
                    </Row>
                </Col>
            </Row>
            <h4>
                Creative Skills
            </h4>
            <Row>
                <Col xs={8} lg={8} md={8}>
                    <Row>
                        <Col xs={12} lg={12} md={12}>Development of creative skills using the following activities:</Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Coloring</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Clay modelling</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Painting</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Cutting</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Pasting</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Using crayons</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Music</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Dance</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Dramatization</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Story telling</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Rhymes</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Scribbling</b></li></ul></Col>
                    </Row>
                </Col>
                <Col xs={2} lg={2} md={2}><img style={{background:'lightgrey', maxHeight:'200px', marginLeft:'20%'}} src={creativeskills} className="img-responsive img-thumbnail" alt="creative skills" /></Col>
            </Row>
            <h4>
                Socio-emotional Skills
            </h4>
            <Row>
                <Col xs={12} lg={12} md={12}>
                    <Row>
                        <Col xs={12} lg={12} md={12}>Apart from inculcating good behaviour and manners we also help to develop various traits in the child. The curriculum imparts to the child qualities like <b>Sharing and caring</b>, <b>Independence</b>, <b>Leadership</b>, <b>Responsibility</b> and <b>Confidence</b> using activities:</Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Celebrations & Festivals</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Greetings</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Prayers</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Magic words</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Good manners</b></li></ul></Col>
                    </Row>
                </Col>
            </Row>
            <h4>
                Fun Activities
            </h4>
            <Row>
                <Col xs={8} lg={8} md={8}>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Drawing</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Fancy Dress</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Singing</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Dancing</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Birthday Celebrations</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>All Festivals</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Grand Parent's Day</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Mother's Day</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Baby Show</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Mega/Mini Show</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Summer Camp</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Sports Day</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Annual Day</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Picnic</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Visit places</b></li></ul></Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Regular P.T.Ms</b></li></ul></Col>
                        <Col xs={4} lg={4} md={4}><ul><li><b>Health checkups</b></li></ul></Col>
                    </Row>
                </Col>
                <Col xs={3} lg={3} md={3}><img style={{background:'lightgrey', maxHeight:'200px', marginLeft:'20%'}} src={funactivity} className="img-responsive img-thumbnail" alt="creative skills" /></Col>
            </Row>
            <h4>
                Etiquette
            </h4>
            <Row>
                <Col xs={12} lg={12} md={12}>
                    In order to teach proper behaviour we have <b>Polite is right</b> life skills classes for children. Children are motivated to turn to chivalry as a small measure of taking control on violence and aggression.
                </Col>
            </Row>
            <h4>
                Technology
            </h4>
            <Row>
                <Col xs={12} lg={12} md={12}>
                In order to strengthen the foundation, Wood sorrel has collaborated Technology with curriculum in a very child friendly manner. We believe if children are given an opportunity to experience traditional education along with technology i.e. Tradition and Technology the best of both worlds in this age then they have an edge over other students.
                </Col>
            </Row>
            <h4>
                Our Programs
            </h4>
            <Row>
                <Col xs={6} lg={6} md={6}><b>Class</b></Col>
                <Col xs={6} lg={6} md={6}><b>Age</b> (years)</Col>
            </Row>
            <Row>
                <Col xs={6} lg={6} md={6}>Playgroup</Col>
                <Col xs={6} lg={6} md={6}>2+</Col>
            </Row>
            <Row>
                <Col xs={6} lg={6} md={6}>Nursery</Col>
                <Col xs={6} lg={6} md={6}>2.5+</Col>
            </Row>
            <Row>
                <Col xs={6} lg={6} md={6}>Mont1</Col>
                <Col xs={6} lg={6} md={6}>3.5+</Col>
            </Row>
            <Row>
                <Col xs={6} lg={6} md={6}>Mont2</Col>
                <Col xs={6} lg={6} md={6}>4.5+</Col>
            </Row>
        </div>
      );
    }
}
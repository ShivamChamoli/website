import React from 'react';
import {Carousel} from 'react-bootstrap';
import bs1 from '../images/bs1.JPG';
import bs2 from '../images/bs2.JPG';
import bs3 from '../images/bs3.JPG';
import bs4 from '../images/bs4.JPG';
import bs5 from '../images/bs5.JPG';
import bs7 from '../images/bs7.JPG';
import bs9 from '../images/bs9.JPG';
import bs12 from '../images/bs12.JPG';
import bs13 from '../images/bs13.jpg';
import bs14 from '../images/bs14.JPG';
import '../css/Whatsnew.css';
import summercampdance from '../images/summercampdance.jpeg';
import summercampsing from '../images/summercampsing.jpeg';
import summercampdirector from '../images/summercampdirector.jpeg';
import summercampbrownie from '../images/summercampbrownie.jpeg';
import summercampstickfigures from '../images/summercampstickfigures.jpeg';
import summercampresult from '../images/summercampresult.jpeg';
import summercampstickpuppets from '../images/summercampstickpuppets.jpeg';
import summercampteacher from '../images/summercampteacher.jpeg';
import hischalfirstday from '../images/hischal-first-day.jpeg';
import stackingrings from '../images/stacking-rings.jpeg';
import pickanddrop from '../images/pick-and-drop.jpeg';
import smallbigcircle from '../images/small-big-circle.jpeg';
import fruitpuzzle from '../images/fruit-puzzle.jpeg';
import fungame from '../images/fun-game.jpeg';
import colortablets from '../images/color-tablets.jpeg';
import foodhabits from '../images/food-habits.jpeg';
import balancingballgame from '../images/balancing-ball-game.jpeg';
import playingBall from '../images/playingBall.jpeg';
import math from '../images/math.jpeg';
import playing from '../images/playing.jpeg';
import doctor from '../images/doctor.jpeg';
import sounds from '../images/sounds.jpeg';
import cottonDab from '../images/cottonDab.jpeg';
import tearingAndPasting from '../images/tearingAndPasting.jpeg';
import crayon from '../images/crayon.jpeg';
import painting from '../images/painting.jpeg';
import ladder from '../images/ladder.jpeg';
import karate from '../images/karate.jpeg';
import nationalSymbols from '../images/nationalSymbols.jpeg';
import alphabetPicture from '../images/alphabetPicture.jpeg';
import redSensory from '../images/redSensory.jpeg';
import Flex from '../images/Flex.jpg';
import independenceDay from '../images/independenceDay.jpeg';
import rockingChairs from '../images/rockingChairs.jpeg';
import selfFeeding from '../images/selfFeeding.jpeg';
import prayers from '../images/prayers.jpeg';
import vidyarambham from '../images/vidyarambham.jpg';
import dsc_5566 from '../images/DSC_5566.jpg';
import $ from 'jquery'; 
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default class Whatsnew extends React.Component {
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

    componentDidMount() {
        $(".carousel-indicators").css("display","none");
    }

    componentDidUpdate() {
        $(".carousel-indicators").css("display","none");
    }

    render() {
      return (
        <div>
            <div className="carousel-settings">
                <Carousel>
                    <Carousel.Item>
                        <img src={Flex} className="d-block w-100 img-responsive center-block" alt="First slide" />
                        {/*<Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={dsc_5566} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Celebrated Independence Day and Raksha Bandhan in the school.</h3>
                        </Carousel.Caption>
                        <img src={independenceDay} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Just a normal day at Woodsorrel</h3>
                        </Carousel.Caption>
                        <img src={hischalfirstday} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Summer Camp Class of 2019, Dance Class!!</h3>
                        </Carousel.Caption>
                        <img src={summercampdance} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={vidyarambham} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Playing with balls improves the kid's motor skills,hand-eye-coordination and timing,which are important parts for developmental progression</h3>
                        </Carousel.Caption>
                        <img src={playingBall} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    {/*<Carousel.Item>
                        <img src={math} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>*/}
                    {/*<Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">The physical exertion is a plus-helps in releasing child’s seemingly boundless energy</h3>
                        </Carousel.Caption>
                        <img src={playing} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>*/}
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">By self feeding ,children develop the self help skill to take care of themselves.They are also working on fine motor skills and hand-eye coordination as they eat.</h3>
                        </Carousel.Caption>
                        <img src={selfFeeding} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    {/*<Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Prayers before meals is a good habit to teach the children</h3>
                        </Carousel.Caption>
                        <img src={prayers} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>*/}
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Good for hand-eye-coordination and fine motor skills due to precise nature of matching each piece exactly, it also develops physical,cognitive and emotional skills</h3>
                        </Carousel.Caption>
                        <img src={doctor} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Sparks child’s imagination, stimulates curiosity and helps in developing brain,social and communication skills</h3>
                        </Carousel.Caption>
                        <img src={sounds} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Cotton Dabbing-Allows them to use their imagination
It is emotionally soothing 
Strengthens the hand and fingers. 
Most importantly it is fun 😁</h3>
                        </Carousel.Caption>
                        <img src={cottonDab} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Tearing and Pasting is a precursor to writing!</h3>
                        </Carousel.Caption>
                        <img src={tearingAndPasting} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Crayon is the first object that children learn to hold in a certain manner and proper grip will help them greatly to work on penmanship</h3>
                        </Carousel.Caption>
                        <img src={crayon} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Painting Teddy Bear with red colour, brush and cotton buds, great for the children developing those fine motor skills and pincer grip.</h3>
                        </Carousel.Caption>
                        <img src={painting} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    {/*<Carousel.Item>
                        <img src={ladder} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>*/}
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Through this activity the Montessori student not only develops motor control,but practices listening skills,balance, concentration,coordination,body awareness and sense of inner discipline.The student will also work on the visual skills of left to right</h3>
                        </Carousel.Caption>
                        <img src={karate} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Introduction to National Symbols</h3>
                        </Carousel.Caption>
                        <img src={nationalSymbols} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">My colourful Alphabet picture book 😁</h3>
                        </Carousel.Caption>
                        <img src={alphabetPicture} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Red Sensory bin-Is a great way to introduce colours in a play way stress free manner 💄🍎🍅🌶🍉</h3>
                        </Carousel.Caption>
                        <img src={redSensory} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    {/*<Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Stacking rings game</h3>
                        </Carousel.Caption>
                        <img src={stackingrings} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>*/}
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Summer Camp Class of 2019, Music Class!!</h3>
                        </Carousel.Caption>
                        <img src={summercampsing} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Pick and drop game</h3>
                        </Carousel.Caption>
                        <img src={pickanddrop} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Our very own Founder Director leading the way in the non fire cooking class!</h3>
                        </Carousel.Caption>
                        <img src={summercampdirector} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">The fruits of the toil</h3>
                        </Carousel.Caption>
                        <img src={summercampbrownie} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Lets meet the boss of stacking circles!</h3>
                        </Carousel.Caption>
                        <img src={smallbigcircle} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Rocking chairs, making kids happy since their creation!</h3>
                        </Carousel.Caption>
                        <img src={rockingChairs} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Stick Figures Class lead by our brilliant teacher!</h3>
                        </Carousel.Caption>
                        <img src={summercampteacher} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Stick Figures Class of 2019!</h3>
                        </Carousel.Caption>
                        <img src={summercampstickfigures} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">The mysterious fruit game</h3>
                        </Carousel.Caption>
                        <img src={fruitpuzzle} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Another fun game!</h3>
                        </Carousel.Caption>
                        <img src={fungame} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Colour Tablets-Primary Colours-A child gets the chance to match two tablets of same colour to each other building their Visual Discrimination skills</h3>
                        </Carousel.Caption>
                        <img src={colortablets} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Habits are best made when you are young,
                        whether you’re eating at home or dining out, good table manners is an important part of every meal.
                        Washing hands before and after meal should become a second nature.It is an important healthy 
                        hygiene habit.</h3>
                        </Carousel.Caption>
                        <img src={foodhabits} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption>
                        <h3 className="carousel-text padding">Good balancing skills increase children’s confidence in Gross Motor Activities. Hishal performed an amazing balancing act.</h3>
                        </Carousel.Caption>
                        <img src={balancingballgame} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <div style={divStyle}>
                            <Carousel.Caption>
                            <h3 className="carousel-text padding">Fun and Food Village.</h3>
                            </Carousel.Caption>
                            <video controls>
                                <source src={hischalvideo} type="video/mp4"></source>
                            </video>
                        </div>
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                        <p className="carousel-text padding">The long awaited rejuvenating summer has come. Summer means having ice cream 🍦, red juicy watermelon 🍉 and lots of fun activities. We at Woodsorrel Angels’ Meadow experience great joy in organising Summer Camp for kids from 20th May to 7th June. So enroll now and learn dance from Saurabh Sir of famous V.Boyzzz dance center, guitar and singing from Pankaj Kumar Bachhwan Sir, Vedic Maths from Vishal Bharti Sir and many more fun activities which will not only increase your child's intellect but also his enthusiasm.</p>
                        <img src={summercampboard} className="d-block w-100 img-responsive center-block" alt="Third slide" />
                    </Carousel.Item> */}
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Our kids with the results of the painting class</h3>
                        </Carousel.Caption>
                        <img src={summercampresult} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">The final results of the stick figure class</h3>
                        </Carousel.Caption>
                        <img src={summercampstickpuppets} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Baby Ivan in the ball pool</h3>
                        </Carousel.Caption>
                        <img src={bs1} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Don't worry, he figured it out later!</h3>
                        </Carousel.Caption>
                        <img src={bs2} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Baby Yashwardhan in the ball pool</h3>
                        </Carousel.Caption>
                        <img src={bs3} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Trust us, that teddy is friendly!</h3>
                        </Carousel.Caption>
                        <img src={bs4} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Baby Ivan in the zone for some creativity</h3>
                        </Carousel.Caption>
                        <img src={bs5} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        {/*<Carousel.Caption>
                        <h3>Baby Ivan in the ball pool</h3>
                        </Carousel.Caption>*/}
                        <img src={bs7} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">We will name it Woodsorrel!!</h3>
                        </Carousel.Caption>
                        <img src={bs9} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Slide away, my boy!</h3>
                        </Carousel.Caption>
                        <img src={bs12} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Oops, thats not chocolate!</h3>
                        </Carousel.Caption>
                        <img src={bs13} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3 className="carousel-text padding">Mr Chubby Cheeks goes to Baby Ivan!</h3>
                        </Carousel.Caption>
                        <img src={bs14} className="d-block w-100 img-responsive center-block" alt="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
      );
    }
}
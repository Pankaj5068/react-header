import react, { Component } from 'react'
import {Button,ListGroup,Card,Tabs,Row ,Col,Container,Tab} from 'react-bootstrap'
import mockup6 from '../../image/mockup6.png'
import line2 from '../../image/line2.png'
import '../StepComponent/StepComponent.css'
class StepComponent extends Component{
    render(){
        return(
            <div className="counter_wrapper counter_3_wrapper jb_cover">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="counter_mockup_design jb_cover">
                                 <img src={mockup6} />
                            </div>
                            <div class="counter_jbbb jb_cover">
                                <img src={line2} class="img-fluid" alt="img"/>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="counter_right_wrapper counter_index3_right jb_cover">
                                <h1>Step into the arena</h1>
                                <p>Join our growing community of singers, musicians, actors, dancers, magicians, DJs and so much more.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default StepComponent
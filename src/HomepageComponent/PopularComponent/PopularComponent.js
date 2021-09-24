import react, { Component } from 'react'
import { Container, Row ,Col,Card,Button,ButtonGroup} from 'react-bootstrap'
import shape4 from '../../image/shape4.png'
import '../PopularComponent/PopularComponent.css'
import '../../assets/css/flaticon.css'
class PopularComponent extends Component{
    render(){
        return(
            <div className="popular_wrapper jb_cover">
                <div class="slider_small3_shape shapenew">
                    <img src={shape4} class="img-fluid " alt="img" />
                </div>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="jb_heading_wraper">
                                <h3>We are Popular Everywhere</h3>
                                <p>Your next level Product developemnt company assets</p>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col md="12">
                            <div className="jp_register_section_main_wrapper jb_cover bg-dark">
                                <Card className="jp_regis_left_side_box_wrapper">
                                    
                                    <Card.Body>
                                        <i class="flaticon-laptop"></i>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Signed in companies are able to post new
                                    <br/> job offers, searching for candidate...
                                        </Card.Text>
                                        <ButtonGroup aria-label="Basic example">
                                             <Button variant="primary">Go somewhere</Button>
                                        </ButtonGroup>
                                       
                                    </Card.Body>
                                </Card>
                                <Card className="jp_regis_right_side_box_wrapper">
                                
                                    <Card.Body>
                                    <i class="flaticon-doctor"></i>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Signed in companies are able to post new
                                    <br/> job offers, searching for candidate..
                                        </Card.Text>
                                        <ButtonGroup aria-label="Basic example">
                                             <Button variant="primary">Go somewhere</Button>
                                        </ButtonGroup>
                                    </Card.Body>
                                    <div class="jp_regis_center_tag_wrapper">
                                        <p>OR</p>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        )
    }
}
export default PopularComponent
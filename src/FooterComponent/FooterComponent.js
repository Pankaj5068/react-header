import react, { Component } from 'react'
import bubble2 from '../image/bubble2.png'
import { Container, Row ,Col,ListGroup ,Nav } from 'react-bootstrap';
import logo from '../image/gobo_logo.png'

import '../FooterComponent/FooterComponent.css'
class FooterComponent extends Component{
    render(){
        return(
            <div className="footer jb_cover">
                <div class="ft_shape bubble-18">
                    <img src={bubble2} class="img-fluid " alt="img" />
                </div>
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="footerNav jb_cover">
                                <img src={logo} />
                                <ListGroup horizontal>
                                    <ListGroup.Item><a><i class="fa fa-facebook-f"></i></a></ListGroup.Item>
                                    <ListGroup.Item><a><i class="fa fa-twitter" ></i></a></ListGroup.Item>
                                    <ListGroup.Item><a><i class="fa fa-linkedin" aria-hidden="true"></i></a></ListGroup.Item>
                                    <ListGroup.Item><a><i class="fa fa-google-plus" aria-hidden="true"></i></a></ListGroup.Item>
                                   
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md="3">
                        <div className="footerNav jb_cover footer_border_displ">
                            <h5>features</h5>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home"><i class="fa fa-square"></i> Job Management & Billing</Nav.Link>
                                <Nav.Link eventKey="link-1"><i class="fa fa-square"></i> Time & Materials Tracking</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i>Standards Compliance</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i>Real Time GPS Tracking</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i>Client Portal</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i> Powerful Workflow</Nav.Link>
                                
                            </Nav>
                        </div>
                        
                        </Col>
                        <Col md="3">
                        <div className="footerNav jb_cover footer_border_displ">
                            <h5>Browse</h5>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home"><i class="fa fa-square"></i> Job Management & Billing</Nav.Link>
                                <Nav.Link eventKey="link-1"><i class="fa fa-square"></i> Time & Materials Tracking</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i>Standards Compliance</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i>Real Time GPS Tracking</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i>Client Portal</Nav.Link>
                                <Nav.Link eventKey="link-2"><i class="fa fa-square"></i> Powerful Workflow</Nav.Link>
                                
                            </Nav>
                        </div>
                        </Col>
                        <Col md="3">
                            <div className="footerNav jb_cover">
                                <h5>Contact </h5>
                                <ListGroup as="ul">
                                    <ListGroup.Item  as="li">Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md="12">
                        <div class="copyright_left"><i class="fa fa-copyright"></i> 2021 <a href="#"> GoBo. </a> All Rights Reserved.</div>
                        </Col>
                    </Row>
                </Container>
                <div class="waveWrapper waveAnimation">
                    <div class="waveWrapperInner bgTop gradient-color">
                        <div class="wave waveTop wavetop_1 wavetop_3"></div>
                    </div>
                    <div class="waveWrapperInner bgMiddle">
                        <div class="wave waveMiddle"></div>
                    </div>
                    <div class="waveWrapperInner bgBottom">
                        <div class="wave waveBottom wavebottom_1 wavebottom_3"></div>
                    </div>
                </div>
                <div class="ft_shape2 bubble-190">
                    <img src={bubble2} class="img-fluid " alt="img" />
                </div>
                <div class="ft_shape1 bubble-19">
                    <img src={bubble2} class="img-fluid " alt="img" />
                </div>
            </div>
        )
    }
}
export default FooterComponent
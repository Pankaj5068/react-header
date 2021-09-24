import react, { Component } from 'react'
import lineimg from '../image/line.png';
import lt5 from '../image/lt5.png';
import lt4 from '../image/lt4.png';
import lt3 from '../image/lt3.png';
import lt2 from '../image/lt2.png';
import lt1 from '../image/lt1.png';

import {Button,ListGroup,Card,Tabs,Row ,Col,Container,Tab} from 'react-bootstrap';
import '../BestjobsComponent/BestjobsComponent.css';
class BestjobsComponent extends Component{
render(){
    return(
        <div className="best_jobs_wrapper index3_best_job_wrapper  jb_cover">
            <div class="line_shape">
                <img src={lineimg} class="img-fluid" alt="img" />
            </div>
            <Container>
                <Row>
                    <Col xs="12" md="12" >
                        <div className="jb_heading_wraper">
                            <h3>Our Best Jobs for You</h3>
                            <p>Your next level Product developemnt company assets</p>
                        </div>
                    </Col>
                    <Col xs="12" md="12" className="latest_job_tabs ">
                        <Tabs  id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="artist" title="Artist">
                                <Row>
                                    <Col xs="12" md="6" >
                                        <Card>
                                        <Card.Header><Card.Img variant="top" src={lt5} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Female Actor in Main Lead</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                   We are looking for Fresh Faces for lead and supporting roles with a dedication to acting.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt4} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt3} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt2} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt5} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt1} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="producer" title="Producer">
                            <Row>
                                    <Col xs="12" md="6" >
                                        <Card>
                                        <Card.Header><Card.Img variant="top" src={lt4} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Female Actor in Main Lead</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                   We are looking for Fresh Faces for lead and supporting roles with a dedication to acting.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt3} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt3} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt1} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt4} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <Card >
                                        <Card.Header><Card.Img variant="top" src={lt5} /></Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <ListGroup horizontal as="ul" className="card_icon_list">
                                                    <ListGroup.Item as="li"><i class="fa fa-money" aria-hidden="true"></i>  $12K - 15k P.A.</ListGroup.Item>
                                                    <ListGroup.Item as="li"><i class="fa fa-map-marker" aria-hidden="true"></i>   Mumbai</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="btn_hover slider_btn jobs_btn_3 jb_cover">
                            <Button >view all</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

}
export default BestjobsComponent;
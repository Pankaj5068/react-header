import react, { Component } from 'react'
import '../CompetitionComponent/CompetitionComponent.css'
import shape4 from  '../../image/shape4.png'
import line3 from  '../../image/line3.png'
import c1 from  '../../image/c1.png'
import c2 from  '../../image/c2.png'
import c3 from  '../../image/c3.png'
import c4 from  '../../image/c4.png'
import c5 from  '../../image/c5.png'
import c6 from  '../../image/c6.png'




import {Container ,Row ,Col,Card} from 'react-bootstrap';
class CompetitionComponent extends Component{
    render(){
        return(
            <div className="services_wrapper control_wrapper jb_cover">
                <div class="pa1 slider_small_shape44">
                    <img src={shape4} class="img-fluid " alt="img" />
                </div>
                <div class="pa2 counter_jbbb2 jb_cover">
                    <img src={line3} class="img-fluid" alt="img" />
                </div>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="jb_heading_wraper">
                               <h3>Competition</h3>
                               <p>Work with GOBO global creative community through a unique contest engine. Source the right talent for any written, audio or video production!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card className="services_content jb_cover">
                               <Card.Img variant="top" src={c1} />
                               <Card.Body>
                                   <Card.Title>Acting </Card.Title>
                                   <Card.Text>
                                   Create jobs, allocate to technicians, track time & materials to determine job profitability
                                    </Card.Text>
                               </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="services_content jb_cover">
                               <Card.Img variant="top" src={c2} />
                               <Card.Body>
                                   <Card.Title>Short Films</Card.Title>
                                   <Card.Text>
                                   Create jobs, allocate to technicians, track time & materials to determine job profitability
                                    </Card.Text>
                               </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="services_content jb_cover">
                               <Card.Img variant="top" src={c3} />
                               <Card.Body>
                                   <Card.Title>Dance</Card.Title>
                                   <Card.Text>
                                   Create jobs, allocate to technicians, track time & materials to determine job profitability
                                    </Card.Text>
                               </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="services_content jb_cover">
                               <Card.Img variant="top" src={c4} />
                               <Card.Body>
                                   <Card.Title>Action</Card.Title>
                                   <Card.Text>
                                   Create jobs, allocate to technicians, track time & materials to determine job profitability
                                    </Card.Text>
                               </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="services_content jb_cover">
                               <Card.Img variant="top" src={c5} />
                               <Card.Body>
                                   <Card.Title>Music</Card.Title>
                                   <Card.Text>
                                   Create jobs, allocate to technicians, track time & materials to determine job profitability
                                    </Card.Text>
                               </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="services_content jb_cover">
                               <Card.Img variant="top" src={c6} />
                               <Card.Body>
                                   <Card.Title>Others</Card.Title>
                                   <Card.Text>
                                   Create jobs, allocate to technicians, track time & materials to determine job profitability
                                    </Card.Text>
                               </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
                <div class="pa3 slider_small3_shape">
                    <img src={shape4} class="img-fluid" alt="img" />
                </div>

            </div>
        )
    }
}
export default CompetitionComponent 

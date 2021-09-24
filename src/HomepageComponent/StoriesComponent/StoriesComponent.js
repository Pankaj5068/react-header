import react, { Component } from 'react'
import {Row ,Col,Container,ButtonToolbar ,ButtonGroup,Button ,Carousel} from 'react-bootstrap'
import '../StoriesComponent/StoriesComponent.css'
import bubble from '../../image/bubble.png'
import quote1 from '../../image/quote1.png'
import vv from '../../image/vv.png'
import shape4 from '../../image/shape4.png'



class StoriesComponent extends Component{
    render(){
        return(
            <div className="client_wrapper_top jb_cover">
                <Container>
                    <Row>
                        <Col lg={{ size: 10 ,offset: 1 }}>
                            <div className="jb_heading_wraper">
                                <h3>success stories</h3>
                                <p>Your next level Product developemnt company assets</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <div className="client_wrapper jb_cover">
                                <Carousel indicators={false} interval={null}>
                                    <Carousel.Item >
                                       <Row>
                                           <Col md="8">
                                               <div className="client_wrapper_cntnt jb_cover">
                                                   <div class="client_shap1 bubble-8">
                                                        <img src={bubble} class="img-fluid" alt="img" />
                                                    </div>
                                                    <div class="client_shap2 bubble-9">
                                                        <img src={bubble} class="img-fluid" alt="img" />
                                                    </div>
                                                    <img src={quote1} alt="img"></img>
                                                    <h1><a href="#">Marita Irene</a> <span>(business)</span></h1>
                                                    <p>Packages and web page editors now use Lorem Ipsum as their am efault model text yr,and a search.</p>
                                                    <div className="pre-next">
                                                       <span aria-hidden="true" className="carousel-control-prev-icon" ><i className="fa fa-long-arrow-left"></i></span>
                                                       <span aria-hidden="true" className="carousel-control-next-icon" ><i className="	fa fa-long-arrow-right"></i></span>
                                                    </div>
                                                    <div class="client_shap3 bubble-6">
                                                        <img src={bubble} class="img-fluid" alt="img"/>
                                                    </div>

                                               </div>
                                           </Col>
                                           <Col md="4">
                                               <div className="clinnt_slider_img jb_cover">
                                                     <img src={vv} class="img-fluid" alt="img"/>
                                               </div>
                                           </Col>
                                       </Row>
                                    </Carousel.Item>
                                    <Carousel.Item >
                                       <Row>
                                           <Col md="8">
                                               <div className="client_wrapper_cntnt jb_cover">
                                                   <div class="client_shap1 bubble-8">
                                                        <img src={bubble} class="img-fluid" alt="img" />
                                                    </div>
                                                    <div class="client_shap2 bubble-9">
                                                        <img src={bubble} class="img-fluid" alt="img" />
                                                    </div>
                                                    <img src={quote1} alt="img"></img>
                                                    <h1><a href="#">Marita Irene</a> <span>(business)</span></h1>
                                                    <p>Packages and web page editors now use Lorem Ipsum as their am efault model text yr,and a search.</p>
                                                    <div className="pre-next">
                                                       <span aria-hidden="true" className="carousel-control-prev-icon" ><i className="fa fa-long-arrow-left"></i></span>
                                                       <span aria-hidden="true" className="carousel-control-next-icon" ><i className="	fa fa-long-arrow-right"></i></span>
                                                    </div>
                                                    <div class="client_shap3 bubble-6">
                                                        <img src={bubble} class="img-fluid" alt="img"/>
                                                    </div>

                                               </div>
                                           </Col>
                                           <Col md="4">
                                               <div className="clinnt_slider_img jb_cover">
                                                     <img src={vv} class="img-fluid" alt="img"/>
                                               </div>
                                           </Col>
                                       </Row>
                                    </Carousel.Item>
                                    <Carousel.Item >
                                       <Row>
                                           <Col md="8">
                                               <div className="client_wrapper_cntnt jb_cover">
                                                    <div class="client_shap1 bubble-8">
                                                        <img src={bubble} class="img-fluid" alt="img" />
                                                    </div>
                                                    <div class="client_shap2 bubble-9">
                                                        <img src={bubble} class="img-fluid" alt="img" />
                                                    </div>
                                                    <img src={quote1} alt="img"></img>
                                                    <h1><a href="#">Marita Irene</a> <span>(business)</span></h1>
                                                    <p>Packages and web page editors now use Lorem Ipsum as their am efault model text yr,and a search.</p>
                                                    <div className="pre-next">
                                                       <span aria-hidden="true" className="carousel-control-prev-icon" ><i className="fa fa-long-arrow-left"></i></span>
                                                       <span aria-hidden="true" className="carousel-control-next-icon" ><i className="	fa fa-long-arrow-right"></i></span>
                                                    </div>
                                                    <div class="client_shap3 bubble-6">
                                                        <img src={bubble} class="img-fluid" alt="img"/>
                                                    </div>

                                               </div>
                                           </Col>
                                           <Col md="4">
                                               <div className="clinnt_slider_img jb_cover">
                                                     <img src={vv} class="img-fluid" alt="img"/>
                                               </div>
                                           </Col>
                                       </Row>
                                    </Carousel.Item>
                                </Carousel>
                               
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
                <div class="slider_small3_shape shapenew">
                    <img src={shape4} class="img-fluid" alt="img" />
                </div>
            </div>
        )
    }
}
export default StoriesComponent;
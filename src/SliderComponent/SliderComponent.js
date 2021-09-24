import react, { Component } from 'react'
import sliderbg from '../image/slider_bg.png';
import shape4 from '../image/shape4.png';
import bubble from '../image/bubble.png';
import banner2 from '../image/banner-2.png';
import banner1 from '../image/banner-1.png';


import {Carousel ,Row ,Col,Container} from 'react-bootstrap';


import '../SliderComponent/SliderComponent.css';
class SliderComponent extends Component{
    render(){
        return(
            <div className="main_slider_wrapper slider-area jb_cover">
                <div class="mains_slider_shaper">
                    <img src={sliderbg} class="img-fluid" alt="img" />
                </div>
                <div class="slider_small2_shape">
                    <img src={shape4} class="img-fluid " alt="img" />
                </div>
                <div class="slider_shape_smt bubble-1">
                    <img src={bubble} class="img-fluid " alt="img" />
                </div>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Container>
                                <Row>
                                    <Col xs="12" md="6" >
                                        <div className="content">
                                            <div class="slider_shape_smt1 bubble-4">
                                                <img src={bubble} class="img-fluid" alt="img" />
                                            </div>
                                            <h2 data-animation="animated fadeInUp" class="">We Offer <span> 25,000 </span>Job Vacancies Right Now!.</h2>
                                            <p data-animation="animated fadeInUp" class="">The most complete field service software for IT &amp; Mobile Support, Fire Services, Electrical, Maintenance, HVAC &amp; Security Industries</p>
                                            <div data-animation="animated fadeInUp" class="slider_icon_list">
                                                <div data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                                    <a href="#">sign up free</a>
                                                </div>
                                                <ul>
                                                <li><a href="#"><i class="fa fa-apple"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-amazon"></i></a></li>
                                                   
                                                    <li><a href="#"><i class="fa fa-th-large"></i></a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <div class="slider_shape_sm3 bubble-5">
                                            <img src={bubble} class="img-fluid" alt="img" />
                                        </div>
                                        <div class="slider_side_img jb_cover">
                                            <img src={banner1} class="img-fluid" alt="img" />
                                        </div>
                                    </Col>
                                </Row>
                           </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Container>
                                <Row>
                                    <Col xs="12" md="6" >
                                        <div className="content">
                                            <div class="slider_shape_smt1 bubble-4">
                                                <img src={bubble} class="img-fluid" alt="img" />
                                            </div>
                                            <h2 data-animation="animated fadeInUp" class="">We Offer <span> 25,000 </span>Job Vacancies Right Now!.</h2>
                                            <p data-animation="animated fadeInUp" class="">The most complete field service software for IT &amp; Mobile Support, Fire Services, Electrical, Maintenance, HVAC &amp; Security Industries</p>
                                            <div data-animation="animated fadeInUp" class="slider_icon_list">
                                                <div data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                                    <a href="#">sign up free</a>
                                                </div>
                                                <ul>
                                                <li><a href="#"><i class="fa fa-apple"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-amazon"></i></a></li>
                                                   
                                                    <li><a href="#"><i class="fa fa-th-large"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <div class="slider_shape_sm3 bubble-5">
                                            <img src={bubble} class="img-fluid" alt="img" />
                                        </div>
                                        <div class="slider_side_img jb_cover">
                                            <img src={banner2} class="img-fluid" alt="img" />
                                        </div>
                                    </Col>
                                </Row>
                           </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Container>
                                <Row>
                                    <Col xs="12" md="6" >
                                        <div className="content">
                                            <div class="slider_shape_smt1 bubble-4">
                                                <img src={bubble} class="img-fluid" alt="img" />
                                            </div>
                                            <h2 data-animation="animated fadeInUp" class="">We Offer <span> 25,000 </span>Job Vacancies Right Now!.</h2>
                                            <p data-animation="animated fadeInUp" class="">The most complete field service software for IT &amp; Mobile Support, Fire Services, Electrical, Maintenance, HVAC &amp; Security Industries</p>
                                            <div data-animation="animated fadeInUp" class="slider_icon_list">
                                                <div data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                                    <a href="#">sign up free</a>
                                                </div>
                                                <ul>
                                                <li><a href="#"><i class="fa fa-apple"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-amazon"></i></a></li>
                                                   
                                                    <li><a href="#"><i class="fa fa-th-large"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="6" >
                                        <div class="slider_shape_sm3 bubble-5">
                                            <img src={bubble} class="img-fluid" alt="img" />
                                        </div>
                                        <div class="slider_side_img jb_cover">
                                            <img src={banner1} class="img-fluid" alt="img" />
                                        </div>
                                    </Col>
                                </Row>
                           </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div class="slider_small_shape">
                    <img src={shape4} class="img-fluid" alt="img" />
                </div>
                
            </div>
        )
    }
}
export default SliderComponent;
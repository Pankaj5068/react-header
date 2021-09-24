import react, { Component } from 'react'
import '../PartnersComponent/PartnersComponent.css'
import p2 from '../../image/p2.png'
import line3 from '../../image/line3.png'
import partner1 from '../../image/partner-1.jpg'
import partner2 from '../../image/partner-2.png'
import partner3 from '../../image/partner-3.png'
import partner4 from '../../image/partner-4.png'
import partner5 from '../../image/partner-5.jpg'
import partner6 from '../../image/partner-6.jpg'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Col, Container, Row } from 'react-bootstrap';
class PartnersComponent extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow:5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return(
            <div className="pricing_table_3 recent_resume_wrapper jb_cover">
                <div class="slider_small_shape44">
                    <img src={p2} class="img-fluid " alt="img" />
                </div>
                <Container>
                    <Row>
                        <Col ms="12">
                            <div className="jb_heading_wraper">
                                <h3>Our Partners </h3>
                            </div>
                        </Col>
                        <Col ms="12">
                            <div className="partener_slider_div">
                               <Slider {...settings} className="partener_slider">
                                    <div className="slider_item">
                                       <img src={partner1} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner2} />
                                    </div>
                                    <div className="slider_item">
                                        <img src={partner3} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner4} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner5} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner6} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner5} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner4} />
                                    </div>
                                    <div className="slider_item">
                                    <img src={partner3} />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div class="counter_jbbb2 jb_cover">
                    <img src={line3} class="img-fluid" alt="img" />
                </div>
            </div>
        )
    }
}
export default PartnersComponent;
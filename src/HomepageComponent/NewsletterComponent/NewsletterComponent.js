import react, { Component } from 'react'
import '../NewsletterComponent/NewsletterComponent.css'
import bubble2 from '../../image/bubble2.png'
import { Col, Container, Row } from 'react-bootstrap';
class NewsletterComponent extends Component{
    render(){
        return(
            <div className="news_letter_wrapper shaa jb_cover">
                <div class="sha1 bubble-180">
                    <img src={bubble2} class="img-fluid " alt="img" />
                </div>
                <Container>
                    <Row>
                        <Col md="12">
                           <div className="job_newsletter_wrapper jb_cover">
                                <div class="jb_newslwtteter_left">
                                    <h2> Looking For A Job</h2>
                                    <p>Your next level Product developemnt company assetsYour next level Product </p>
                                </div>
                                <div class="jb_newslwtteter_button">
                                    <div class="btn_hover slider_btn jobs_btn_3">
                                        <a href="#">submit</a>
                                    </div>
                                </div>
                           </div>
                        </Col>
                    </Row>
                </Container>
                <div class="sha2 bubble-185">
                    <img src={bubble2} class="img-fluid " alt="img" />
                </div>
            </div>
        )
    }
}
export default NewsletterComponent
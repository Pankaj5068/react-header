import react, { Component } from 'react'
import '../DownloadComponent/DownloadComponent.css'
import line from '../../image/line.png'
import mockup7 from '../../image/mockup7.png'
import Background from '../../image/apps.jpg';

import {Row ,Col,Container,ButtonToolbar ,ButtonGroup,Button} from 'react-bootstrap'
class DownloadComponent extends Component {
    render(){
        var sectionStyle = {
            backgroundImage:  `url(${Background})`
          };
        return(
            <div className="download_wrapper index3_download jb_cover" style={ sectionStyle }>
                <div class="line_shape">
                    <img src={line} class="img-fluid" alt="img" />
                </div>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="download_mockup_design jb_cover">
                                  <img src={mockup7}/>
                            </div>
                        </Col >
                        <Col md="6">
                            <div className="download_app_store jb_cover">
                                <h1>Download</h1>
                                <h2>GOBO App Now!</h2>
                                <p>All it takes is 30 seconds to Download. Your Mobile App for Job
                                <br /> Fast, Simple &amp; Delightful.</p>
                            </div>
                            <ButtonToolbar className="app_btn playstore_2 jb_cover">
                                <ButtonGroup >
                                    <Button><span><i class="fa fa-apple" aria-hidden="true"></i></span> App Store</Button>
                                </ButtonGroup>
                                <ButtonGroup >
                                    <Button><span><i class="fa fa-apple" aria-hidden="true"></i></span> App Store</Button>
                                </ButtonGroup>
                               
                            </ButtonToolbar>
                        </Col >
                    </Row>
                </Container>
            </div>
            
        )
    }
}
export default DownloadComponent;
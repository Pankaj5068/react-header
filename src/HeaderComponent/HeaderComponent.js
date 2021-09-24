import react, { Component } from 'react'
import {Carousel,Image,Container,Dropdown ,Row ,Form,Col,NavLink,Nav, Navbar, NavDropdown ,ListGroup ,ButtonGroup, Button,Figure } from 'react-bootstrap';
import './HeaderCSS/HeaderComponent.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import logoimage from '../HeaderComponent/HeaderImage/gobo_logo.png'
import profileimge from '../HeaderComponent/HeaderImage/pf.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderComponent from '../SliderComponent/SliderComponent'
import BestjobsComponent from '../BestjobsComponent/BestjobsComponent'
import StepComponent from '../HomepageComponent/StepComponent/StepComponent'
import CompetitionComponent from '../HomepageComponent/CompetitionComponent/CompetitionComponent'
import DownloadComponent from '../HomepageComponent/DownloadComponent/DownloadComponent'
import StoriesComponent from  '../HomepageComponent/StoriesComponent/StoriesComponent'
import PopularComponent from '../HomepageComponent/PopularComponent/PopularComponent'
import PartnersComponent from '../HomepageComponent/PartnersComponent/PartnersComponent'
import NewsletterComponent from '../HomepageComponent/NewsletterComponent/NewsletterComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

class HeaderComponent extends Component{
   
    mouseEnter() {
        console.log('mouse enter');
        
    }
    mouseLeave() {
        console.log('mouse leave')
       
    }
    render(){
        
    
    
        
        return(
            <div >
                <header className="web_header">
                    <Container fluid>
                        <Navbar variant="light" expand="md" className="main_nav_ul ">
                            <Navbar.Brand className="pt-3">
                                <Nav.Link href="/" className="heade_logo">
                                    <a>
                                        <Image
                                        src={logoimage}
                                        alt="Grouparoo Logo"
                                        width={70}
                                        height={70}
                                        />
                                    </a>
                                </Nav.Link>
                                <span className="d-none">Company</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                               <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto mt-2">
                                    <Navbar.Brand className="pt-3 d-sm-block d-lg-none d-md-none d-xl-none">
                                        <Nav.Link href="/" className="heade_logo">
                                            <a>
                                                <Image
                                                src={logoimage}
                                                alt="Grouparoo Logo"
                                                width={70}
                                                height={70}
                                                />
                                            </a>
                                        </Nav.Link>
                                        <span className="d-none">Company</span>
                                    </Navbar.Brand>
                                        <Nav.Link><a className="nav-link active_class" role="button"> Home</a> </Nav.Link>
                                        <Nav.Link><a className="nav-link" role="button"> Artist</a> </Nav.Link>
                                        <Nav.Link><a className="nav-link" role="button"> Producer</a> </Nav.Link>
                                        <NavDropdown className="pr-2 py-2 align-text-top" title="Auditions" id="basic-nav-dropdown" renderMenuOnMount={true} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}  >
                                            <Container className="eventsNav pt-0 mt-0">
                                                <Row>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>job skills</Dropdown.Header>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>categories</Dropdown.Header>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"><i class="fa fa-square"></i> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"><i class="fa fa-square"></i> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>job location</Dropdown.Header>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"><i class="fa fa-square"></i> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"><i class="fa fa-square"></i> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>open jobs</Dropdown.Header>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"><i class="fa fa-square"></i> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                           <Nav.Link><a className="nav-link" role="button"> <i class="fa fa-square"></i>Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                </Row>
                                        </Container>
                                    </NavDropdown>
                                    <Nav.Link><a className="nav-link" role="button"> contact</a> </Nav.Link>
                                </Nav>
                                <div className="posting_job d-xs-none d-sm-none d-lg-block d-md-block d-xl-block">
                                    <ListGroup horizontal  className="posting_job_inner justify-content-center">
                                        <ListGroup.Item className="searc_form_section">
                                            <ButtonGroup aria-label="Basic example">
                                                <Button  id="quik-search-btn" onClick={this.toggleBox} variant="secondary" className="site-button radius-xl"><i class="fa fa-search"></i></Button>
                                            </ButtonGroup>
                                            <div>
                                                <div className="dez-quik-search">
                                                    <Form className="dez-quik-search_inner">
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Control type="email" placeholder="Enter email" />
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                            <ListGroup.Item >
                                                <Figure >
                                                    <Figure.Image 
                                                        src={profileimge}
                                                    />
                                                </Figure>
                                        </ListGroup.Item>
                                       <ListGroup.Item className="d-flex align-items-center"> <Button className="post_jb_btn" variant="secondary">post a job</Button></ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </header>
                <SliderComponent/>
                <BestjobsComponent/>
                <StepComponent/>
                <CompetitionComponent/>
                <DownloadComponent/>
                <StoriesComponent/>
                <PopularComponent/>
                <PartnersComponent/>
                <NewsletterComponent/>
                <FooterComponent/>
            </div>
        );
    }
}
export default HeaderComponent




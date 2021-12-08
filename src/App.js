import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Topbar from './includes/Topbar';
import Sidebar from './includes/Sidebar';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">      
      <Container fluid>          
        <Row className="content">
          <Col sm={2} className="border sidebar">
            <Row>
              <Col>                                  
                <a href="#" ><h3>Task Manager</h3></a>
              </Col>
            </Row>
            <Row>
              <Col>                                  
                <Sidebar />
              </Col>
            </Row>
          </Col>
          <Col sm={10} className="border">
            <Row>
              <Col>
                <Topbar />
              </Col>
            </Row>            
            <Row className="border">
              <Col className="section-container">
                <Section />                 
              </Col>
              <Col className="section-container">
                <Section />                 
              </Col>
              <Col className="section-container">
                <Section />                 
              </Col>         
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

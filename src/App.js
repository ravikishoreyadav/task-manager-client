import { Container, Row, Col } from 'react-bootstrap';
import Topbar from './includes/Topbar';
import Sidebar from './includes/Sidebar';
import Sections from './features/sections/Sections';

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
                <Sections />                 
              </Col>
              <Col className="section-container">
                <Sections />                 
              </Col>
              <Col className="section-container">
                <Sections />                 
              </Col>         
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

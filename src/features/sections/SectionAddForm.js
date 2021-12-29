import { Col, Card } from 'react-bootstrap'; 

function SectionAddForm(){
    return (
        <Col className="section-container">     
            <Card style={{ width: '20rem' }}>
                <Card.Header><input type="text" className="form-control"/></Card.Header>
                <Card.Body className="section"> 
                                    
                </Card.Body>
            </Card>
        </Col>   
    )
}

export default SectionAddForm;
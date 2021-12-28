import { Card, Col } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addSection, deleteSection} from './sectionSlice';

function Sections(){

    const sections = useSelector((state) => state.section)

    //const dispatch = useDispatch()    
    const renderedSections = sections.map(section => (       
        <Card style={{ width: '20rem' }} key={section.id}>
            <Card.Header>{ section.name }</Card.Header>
            <Card.Body className="section"> 

            </Card.Body>
        </Card>
    ))

    return(
        <Col className="section-container">
            {renderedSections}                
        </Col>       
    );
}

export default Sections;
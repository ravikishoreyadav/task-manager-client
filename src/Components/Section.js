import { Card, Button } from 'react-bootstrap';
import Task from './Task';
function Section(){
    return(

        <Card style={{ width: '20rem' }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body className="section" >                           
                <Task />
                <Task />
                <Task />                
            </Card.Body>
        </Card>
    );
}

export default Section;
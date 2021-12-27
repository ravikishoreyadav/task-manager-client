import { Card } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addSection, deleteSection} from './sectionSlice';
function Sections(){

    const sections = useSelector((state) => state.section)
    console.log(sections);
    const dispatch = useDispatch()


    return(
        <Card style={{ width: '20rem' }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body className="section">                               
            </Card.Body>
        </Card>
    );
}

export default Sections;
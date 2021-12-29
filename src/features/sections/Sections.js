import { Card, Col } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addSection, deleteSection} from './sectionSlice';
import Task from '../tasks/Tasks';
import taskSlice from '../tasks/taskSlice';

function Sections(){

    const sections = useSelector((state) => state.sections)
    const tasks = useSelector((state) => state.tasks)

    return(
        <>
            {   
                sections.map(section => ( 
                    <Col className="section-container">     
                        <Card style={{ width: '20rem' }} key={section.id}>
                            <Card.Header>{ section.title }
                            </Card.Header>
                            <Card.Body className="section">

                            {tasks.filter(task => task.section_id == section.id).map(filteredTask => (
                               <Card className="task" key={filteredTask.id}>            
                                    <Card.Body>
                                        <Card.Title>{filteredTask.title}</Card.Title>
                                        <Card.Text>
                                            {filteredTask.content}
                                        </Card.Text>                
                                    </Card.Body>
                                </Card> 
                            ))}

                            </Card.Body>
                        </Card>
                    </Col>   
                )) 
            }

        </>               
    );
}

export default Sections;
import { Card, Col, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addSection, deleteSection} from './sectionSlice';
//import Task from '../tasks/Tasks';
import taskSlice from '../tasks/taskSlice';
import { taskMoved } from '../tasks/taskSlice';

function Sections(){

    const sections = useSelector((state) => state.sections)
    const tasks = useSelector((state) => state.tasks)

    const dispatch = useDispatch()

    const onTaskMoved = () => {
        if (title && content){
          dispatch(postUpdated({ id: postId, title, content }))
          //history.push(`/posts/${postId}`)
        }
    }

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
                                    <Card.Footer>
                                        <ButtonGroup>
                                            <DropdownButton as={ButtonGroup} title="Move to" id="bg-nested-dropdown" size="sm">
                                                <Dropdown.Item eventKey="1" onClick={onTaskMoved}>To Do</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">In Progress</Dropdown.Item>
                                            </DropdownButton>
                                        </ButtonGroup>
                                    </Card.Footer>                                    
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
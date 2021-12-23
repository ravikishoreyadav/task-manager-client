import { Card, Button } from 'react-bootstrap';
import Tasks from '../tasks/Tasks';
import { useSelector, useDispatch} from 'react-redux';
import {addtask, deletetask } from '../features/tasks/taskSlice';

function Section(){

    const taskVal = useSelector((state) => state.task.value)
    const dispatch = useDispatch()


    return(

        <Card style={{ width: '20rem' }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body className="section" >                           
                <Tasks />
                {taskVal}
                <Button
                    onClick={() => dispatch(addtask())}  
                >
                   Add Task 
                </Button>
                <Button
                    onClick={() => dispatch(deletetask())}  
                > 
                    Remove 
                </Button>                
            </Card.Body>
        </Card>

    );
}

export default Section;
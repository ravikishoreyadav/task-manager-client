import { Card, Button } from 'react-bootstrap';
import Task from './Task';
import { useSelector, useDispatch} from 'react-redux';
import {addtask, deletetask } from '../features/task/taskSlice';

function Section(){

    const taskVal = useSelector((state) => state.task.value)
    const dispatch = useDispatch()


    return(

        <Card style={{ width: '20rem' }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body className="section" >                           
                <Task />
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
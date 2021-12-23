import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {addtask, deletetask } from '../features/tasks/taskSlice';
import TaskAdd from './TaskAdd';

function Task(){
    
    return(
        <TaskAdd />
    );
}

export default Task;
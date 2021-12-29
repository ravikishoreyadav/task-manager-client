import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import taskSlice from './taskSlice';

function Task(){

    const tasks = useSelector((state) => state.tasks)
    
    return(
        <>
            { 
                tasks.map(task => (
                    <Card className="task" key={task.id}>            
                        <Card.Body>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Text>
                                {task.content}
                            </Card.Text>                
                        </Card.Body>
                    </Card>
                ))
            
            }
        </>
    );
}

export default Task;
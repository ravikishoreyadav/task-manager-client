import { Card, Button } from 'react-bootstrap';


function Task(){
    return(

        <Card className="task">            
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>                
            </Card.Body>
        </Card>
    );
}

export default Task;
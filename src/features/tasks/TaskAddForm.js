import React from "react";
import { Button, Card, Form } from "react-bootstrap";


const TaskAddForm = (props) => {


    return (
        <Card className="task">            
            <Card.Body>
                <Form>
                    <Card.Title>Task Add</Card.Title>
                    <Card.Text>
                        <Form.Control type="text" placeholder="Enter the title" />
                        <Form.Control
                        as="textarea"
                        placeholder="Enter the task description"
                        style={{ height: '100px' }}
                        />                    
                    </Card.Text>
                    <Button type="submit">Add</Button>
                </Form>                                
            </Card.Body>
        </Card>
    )
}

export default TaskAddForm;
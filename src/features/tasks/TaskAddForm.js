import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { taskAdded } from "./taskSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


const TaskAddForm = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch();

    const onTaskAddClicked  = () => {
        if(title & content){
            alert('hello')
            dispatch(taskAdded({
                    id: 3,
                    section_id: 1,
                    title,
                    content

                })
            )

            setTitle('')
            setContent('')
        }
    }



    return (
        <Card className="task">            
            <Card.Body>
                <Form>
                    <Card.Title>Task Add</Card.Title>
                    <Card.Text>
                        <Form.Control 
                        type="text" 
                        value={title}
                        onChange={onTitleChanged} 
                        placeholder="Enter the title" 
                        />
                        <Form.Control
                        as="textarea"
                        value={content}
                        onChange={onContentChanged}
                        placeholder="Task description"
                        style={{ height: '70px' }}
                        />                    
                    </Card.Text>
                    <Button type="button" onClick={onTaskAddClicked}>Add</Button>
                </Form>                                
            </Card.Body>
        </Card>
    )
}

export default TaskAddForm;
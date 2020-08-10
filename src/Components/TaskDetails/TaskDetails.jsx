import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
const TaskDetails = props => {
    const { taskid } = props.match.params
    return (
        <>
            <Card>
                <CardHeader><p>TASK : {taskid}</p></CardHeader>
                <CardBody>
                    <p>Title Description in this area!</p>
                    <Link to="/tasks" ><p>Back to Tasks-Page!</p></Link>
                </CardBody>
            </Card>
        </>
    )
}

export default TaskDetails
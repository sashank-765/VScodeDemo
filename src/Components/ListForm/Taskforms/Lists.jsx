import React from 'react';
import Items from '../TaskItems/TaskItem'

const Checks = (props) => {

    const { taskProperty } = props

    if (taskProperty.length === 0) {
        return <p>"No Tasks"</p>
    } else return (
        <>
            {taskProperty.map((m) => <Items key={m.id} task={m} />)}
        </>
    );
}
export default Checks
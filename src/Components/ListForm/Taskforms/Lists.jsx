import React, { Component } from 'react';
import axios from 'axios'
import Items from '../TaskItems/TaskItem'
import { taskURL } from '../../JsonUrl/ConfigURLs';

class Checks extends Component {

    state = {
        tasks : []
    }
    render() {

        const {tasks} = this.state

        axios.get(taskURL)
            .then((res) => {
                console.log(res.data)
                this.setState ({
                    tasks : res.data
                })
            })
            .catch((errr) => {
                console.log(errr)
            })

        if (tasks.length === 0) {
            return <p>"No tasks"</p>
        } else return (
            <>
                {tasks.map((m) => <Items key={m.TaskTitle} task={m} />)}
            </>
        );
    }


}

// const Checks = (props) => {

//     const { taskProperty } = props

//     if (taskProperty.length === 0) {
//         return <p>"No Tasks"</p>
//     } else return (
//         <>
//             {taskProperty.map((m) => <Items key={m.id} task={m} />)}
//         </>
//     );
// }
export default Checks
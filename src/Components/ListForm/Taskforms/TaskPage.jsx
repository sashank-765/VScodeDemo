import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Fields from './ListsForm'
import Checks from './Lists'
import Tasks from '../TaskItems/Task';



class Page extends Component {

    state = {
        listofTasks: [
        ]
    }

    addTask = (data) => {

        const { title, description } = data

        const newTask = new Tasks(title, description)

        this.setState({ listofTasks: [...this.state.listofTasks, newTask] })
    }

    render() {
        const { listofTasks } = this.state
        return (
            <>
                <Row>
                    <Col>
                        <Fields add={this.addTask} />
                    </Col>

                    <Col>
                        <Checks taskProperty={listofTasks} />
                    </Col>
                </Row>
            </>
        )

    }



}

export default Page
import React from 'react'

import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Items = (props) => {

  const { task } = props

  return (
    <ListGroup>

      <Form>
        <ListGroupItem>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" /> <Link  to = { "/tasks/" + task.id } > Task---{task.id} </Link>
            </Label>
          </FormGroup>
        </ListGroupItem>
      </Form>

    </ListGroup>
  )
}

export default Items
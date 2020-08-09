import React from 'react'

import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';


const Items = (props) => {

  const { task } = props

  return (
    <ListGroup>

      <Form>
        <ListGroupItem>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" /> Task---{task.id}
            </Label>
          </FormGroup>
        </ListGroupItem>
      </Form>

    </ListGroup>
  )
}

export default Items
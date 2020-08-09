import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, FormGroup, Button, Form } from 'reactstrap';

class Fields extends Component {

  state = {
    title: '',
    description: ''
  }


  handleChange = (e) => {
    e.preventDefault()

    if (e.target.id === 'titleName') {
      this.setState({
        title: e.target.value
      })
    } else if (e.target.id === 'titledescription') {
      this.setState({
        description: e.target.value
      })
    }

  }



  handleSubmit = (e) => {
    e.preventDefault()

    const data = this.state

    this.props.add(data)

    this.setState({
      title: '',
      description: ''
    })

  }

  render() {
    // console.log("inside render")
    const { title, description } = this.state
    return (

      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <InputGroupAddon addonType="prepend"></InputGroupAddon>
          <Input placeholder="Task-Title" value={title} id="titleName" onChange={this.handleChange} />
        </InputGroup>
        <br />

        <FormGroup>
          <Input type="textarea" name="text" id="titledescription" value={description} placeholder="Task-Description" onChange={this.handleChange} />
        </FormGroup>
        <br />

        <Button color="danger" >Click to Submit</Button>
      </Form>
    )
  }
}
export default Fields
import React from 'react'
import { Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import NavButtons from '../NavTools/NavTools'
const Header = (props) => {
  return (
    <>
      <br /><br />
      <Row>
        <Col>
          <Link to="/tasks" className="float-left"><h3 style={{ color: "red" }}><p align="center">To-Do Lists</p></h3></Link>
        </Col>

        <Col> <NavButtons /></Col>

      </Row>


    </>
  )
}

export default Header
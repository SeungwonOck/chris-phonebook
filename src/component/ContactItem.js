import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
          <Col lg={1}>
              <img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNKJOMrvzdn8J9Z06UVZNsrlRFWAJldC51nM8E4yMcw&s"/>
          </Col>
          <Col lg={11}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
          </Col>
    </Row>
  )
}

export default ContactItem

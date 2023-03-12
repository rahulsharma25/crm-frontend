import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const AddTicketForm = ({handleOnChange, handleOnSubmit, formData}) => {
  return (
    <div className='container-fluid p-3 bg-info'>
      <div className='p-5 bg-light'>
        <h1 className='text-info text-center'>Add Ticket</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className='mb-3' >
            <Form.Label column sm={2}>Subject</Form.Label>
            <Col sm={10}>
              <Form.Control
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleOnChange}
                placeholder='Subject'
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' >
            <Form.Label column sm={2}>Issue Date</Form.Label>
            <Col sm={10}>
              <Form.Control
                type='date'
                name='issueDate'
                value={formData.issueDate}
                onChange={handleOnChange}
                placeholder='Date'
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' >
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
              <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={handleOnChange}
                placeholder='Password'
                required
              />
            </Col>
          </Form.Group>
          <Button type='submit'>Add Ticket</Button>
        </Form>
      </div>
    </div>
  );
};

AddTicketForm.propTypes={
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
};
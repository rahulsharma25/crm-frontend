import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export const ResetPasswordForm = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
  return (
    <Container>
        <Row>
          <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleOnChange}
                  placeholder='Enter Email'
                  required
                />
              </Form.Group>

              <Button type='submit'>Reset</Button>
            </Form>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href='#!' onClick={() => formSwitcher('login')} className='text-info'>Login Now</a>
          </Col>
        </Row>
    </Container>
  );
};

ResetPasswordForm.propTypes={
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};
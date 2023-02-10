import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

export const TicketReply = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Control 
          as='textarea'
          name='reply'
          row={5}
          value={msg}
          onChange={handleOnChange}
          required
        />
        <div className='text-end mt-3 mb-2'>
          <Button type='submit' variant='info'>Reply</Button>
        </div>
      </Form>
    </div>
  );
};

TicketReply.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
};
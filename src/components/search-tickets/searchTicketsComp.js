import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'react-bootstrap';

export const SearchTicketsComp = ({handleOnChange, searchTxt}) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label className='text-end' column sm={3}>Search</Form.Label>
        <Col sm={9}>
          <Form.Control 
            name='searchText'
            value={searchTxt}
            placeholder='Search Ticket'
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

SearchTicketsComp.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  searchTxt: PropTypes.string.isRequired
};
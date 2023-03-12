import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const TicketTable = ({tickets}) => {
  // tickets = {};
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? tickets.map((row) => {
          return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <Link to={`/ticket/${row.id}`}>
                    {row.subject || 'No Subject'}
                  </Link>
                </td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>);
        }):
        <tr>
          <td colSpan={4} className='text-center'>No tickets to show</td>
        </tr>
        }
      </tbody>
    </Table>
  );
};


TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import './ticketMessages.css';

export const TicketMessages = ({msgHistory}) => {
  if (msgHistory) {
    return msgHistory.map((msg, i) => {
      return (
        <div key={i} className={`d-flex mt-2 ${msg.senderType==='client' ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className='sender-info'>
            <div>{msg.sentBy}</div>
            <div>{msg.date}</div>
            <div>{msg.time}</div>
          </div>
          <div className='message-text' style={{'width': '100%'}}>{msg.message}</div>
        </div>);
    });
  }
  else {
    return null;
  }
};

TicketMessages.propTypes = {
  msgHistory: PropTypes.array.isRequired
};
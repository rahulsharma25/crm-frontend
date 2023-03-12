import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BreadcrumbComp } from '../../components/breadcrumb/breadcrumb';
import tickets from '../../assets/data/dummy-ticket-data.json';
import { TicketMessages } from '../../components/ticket-messages/ticketMessages';
import { TicketReply } from '../../components/ticket-reply/ticketReply';
import { useParams } from 'react-router-dom';

export const TicketLandingPage = () => {
  const {tId} = useParams();

  const [replyMsg, setReplyMsg] = useState('');
  const [ticket, setTicket] = useState('');
  useEffect(()=>{
    for(let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        break;
      }
    }
  }, [replyMsg, tId]);

  const handleOnChange = (e) => {
    setReplyMsg(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(replyMsg);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page='Ticket' />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-row fw-bolder text-secondary'>
          <div className='me-4'>
            <p>Subject: </p>
            <p>Added On: </p>
            <p>Status: </p>
          </div>
          <div>
            <p>{ticket.subject}</p>
            <p>{ticket.addedAt}</p>
            <p>{ticket.status}</p>
          </div>
        </Col>
        <Col className='text-end'>
          <Button variant='info'>Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {ticket.history && <TicketMessages msgHistory={ticket.history} />}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketReply msg={replyMsg} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
        </Col>
      </Row>
    </Container>
  );
};

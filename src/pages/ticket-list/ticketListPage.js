import React, {useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BreadcrumbComp } from '../../components/breadcrumb/breadcrumb';
import { SearchTicketsComp } from '../../components/search-tickets/searchTicketsComp';
import { TicketTable } from '../../components/ticket-table/ticketTable';
import tickets from '../../assets/data/dummy-ticket-data.json';

export const TicketListPage = () => {

  const [ticketsToShow, setTicketsToShow] = useState(tickets);
  const [searchTxt, setSearchTxt] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [searchTxt, ticketsToShow]);

  const searchTickets = (str) => {
    const displayTickets = tickets.filter((ticket) => {
      return ticket.subject.toLowerCase().includes(str.toLowerCase());
    });
    
    setTicketsToShow(displayTickets);
  };

  const handleOnChange = (e) => {
    const str = e.target.value;    
    setSearchTxt(str);
    searchTickets(str);
  };

  return (
    <Container>
      <Row className='mt-2'>
        <Col>
          <BreadcrumbComp page='Ticket List'/>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Button>Add New Ticket</Button>
        </Col>
        <Col>
          <SearchTicketsComp handleOnChange={handleOnChange} searchTxt={searchTxt}/>
        </Col>
      </Row>
      <Row>
        <TicketTable tickets={ticketsToShow} />
      </Row>
    </Container>
  );
};
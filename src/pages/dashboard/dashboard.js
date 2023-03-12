import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/ticketTable';
import tickets from '../../assets/data/dummy-ticket-data.json';
import { BreadcrumbComp } from '../../components/breadcrumb/breadcrumb';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
                <BreadcrumbComp page='Dashboard' />
            </Col>
        </Row>
        <Row>
            <Col className='mb-2 mt-5 text-center'>
                <Link to={'/add-ticket'}>
                    <Button variant='info' style={{'fontSize': '20px', 'padding': '10px'}}>Add New Ticket</Button>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col className='mb-2 text-center'>
                <div>Total Tickets: 50</div>
                <div>Pending Tickets: 10</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
                <div>Recent Tickets</div>
            </Col>
        </Row>
        <hr/>

        <Row>
            <Col className='ticket-table'>
                <TicketTable tickets={tickets}/>
            </Col>
        </Row>

    </Container>
  );
};

import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BreadcrumbComp } from '../../components/breadcrumb/breadcrumb';
import { AddTicketForm } from '../../components/add-ticket-form/addTicketForm';

export const AddTicket = () => {
    const inititalFormData = {
        subject: '',
        issueDate: '',
        password: ''
    };
    const [formData, setformData] = useState(inititalFormData);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbComp page='Add Ticket' />
                </Col>
            </Row>
            <Row>
                <Col >
                    <AddTicketForm
                    handleOnChange={handleOnChange} 
                    handleOnSubmit={handleOnSubmit}
                    formData={formData}
                    />
                </Col>
            </Row>
        </Container>
  );
};

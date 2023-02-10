import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Entry } from './pages/entry/entry';
import { AddTicket } from './pages/new-ticket/addTicketPage';
import { TicketLandingPage } from './pages/ticket-landing/ticketLandingPage';
// import { TicketLandingPage } from './pages/ticket-landing/ticketLandingPage';
import { TicketListPage } from './pages/ticket-list/ticketListPage';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketListPage /> */}
        <TicketLandingPage />
      </DefaultLayout>
    </div>
  );
}

export default App;

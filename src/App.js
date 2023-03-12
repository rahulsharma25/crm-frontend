import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/defaultLayout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Entry } from './pages/entry/entry';
import { AddTicket } from './pages/new-ticket/addTicketPage';
import { TicketLandingPage } from './pages/ticket-landing/ticketLandingPage';
// import { TicketLandingPage } from './pages/ticket-landing/ticketLandingPage';
import { TicketListPage } from './pages/ticket-list/ticketListPage';
import { PrivateRoute } from './components/private-route/privateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Entry />} />
          <Route element={<PrivateRoute/>}>
            <Route element={<DefaultLayout />} >
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='add-ticket' element={<AddTicket />} />
              <Route path='tickets' element={<TicketListPage />} />
              <Route path='ticket/:tId' element={<TicketLandingPage />} />
            </Route>
          </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Entry } from './pages/entry/entry';
import { AddTicket } from './pages/new-ticket/addTicketPage';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Entry } from './pages/entry/entry';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;

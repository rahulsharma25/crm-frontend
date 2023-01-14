import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
import { Entry } from './pages/entry/entry';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        hi
        {/* <div>hi</div> */}
      </DefaultLayout>
    </div>
  );
}

export default App;

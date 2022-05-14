import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Start } from './components/Start';
import { Timer } from './components/Timer';
import { Trivia } from './components/Trivia';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Start />
      <Timer />
      <Trivia />
      <div className="pyramid">
        <ul className="moneyList">
          <li className={'moneyListItem active'}>
            <span className="moneyListItemNumber"></span>
            <span className="moneyListItemAmount"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';

function App() {
  return (
    <div className="app">
      <Start />
      <>
        <div className="main">
          <h1 className="endText">You earned:</h1>
          <div className="top">
            <div className="timer">
              <Timer />
            </div>
          </div>
          <div className="bottom">
            <Trivia />
          </div>
        </div>
      </>
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

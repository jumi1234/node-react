import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>...</div>)}>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

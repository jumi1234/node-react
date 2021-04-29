import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>...</div>)}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Grid from './Componetns/Grid/grid';
import Home from './Componetns/Home/home';

import { Provider } from 'react-redux';
import { CounterStore } from './Store/Counter/CounterStore.js';


function App() {
  return (
    <>
      <Provider store={CounterStore}>


        <Home />

      </Provider>

    </>
  );
}

export default App;

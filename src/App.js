import React from 'react';
import './App.css';

import MainComponent from './components/MainComponent';
import globalStore from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



const App = () => {

  // console.log("Redux State: ", globalStore.getState());

  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>

  );
}

export default App;

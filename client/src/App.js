import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar.jsx'
import ShoppingList from './components/ShoppingList.jsx'
import ItemModal from './components/ItemModal.jsx'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux';
import store from './store'

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;

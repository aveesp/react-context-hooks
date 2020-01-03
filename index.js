import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BokkContextProvider from './context/BookContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BokkContextProvider>
              <BookList />
            </BokkContextProvider>
            <ToggleTheme />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

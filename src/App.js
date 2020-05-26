import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import PostForm from './components/PostForm';
import store from './store';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
     <Provider store = {store}>
       <PostForm/>
       <hr/>
       <Posts/>
     </Provider>
    </div>
  );
}

export default App;

import "./App.css"
import React from 'react';
import FlashCardHome from './components/FlashCardHome';
import store from "./store/store";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";


function App() {
  return (<div className="body">
    <NavBar/>
    <Provider store={store}>
      <FlashCardHome />
    </Provider>
  </div>);
}

export default App;

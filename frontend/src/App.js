import React , { useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

//components
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Matches from './components/Matches';
// import Chat from './components/Chat';

//styles
import './App.css';
import './styles/Login.css';
import './styles/Header.css';
import './styles/Home.css';
// import './styles/Chat.css';

function App() {
  const [token, setToken] = useState(null);

  //setToken(localStorage.getItem('token'));
  console.log(localStorage.getItem('token'));

  if(!token && !localStorage.getItem('token')) {
    console.log("App token: "+token+"\nRedirecting to Login...");
    return <Login setToken={setToken} />
  } else {
    console.log("App token: "+token+"\nRedirecting to Home...");

  }
  
  return ( 
    <div className="App" >
      {/* Header */}
      <Header />
      {/* {!token ?? <Login setToken={setToken} />} */}
      <div className="wrapper">
        
        {/* Routes */}
        <Routes>
          {/* Home: Login + Study Buddy Card */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          {/* Matches: Matches List + Chat */}
          <Route path="/matches" element={<Matches />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;


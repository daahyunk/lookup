import './App.css';
//import NavBar from '../public/NavBar'
import Page from './Pages/Main/Page'
import Timetable from './Pages/Timetable/Timetable'
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import NavigationBar from './Pages/Main/NavigationBar'
import Write from './Pages/Write/Write'
import Footer from './Pages/Main/Footer'
import SignUpSuccess from './Pages/SignUp/SignUpSuccess';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}
    <Router>
        <Routes>
          <Route path="/" element={<Page/>}/>
          <Route path="/Timetable" element={
            <>
              <NavigationBar />
              <Timetable />
              <Footer/>
            </>
          } />
          <Route path="/Write" element={
            <>
              <NavigationBar /> 
              <Write />
              <Footer/>
            </>
          } />
          <Route path="/Chat" element={
            <>
              <NavigationBar /> 
              <Chat />
              <Footer/>
            </>
          } />
          <Route path="/Login" element={
            <>
              <NavigationBar /> 
              <Login />
              <Footer/>
            </>
          } />
          <Route path="/Signup" element={
            <>
              <NavigationBar /> 
              <SignUp />
              <Footer/>
            </>
          } />
          <Route path="/Profile" element={
            <>
              <NavigationBar />
              <Profile />
              <Footer/>
            </>
          } />
          <Route path="/signup-success" element={<SignUpSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

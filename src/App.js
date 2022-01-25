import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Update from './component/Update';
import Dashboard from './component/Dashboard';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Login from './component/Login';
// import Protected from './component/Protected';
import { useSelector } from 'react-redux'
import { selectUser } from './features/Userslice';
import Sidebarone from './component/Sidebarone';
import Content from './component/Content';

function App() {
  //const user = useSelector(selectUser);
  const auth = sessionStorage.getItem("loginInfo");
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Routes>
        {!auth &&( <Route path="/login" element={<Login />} />)} 
        {auth && (  <Route path="/" element={<Dashboard />} />)} 
        <Route path="/about" element={<Update/>} />
        <Route path="/sidebar" element={<Sidebarone/>} />
        <Route path="/content" element={<Content/>} />

        <Route path="*" element={<Login />} />
      </Routes>
       
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPerson from './components/AddPerson';
import EditPerson from "./components/EditPerson";
import Person from "./components/Person";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persons/add" element={<AddPerson />} />
          <Route path="/persons/edit/:id" element={<EditPerson />} />
          <Route path="/persons/:id" element={<Person />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

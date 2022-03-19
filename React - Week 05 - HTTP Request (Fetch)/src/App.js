import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPerson from './Components/AddPerson';
import PersonList from './Components/PersonList';

const App = () => {

  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [about, setAbout] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = {
      firstName,
      lastName,
      email,
      password,
      about,
    };

    fetch('http://localhost:3002/employee/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    }).then((response) => response.json())
      .then(() => getData())
  };

  const DeletePerson = (pPersonid) => {
    fetch('http://localhost:3002/employee/' + pPersonid, {
      method: 'DELETE',
    }).then(() => getData())
  };

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3002/employee')
      const data = await response.json()
      setList(data)
    } catch (err) {
      console.log(err.message)
    }
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App container">
      <div className='row'>
        <div className='col-4'>
          <AddPerson
            list={list}
            setList={setList}
            handleSubmit={handleSubmit}
            firstName={firstName}
            setfirstName={setFirstName}
            lastName={lastName}
            setlastName={setLastName}
            email={email}
            setemail={setEmail}
            password={password}
            setpassword={setPassword}
            about={about}
            setabout={setAbout} />
        </div>
        <div className='col-8'>
          <PersonList
            list={list}
            DeletePerson={DeletePerson} /></div>
      </div>
    </div>
  );
}

export default App;

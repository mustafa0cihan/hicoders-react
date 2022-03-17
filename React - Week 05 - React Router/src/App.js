/**
 1) In this assignment, we were asked to create a mockup of Home, About, and Contact pages using a React router.
2) A new Components folder is created for the new components we will create.
3) In this folder, 4 separate js files named NavBarComp, Home, About, Contact are created.
4) After the Home, About and Contact components are created, they are imported into our Navbar component named NavBarComp.
5) After the React-router structure is installed with "npm install," "react-router-dom" is imported in the file named NavBarComp.js.
6) React bootstrap structure is installed.
7) Using the BrowserRouter, Routes, Route, and Link components, the pages are rendered separately.
 */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './Components/NavBarComp';

function App() {
  return (
    <div className="App">

      <NavBarComp />

    </div>
  );
};

export default App;

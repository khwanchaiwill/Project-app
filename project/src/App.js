import React, { useState, useEffect} from 'react';
import './App.css';
import ProjectForm from './component/ProjectForm';
import ProjectsList from './component/ProjectList'
import axios from 'axios';
import ActionList from './component/actionList'
import Project from './component/Project';
import { Route, NavLink, useLocation} from 'react-router-dom';

function App() {

  const [projectList, setProjectList] = useState([]);
  const location = useLocation();

  const getprojectList = () => {
    axios
      .get("https://sprint-api.herokuapp.com/api/project")
      .then(res => {
        console.log(res)
         setProjectList(res.data)
       
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getprojectList();
  }, [location]);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Somthing will edit here</h1>
       <NavLink to='/form'>Project Form</NavLink>
       <NavLink to='/'>Home</NavLink>
      </header>
      <div className="app-body">
       
      </div>
      <div>
        <Route exact path='/'>
          <ProjectsList  project={projectList} />
        </Route>
        <Route path="/projects/:id/actions">
          <Project  projectList={ProjectsList} />
        </Route>
        <Route path='/form'>
          <ProjectForm />
        </Route>
         
      </div>
      
    </div>
  );
}

export default App;

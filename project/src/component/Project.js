import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { useParams } from 'react-router-dom';
import ActionForm from './actionForm'
import ActionList from './actionList';


function Project (){
    const [action, setAction] = useState([]);
    const [projectById, setProjectById] = useState([])
    const params = useParams();

    const getProjectById = (id) => {
        axios
        .get(`https://sprint-api.herokuapp.com/api/project/${params.id}`)
        .then(res => {
          console.log(res)
           setProjectById(res.data)
         
        })
        .catch(err => console.log(err.response));
    };
    
    const getprojectAction = () => {
        axios
            .get(`https://sprint-api.herokuapp.com/api/project/${params.id}/actions`)
            .then(res => {
            console.log(res)
            setAction(res.data)
            
            })
            .catch(err => console.log(err.response));
        };

useEffect(() => {
  getprojectAction();
  getProjectById();
}, []);

return (
  <div className="App">
    <div className="app-body">
        <div>
            <div>

            </div>
                <h3>Projectname: {projectById.name} </h3>
                <h5>Project description : {projectById.description} </h5>
            {
                action.map(act => (
                    <div key={act.id} >
                        
                        <p><span className="span-topic" >Action Numbur:</span>  {act.id} </p>
                        <p><span className="span-topic" >Action Description:</span>  {act.description} </p>
                        <p><span className="span-topic" >Action Notes:</span> {act.notes} </p>
                    </div>
                    )
                )
            }
            <ActionForm/>
        </div>
    </div>
  </div>
);
}
export default Project;
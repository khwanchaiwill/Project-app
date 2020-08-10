import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const initialProject = {
    name: '',
    description: '', 
}

function ProjectForm(){
    const [project, setProject] = useState(initialProject);
    const { push } = useHistory();

    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://sprint-api.herokuapp.com/api/project", project)
            .then( res => {
                console.log(res.data)
                setProject(res.data)
                push('/')

            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Project Name</label>
                <input 
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={handleChange}
                    placeholder="project name"
                />
                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                    placeholder="project description"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ProjectForm;
import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

const initialProject = {
    description: '', 
    notes: ''
}

function ActionForm(){
    const [actionValue, setActionValue] = useState(initialProject);
    // const { push } = useHistory();
    const params = useParams();
    

    const handleChange = e => {
        setActionValue({
            ...actionValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:4500/api/actions/${params.id}`, actionValue)
            .then( res => {
                console.log(res.data)
                setActionValue(res.data)
                window.location.reload();
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Action Description</label>
                <input 
                    type="text"
                    name="description"
                    value={actionValue.description}
                    onChange={handleChange}
                    placeholder="Action description"
                />
                <label>Action Notes</label>
                <input 
                    type="text"
                    name="notes"
                    value={actionValue.notes}
                    onChange={handleChange}
                    placeholder="Action notes"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ActionForm;
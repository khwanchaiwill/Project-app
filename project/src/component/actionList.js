import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ActionList (){
    const [actions, setAction] = useState([])

    const getActionList = () => {
    axios
      .get("http://localhost:4500/api/actions")
      .then(res => {
        console.log(res)
        setAction(res.data)
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getActionList();
  }, []);

    return(
        <div>
             {
          actions.map(action => (
            <div key={action.id} >
              <div>
                <h3>{action.name} </h3> 
                <p> {action.description} </p>
              </div>  
            </div>
          ))
        }
        </div>
    )

}
export default ActionList;

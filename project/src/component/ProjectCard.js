import React from 'react';

const ProjectCard = props => {
    const {description, name, id} = props.pro
  return (
    <div>
        <h3>{id} </h3>
        <h3>{name} </h3>
        <p> {description} </p>
    </div>
   
  );
};
export default ProjectCard;

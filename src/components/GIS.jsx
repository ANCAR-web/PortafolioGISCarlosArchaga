import React from 'react';
import Portafolio from '../data/Portafolio';
import { useParams } from 'react-router-dom';
import "../styles/GIS.css";
const GIS = () => {
  const Params = useParams();
  const getUser = (id)=>{
    return Portafolio.find((user)=>user.id === id);
  }
  const user = getUser(parseInt(Params.gisId))
 
  return (
    <div className='GIS'>
      <h3>{user.title}</h3>
      <div className='imagenes'>
        {user.tecnologias.map((skills)=>{
          return <img src={skills.img} alt="devps"/>
        })}
      </div>
      <img src={user.imagen} alt="Descripcion" />
      <p>
        {user.descp}
      </p>
      <span><a href={user.enlace}>Mirar proyecto.</a></span>
    </div>
  )
}

export default GIS;
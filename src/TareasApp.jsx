import React, { useEffect, useState } from 'react'
import { ListaTareas } from './ListaDePendientes/components/ListaTareas'
import { AgregarTarea } from './ListaDePendientes/components/AgregarTarea'


export const TareasApp = () => {
  const [tareasA, setTareasA] = useState([]);
  
  const agregarTarea = (NewTarea) => {
    console.log(NewTarea)
    setTareasA([ ...tareasA,NewTarea]); 
   
  };
  const eliminar = (NewTarea)=>{
    console.log(NewTarea)
    setTareasA(NewTarea);

  }
 
  
  
  //ya se tuvo que obtener los datos en el useState
  
 
  return (
    <>
    
    <AgregarTarea
        onNewTarea={(value) => {
          agregarTarea(value)
        }}
      />

      {
        <ListaTareas
          onNewTarea={(tareasA).length === 0 ? null : tareasA}
          onOldTarea={(value) => {
            eliminar(value)
          }}
        />
        
      }
    
      
      
      
    </>
  );
};

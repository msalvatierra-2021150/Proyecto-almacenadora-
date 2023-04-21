import React, { useEffect, useState } from "react";
import { Eliminar } from "./Eliminar";
import { Update } from "./Update";

export const ListaTareas = ({ onNewTarea,onOldTarea }) => {
  const [tareasA, setTareasA] = useState([]);

  const agregarTarea = (NewTarea) => {
    
      if(Object.keys(NewTarea).length === 0){
        
      }else{
        setTareasA(NewTarea); 
        
      }
    
  };
  
  
  useEffect(() => {
    if (onNewTarea !== null) {
      onOldTarea(tareasA);
    }
  }, [tareasA]);

  useEffect(() => {
    if (onNewTarea !== null) {
      setTareasA(onNewTarea);
    }
  }, [onNewTarea]);
  
 
  return (
    <>
   
      <div className="container">
        <h2>Lista de usuarios</h2>
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">Realizada</th>
              <th scope="col">#</th>
              <th scope="col">Nombre tarea</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Fecha termina</th>
              <th scope="col">Estado</th>
              <th scope="col">Nombre Usuario</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {onNewTarea === null
              ? []
              : tareasA.map((t) => {
                  return (
                    <tr key={t.id}>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <th scope="row">{t.id} </th>
                      <td>{t.nombreTarea} </td>
                      <td>{t.descripcion}</td>
                      <td>{t.fechaStart}</td>
                      <td>{t.fechaEnd} </td>
                      <td>{t.estado}</td>
                      <td>{t.nombrePersona}</td>
                      <td>
                        
                        <Update
                          id={t.id}
                          onNewTarea={onNewTarea}
                          onOldTarea={(value) => {
                            agregarTarea(value);
                          }}
                          key={t.id}
                          
                        />
                          <Eliminar
                            id={t.id}
                            onNewTarea={onNewTarea}
                            onOldTarea={(value) => {
                              agregarTarea(value);
                            }}   
                          />
                        
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

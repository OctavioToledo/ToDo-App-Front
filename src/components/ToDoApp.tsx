import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const [listaTarea, setlistaTarea ] = useState<string[]>([])

  const handleAddTask = () => { 
        if (nuevaTarea.trim()==='')return 
        setlistaTarea(tareaAnterior =>[...tareaAnterior, nuevaTarea])
        setNuevaTarea('')
        {
            
        }
   }

   const handleBorrarTarea = (index:number) =>{
        setlistaTarea(tareas => tareas.filter((_,i) => i !== index))
   }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />

        <button onClick={handleAddTask}>Agregar Tarea</button>

        <ListaTareas listaTareas={listaTarea} borrarTarea={handleBorrarTarea}></ListaTareas>

      </div>
    </>
  );
};

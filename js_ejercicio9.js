const {useState}=React;

function App(){
  const[texto,setTexto]=useState("");
  const[tareas,setTareas]=useState(()=>{
    const datos=localStorage.getItem("tareas");
    if(datos){
        return JSON.parse(datos);
    }else{
        return[];
    }

   });

     function guardarLocalstorage(nuevasTareas) {
        localStorage.setItem(
            "tareas",
            JSON.stringify(nuevasTareas)
        );
    }
    function agregarTarea(){
           if (texto === "") {
            return;
        }

        const tarea = {
            id: Date.now(),
            texto: texto,
            checkbox: false
        };

        const nuevasTareas = [...tareas, tarea];

        setTareas(nuevasTareas);
        guardarLocalstorage(nuevasTareas);

        setTexto("");


    }
    function cambiarCheckbox(id) {

        const nuevasTareas = tareas.map((tarea) => {

            if (tarea.id === id) {
                return {
                    ...tarea,
                    checkbox: !tarea.checkbox
                };
            }

            return tarea;
        });

        setTareas(nuevasTareas);
        guardarLocalstorage(nuevasTareas);
    }

    function eliminarTareas(){
        const nuevasTareas = tareas.filter(function(tarea) {
            return tarea.checkbox === false;
        });

        setTareas(nuevasTareas);
        guardarLocalstorage(nuevasTareas);

    }
    return(
        <div>
            <input
            id="input"
              type="text"
              value={texto}
              onChange={(e)=>setTexto(e.target.value)}
            
            
            />
            <button id="button" onClick={agregarTarea}>
             Agregar
            </button>

            <ul id="lista">
                 {tareas.map((tarea) => (

                    <li key={tarea.id}>

                        <span>
                            {tarea.texto}
                        </span>

                        <input
                            type="checkbox"
                            checked={tarea.checkbox}
                            onChange={() => cambiarCheckbox(tarea.id)}
                        />

                    </li>

                ))}


            </ul>
            <button
                id="limpiar"
                onClick={eliminarTareas}
            >
                Limpiar tareas completadas
            </button>








        </div>

    );


}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
























      

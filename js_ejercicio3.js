const{useState}=React;

function App(){
    const[texto,setTexto]=useState("");
    const[tareas,settareas]=useState([]);
    function agregarTarea(){
        if (texto===""){
            return;
        }
        const tarea={
            id:Date.now(),
            texto:texto
        };
        settareas([...tareas,tarea]);
        setTexto("");


    }
    function eliminarTarea(id){
        const nuervasTareas=tareas.filter(tarea=>tarea.id!=id);
        settareas(nuervasTareas);
    }
    return(
        <div>
            <input
              id="input"
              type="text"
              value={texto}
              onChange={(e)=>setTexto(e.target.value)}
            />
            <button  id="button" onClick={agregarTarea}>
            Agregar

            </button>
            <ul id="lista">
              {tareas.map((tarea)=>(
                <li key={tarea.id}>
                    {tarea.texto}
                    <button onClick={()=>eliminarTarea(tarea.id)}>
                        Eliminar
                    </button>

                </li>

               ))}

            </ul>

    

        </div>
    );
       

}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);



















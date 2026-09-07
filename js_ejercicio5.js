const { useState }= React;


function App(){
    const[numero1,setNumero1]=useState("");
    const[numero2,setNumero2]=useState("");
    const[resultado,setResultado]=useState("");

    function calcular(operacion){
        if (numero1 === "" || numero2 === "") { 
            setResultado("Debe introducir un número en ambas casillas"); 
            return; 
        } 
        if (operacion === "dividir" && Number(numero2) === 0) { 
            setResultado("No se puede dividir entre 0"); 
            return; 
        }
        
        let resultadoOperacion;
        if(operacion==="sumar"){
            resultadoOperacion=Number(numero1)+Number(numero2);
        }
        if(operacion==="restar"){
            resultadoOperacion = Number(numero1) - Number(numero2);

        }
        if(operacion==="multiplicar"){
            resultadoOperacion = Number(numero1) * Number(numero2);

        }
        if(operacion==="dividir"){
            resultadoOperacion = Number(numero1) / Number(numero2);

        }
        setResultado("="+ resultadoOperacion);
        setNumero1("");
        setNumero2("");


    }
    return(
        <div>
            <input
              id="numero1"
              type="number"
              value={numero1}
              onChange={(e)=>setNumero1(e.target.value)}
            />
            <input
              id="numero2"
              type="number"
              value={numero2}
              onChange={(e)=>setNumero2(e.target.value)}
            />
            <button onClick={()=>calcular("sumar")}>
                Sumar

            </button>
            <button onClick={()=>calcular("restar")}>
                Restar

            </button>
            <button onClick={()=>calcular("multiplicar")}>
                Multiplicar

            </button>
            <button onClick={()=>calcular("dividir")}>
                Dividir
            </button>
            <p id="resultado">{resultado}</p>

        </div>

    );

}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);







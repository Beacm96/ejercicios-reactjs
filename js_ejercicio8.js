const {useState}=React;
function App(){
    const[texto,setTexto]=useState("");
    const[caracteres,setCaracteres]=useState(0);
    const[palabras,setPalabras]=useState(0);

    function contabilizador(){
        const textoLimpio=texto.trim();
        let totalPalabras=0;
        let totalCaracteres=0;

        if(textoLimpio!==""){
            totalPalabras=textoLimpio.split(/\s+/).length;;
            totalCaracteres=textoLimpio.replace(/\s/g, "").length;;
            setCaracteres(totalCaracteres);
            setPalabras(totalPalabras);

        }


    }
    return(
        <div>
            <input
              type="text"
              value={texto}
              onChange={(e)=>setTexto(e.target.value)}
            />
            <button onClick={contabilizador}>
                Contabilizar
            </button>
            <div>
                Número de caracteres:{caracteres}
                <br/>
                Número de palabras:{palabras}

            </div>
            
        </div>

    );

}







ReactDOM.createRoot(document.getElementById("root")).render(<App />);





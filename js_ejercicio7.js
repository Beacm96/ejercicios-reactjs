const {useState}=React;
function App(){
    const[longitud,setLongitud]=useState("");
    const[contraseña,setContraseña]=useState("");
    const[error,setError]=useState("");
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const especiales = "!@#$%^&*";
    function generaContraseña(){
        if(longitud==""||Number(longitud<4)){
            setError("Debe ser mayor o igual a 4");
            setContraseña("");
            return;

        }

        let nuevaContraseña = "";
        nuevaContraseña += letras[Math.floor(Math.random() * letras.length)];
        nuevaContraseña += numeros[Math.floor(Math.random() * numeros.length)];
        nuevaContraseña += especiales[Math.floor(Math.random() * especiales.length)];

        const caracteres=letras+numeros+especiales;

        for (let i = 3; i < Number(longitud); i++) {

            const posicion = Math.floor(Math.random() * caracteres.length);

            nuevaContraseña += caracteres[posicion];
        }
        setContraseña(nuevaContraseña);
        setError("");



    }
    return(
        <div>

            <input
                type="number"
                value={longitud}
                onChange={(e) => setLongitud(e.target.value)}
            />

            <button onClick={generaContraseña}>
                Generar contraseña
            </button>

            <p>{error}</p>
            <p>Resultado: {contraseña}</p>

        </div>

    );

}




ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
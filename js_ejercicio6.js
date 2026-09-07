const {useState,useRef}=React;

function App(){
    const[segundos,setSegundos]=useState(0);
    const temporizador=useRef(null);
    
    function iniciar(){
        if (temporizador.current) {
            return;
        }

        temporizador.current = setInterval(function() {

            setSegundos(function(segundosActuales) {
                return segundosActuales + 1;
            });

        }, 1000);

    }
    function pausar(){
        clearInterval(temporizador.current);

        temporizador.current = null;

    }
    function reiniciar(){
        clearInterval(temporizador.current);

        temporizador.current = null;

        setSegundos(0);

    }

    const horas = Math.floor(segundos / 3600);

    const minutos = Math.floor((segundos % 3600) / 60);

    const segundosRestantes = segundos % 60;
    return(
        <div>

            <p id="resultado">
                {String(horas).padStart(2, "0")}:
                {String(minutos).padStart(2, "0")}:
                {String(segundosRestantes).padStart(2, "0")}
            </p>

            <button id="inicio" onClick={iniciar}>
                Iniciar
            </button>

            <button id="pausar" onClick={pausar}>
                Pausar
            </button>

            <button id="reiniciar" onClick={reiniciar}>
                Reiniciar
            </button>

        </div>
    );


}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);















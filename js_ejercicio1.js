const { useState } = React;

function App(){
    const [color,setColor]=useState("White");
    function cambiarColor(){
        const nuevoColor="#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(nuevoColor);
    }
    return(
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <button id="button" onClick={cambiarColor}>
                Cambiar Color

            </button>
            <p id="results">
                Este es el nuevo color

            </p>
            
            

        </div>

    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);












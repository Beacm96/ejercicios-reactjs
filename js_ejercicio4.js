const { useState } = React;

function App() {

    const [texto, setTexto] = useState("");

    const productos = [
        "Manzana",
        "Pera",
        "Plátano",
        "Fresa",
        "Naranja"
    ];

    const resultados = productos.filter(producto =>
        producto.toLowerCase().includes(texto.toLowerCase())
    );

    return (
        <div>
            <input
                id="buscador"
                type="text"
                onChange={(e) => setTexto(e.target.value)}
            />

            <ul id="lista">
                {resultados.map(producto => (
                    <li key={producto}>{producto}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);




















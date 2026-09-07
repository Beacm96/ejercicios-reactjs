const { useState } = React;

function App() {

    const [total, setTotal] = useState(0);

    function contarClics() {
        setTotal(total + 1);
    }

    return (
        <div>
            <button onClick={contarClics}>
                Contar clics
            </button>
            <p>Total clics: {total}</p>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);











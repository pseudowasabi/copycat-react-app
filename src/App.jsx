import './App.css'
import {useState} from "react";

const Card = ({ title }) => {
    const [hasLiked, setHasLiked] = useState(false);

    return (
        <div className="card">
            <h2>{title}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? "❤️" : "🤍"}
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="card-container">
            <h2>Functional Arrow Component</h2>
            <Card title="Spiderman: No way home" />
            <Card title="Top Gun: Maverick" />
            <Card title="F1: The movie" />
        </div>
    )
}

export default App

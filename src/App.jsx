import './App.css'
import {useEffect, useState} from "react";

const Card = ({ title }) => {
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);

    useEffect(() => {
        console.log('CARD RENDERED');
    }, []);

    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>{title} <br/> {count || null}</h2>

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

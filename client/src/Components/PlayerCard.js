import React from 'react';
import './PlayerCard.css';
import useDarkMode from '../Hooks/useDarkMode';

const PlayerCard = (props) => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return (
        <div>
            {props.players.map(player => {
                return(
                <div className="card-container" key={player.id}>
                    <button onClick={toggleMode}>Dark Mode</button>
                    <h1>{player.name}</h1>
                    <p>{player.country}</p>
                    <p>{player.searches}</p>
                </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;

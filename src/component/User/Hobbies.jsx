import PropTypes from 'prop-types';
import { useState } from 'react';

Hobbies.propTypes = {
    hobbies: PropTypes.array,
};

export function Hobbies({hobbies}) {
    // const hobbiesFromDB = [{id: 1, nom: "Sport"}, {id: 2, nom: "Informatique"}, {id: 3, nom: "Jardinage"}];
    const [hobbiesArray, setHobbies] = useState(hobbies);
    let newHobby = ''; 

    const addHobby = () => {
        if (newHobby) {
            let newarrayhobbies = [...hobbiesArray];
            newarrayhobbies.push({ id: newarrayhobbies.length + 1, nom: newHobby });
            setHobbies(newarrayhobbies);
       
        } else {
            alert("Vide");
        }
    }

    return (
        <div>
            <h2>Mes Hobbies</h2>
            <input 
                type="text" 
                onChange={(e) => newHobby = e.target.value} 
                placeholder="Ajouter un hobby" 
            />
            <button onClick={addHobby}>Ajouter</button>
            <ul>
                {hobbiesArray.map((hobby) => (
                    <li style={{padding: "10px", border:"1px solid black",margin:"0.5rem"}} key={hobby.id}>{hobby.nom}</li>
                ))}
            </ul>
        </div>
    );
}
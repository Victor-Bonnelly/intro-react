import PropTypes from 'prop-types';

Hobbies.propTypes = {
    hobbies: PropTypes.array,
};

export function Hobbies({hobbies}) {
    // const hobbiesFromDB = [{id: 1, nom: "Sport"}, {id: 2, nom: "Informatique"}, {id: 3, nom: "Jardinage"}];
    return (
        <div>
            <h2>Mes Hobbies</h2>
            <ul>
                {hobbies.map((hobby) => (
                    <li style={{padding: "10px", border:"1px solid black",margin:"0.5rem"}} key={hobby.id}>{hobby.nom}</li>
                ))}
               
            </ul>
        </div>
    );
}
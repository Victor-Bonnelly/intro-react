import { useState } from 'react';
export function Compteur() {
    const [compteur, changeCompteur] = useState(0);
    function incrementer() {
        changeCompteur(compteur + 1);
    }
    function decrementer() {
        changeCompteur(compteur - 1);
    }
    return (
        <div>
             <p>{compteur}</p>
            <button onClick={incrementer}>Incrementer</button>
           
            <button onClick={decrementer}>Decrementer</button>
        </div>
    )
}

const recuperer_perso="https://thronesapi.com/api/v2/Characters"
import { useEffect, useState } from 'react';


export default function GOT() {
    const [perso, setPerso] = useState([]); 

    async function getPerso() {
        const response = await fetch(recuperer_perso);
        const data = await response.json();
        setPerso(data);
        console.log("perso", data); 
    }

    useEffect(() => {
        getPerso();
    }, []);
    return (
        <div>
           <h1>Persos</h1>
           {perso.map((perso) => ( 
            <div key={perso.id}>
                <h3>{perso.fullName}</h3>
            </div>
           ))}
        </div>
    )
}
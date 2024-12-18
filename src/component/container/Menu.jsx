import { useState } from 'react';
export function Menu() {
    const [show, changeValue] = useState(0);
    function showMenu() {
        changeValue(true);
    }
    function hideMenu() {
        changeValue(false);
    }
    return (
        <div>
           
            {show ? (
                <div>
                <menu>
                    <li>Accueil</li>
                    <li>A propos</li>
                    <li>Contact</li>
                </menu>
                <button onClick={hideMenu}>Masquer</button>
                </div>
            ) : (
                <button onClick={showMenu}>Afficher</button>
            )}
        </div>
    )
}
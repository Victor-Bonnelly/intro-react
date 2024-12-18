export function Routine() {
    return (
        <div>
        <button className="bg-gray-200 text-black font-medium py-2 px-4 rounded hover:bg-gray-300" onClick={() => alert("c'est l'heure de manger")}>
           Manger
        </button>
        <button className="bg-gray-200 text-black font-medium py-2 px-4 rounded hover:bg-gray-300" onClick={() => alert("c'est l'heure de dormir")}>
           Dormir
        </button>
        <button className="bg-gray-200 text-black font-medium py-2 px-4 rounded hover:bg-gray-300" onClick={() => alert("c'est l'heure d'etudier")}>
           Etudier
        </button>
        </div>
    )
}
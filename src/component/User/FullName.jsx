
import { FirstName } from './FirstName'
import { LastName } from './LastName'
import { useContext } from 'react';
import { utilisateurContext } from '../../App';


export function FullName() {
    const user = useContext(utilisateurContext);
    return (
        <div>
        
            <FirstName prenom={user.prenom} />  
            <LastName nom={user.nom} />
        </div>
    )
}


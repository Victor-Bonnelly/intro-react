import { FullName } from './FullName'
import { Hobbies } from './Hobbies'
import { useContext } from 'react';
import { utilisateurContext } from '../../App';

export function User() {
    const user = useContext(utilisateurContext);
    return (
        <div>
            User:
            <FullName />
            <Hobbies hobbies={user.hobbies} />
        </div>
    )
}
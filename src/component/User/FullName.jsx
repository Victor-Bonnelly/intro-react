import PropTypes from 'prop-types';
import { FirstName } from './FirstName'
import { LastName } from './LastName'

export function FullName({user}) {
    return (
        <div>
        
            <FirstName prenom={user.prenom} />  
            <LastName nom={user.nom} />
        </div>
    )
}

FullName.propTypes = {
    user: PropTypes.shape({
        prenom: PropTypes.string,
        nom: PropTypes.string,
    }),
};
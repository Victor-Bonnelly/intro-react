import { FullName } from './FullName'
import { Hobbies } from './Hobbies'
import PropTypes from 'prop-types';

User.propTypes = {
    user: PropTypes.shape({
        prenom: PropTypes.string,
        nom: PropTypes.string,
        hobbies: PropTypes.array,
    }),
};
export function User({user}) {
    return (
        <div>
            User:
            <FullName user={user} />
            <Hobbies hobbies={user.hobbies} />
        </div>
    )
}
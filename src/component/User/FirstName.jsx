import PropTypes from 'prop-types';

export function FirstName({prenom}) {
    return (
        <div>
            {prenom}
        </div>
    )
}

FirstName.propTypes = {
    prenom: PropTypes.string,
};
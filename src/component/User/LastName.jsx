import PropTypes from 'prop-types';

export function LastName({nom}) {
    return (
        <div>
            {nom}
        </div>
    )
}

LastName.propTypes = {
    nom: PropTypes.string,
};
import PropTypes from 'prop-types';

const TextInput = ({placeholder, value, onChange})=> {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='w-full p-2 border border-secondary rounded me-2'
        />
    )
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

const InputComponent = {
    TextInput
};

export default InputComponent;
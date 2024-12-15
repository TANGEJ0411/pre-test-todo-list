import PropTypes from 'prop-types';

/**
 * 
 * @param {String} placeholder - 輸入框提示文字
 * @param {String} value - 輸入框值
 * @param {Function} onChange - 輸入框值改變時的callback 
 * @returns {JSX.Element} - return一個輸入框元件
 */

const TextInput = ({placeholder, value, onChange})=> {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='w-full p-2 border border-secondary rounded me-2 outline-primary'
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
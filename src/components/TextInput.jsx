import PropTypes from "prop-types";

export default function TextInput({
  className,
  id,
  label,
  type,
  autoComplete,
  onChange,
  value,
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

/* Définition des types des props */
TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired, 
  type: PropTypes.string, 
  autoComplete: PropTypes.string, 
  onChange: PropTypes.func.isRequired,
};

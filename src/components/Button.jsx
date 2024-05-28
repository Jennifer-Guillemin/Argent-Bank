import PropTypes from "prop-types";

export default function Button({ className, type, onClick, children }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

/* Définition des types des props */
Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string, 
    onClick: PropTypes.func, 
    children: PropTypes.node.isRequired, 
};
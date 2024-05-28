import PropTypes from "prop-types";

export default function FeatureItem({ logo, altText, title, description }) {
  return (
    <article className="feature-item">
      <img src={logo} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </article>
  );
}

/* Définition des types des props */
FeatureItem.propTypes = {
  logo: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import Button from "../components/Button";

export default function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h2 className="account-title">{title}</h2>
        <h3 className="account-amount">{amount}</h3>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button className="transaction-button">View transactions</Button>
      </div>
    </section>
  );
}

/* Définition des types des props */
Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

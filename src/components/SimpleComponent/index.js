import PropTypes from "prop-types";

console.log(PropTypes);

function SimpleComponent({ name }) {
  return <p>Hello {name}</p>;
}

SimpleComponent.propTypes = {
  name: PropTypes.string,
};

export default SimpleComponent;

import PropTypes from "prop-types";

console.log(PropTypes);

function SimpleComponent(props) {
  return <p>Hello {props.name}</p>;
}

SimpleComponent.propTypes = {
  name: PropTypes.string,
};

export default SimpleComponent;

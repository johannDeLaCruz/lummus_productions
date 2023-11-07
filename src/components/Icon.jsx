import PropTypes from "prop-types";

const Icon = ({ icon: IconComponent, size }) => {
  return <IconComponent style={{ fontSize: size }} />;
};

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
};

export default Icon;

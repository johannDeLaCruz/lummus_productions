import PropTypes from "prop-types";

const Icon = ({ icon: IconComponent, size, color }) => {
  return (
    <IconComponent
      style={{
        fontSize: size,
      }}
      color={color}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;

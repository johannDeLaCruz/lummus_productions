import PropTypes from "prop-types";

export default function Logo({ height, logoColor }) {
  const src = `/src/assets/Logo_${logoColor}.svg`;
  return <img src={src} alt="logo" height={height}/>;
}

Logo.propTypes = {
  height: PropTypes.number.isRequired,
  logoColor: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  height: 60,
  logoColor: "white",
};

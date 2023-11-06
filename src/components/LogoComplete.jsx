import PropTypes from "prop-types";

export default function Logo({ height }) {
  const src = "/src/assets/Logo_complete_noBG_CUT.png";
  return <img src={src} alt="logo" height={height} />;
}

Logo.propTypes = {
  height: PropTypes.number.isRequired,
};

Logo.defaultProps = {
  height: 100,
};

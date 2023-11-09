import PropTypes from "prop-types";

export default function LampImg({ height, color }) {
  const src = `/src/assets/lamp_original_${color}.png`;
  return <img src={src} alt="lamp_img" height={height} />;
}

LampImg.propTypes = {
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

LampImg.defaultProps = {
  height: 200,
  color: "white",
};

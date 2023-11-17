import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { createPathFillIn } from "../utils/animationVariants.js";

export default function Logo({ logoColor, animated, isInView, ...props }) {
  function getHexColor(logoColor) {
    const colorMap = {
      white: "#fff",
      purple: "#8C0FC7",
    };
    return colorMap[logoColor] || "#fff";
  }
  const currentColor = getHexColor(logoColor);

  const pathFillIn = createPathFillIn(currentColor);

  return animated ? (
    <motion.svg
      viewBox="177.4516 74.7256 241.0846 135.0085"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      initial="hidden"
      animate= {isInView ? "visible" : "hidden"}
      variants={pathFillIn}
    >
      <motion.path
        d="M211.902 86.577c-.086-.793-.263-.816-.53-.07-3.433 9.474-6.443 18.66-9.03 27.56a1843.607 1843.607 0 00-18.31 67.77c-1.506 6.04-2.523 10.57-3.05 13.59-.45 2.6-.58 7.94 4.14 6.8 7.52-1.81 14.9-6.27 21.6-10.06.96-.55 1.56-1.27 2.56-1.73 3.44-1.56 7.01-3.85 9.9-5.24 3.2-1.53 21.01-9.99 22.84-5.25a1.44 1.44 0 01-1.22 1.95c-6.073.534-11.846 2.23-17.32 5.09a1494.036 1494.036 0 00-29.88 16.02c-4.27 2.35-13.5 5.31-15.61-1.37-1.63-5.17.83-11.46 2.05-16.48 5.14-21.133 8.594-34.816 10.36-41.05 3.08-10.866 6.15-21.733 9.21-32.6 2.08-7.37 4.77-14.85 7.17-22.3.95-2.95 2.57-5.72 3.75-8.72a2.775 2.775 0 013.46-1.62c.534.18.897.847 1.09 2 .374 2.24.35 4.74-.07 7.5a1.25 1.25 0 01-1.33 1.06c-1.126-.086-1.696-.526-1.71-1.32a29.75 29.75 0 00-.07-1.53z"
        strokeWidth={1}
        paintOrder="stroke"
        variants={pathFillIn}
      />
      <motion.path
        d="M263.112 159.887a205.04 205.04 0 019.52-15.01c.694-.993 1.49-1.5 2.39-1.52a1.9 1.9 0 011.93 1.93c-.06 3.87-.71 9.94.51 13.6.114.327.314.397.6.21.594-.38 1-.84 1.22-1.38 2-4.8 4.064-9.066 6.19-12.8.64-1.13 1.81-2.42 3.24-2.36 1.214.054 1.844.74 1.89 2.06.1 3.4-.31 14.31 6.26 10.64 4.34-2.43 6.45-4.77 9.65-8.17.927-.986 1.647-2.24 2.16-3.76.567-1.68 1.227-3.3 1.98-4.86.27-.545.828-.89 1.44-.89 1.094-.006 1.69.437 1.79 1.33.047.434-.09 1.014-.41 1.74-2.7 6.167-4.693 12.14-5.98 17.92-.386 1.72-.166 1.804.66.25 2.207-4.166 4.827-8.363 7.86-12.59.76-1.06 1.557-1.92 2.39-2.58a1.717 1.717 0 011.828-.181c.592.298.955.91.932 1.571-.1 3.38-.76 10.53.51 13.61.327.787.707.754 1.14-.1l7.62-14.96a2.155 2.155 0 012.59-1.08c1.227.4 1.864 1.35 1.91 2.85.11 3.94.04 6.55 1.53 9.53.147.3.377.504.69.61 5.12 1.67 11.5-5.75 14.33-9.32a1.755 1.755 0 012.2-.45c.88.467 1.037 1.214.47 2.24-1.74 3.154-2.396 6.53-1.97 10.13.087.72.22 1.147.4 1.28a1.44 1.44 0 001.93-.16c2.754-2.96 5.18-6.026 7.28-9.2.707-1.066 1.524-1.34 2.45-.82 1.46.83 1.39 2.98 1.11 4.41-.64 3.33-1.84 8.53-.46 11.74.147.347.4.467.76.36 4.72-1.42 12.46-12.54 15.18-16.74.547-.84 1.274-2.446 2.18-4.82 2.04-5.3 6.257-7.84 12.65-7.62 1.067.04 1.99.384 2.77 1.03.26.22.414.497.46.83.2 1.38-.56 2.14-1.96 1.91-5.3-.86-10.03 1.02-11.42 6.24-1.93 7.29 6.56 17.17 9.64 23.36a.13.13 0 00.21.02l20.45-23.9a1.43 1.43 0 012.15-.04l.24.25c.434.476.447 1.2.03 1.69l-21.42 25.33c-.226.274-.31.587-.25.94 1.534 8.64-.673 15.964-6.62 21.97-1.64 1.66-5.41 3.25-7.38 1.23-3.92-4 6.26-18.45 9.75-23.12.192-.256.275-.583.23-.91-.233-1.833-.743-3.36-1.53-4.58-3.02-4.653-5.393-8.606-7.12-11.86-.59-1.12-.73-2.51-1.28-3.55-.42-.8-.863-.813-1.33-.04-3.246 5.34-7.01 9.88-11.29 13.62-5.03 4.4-9.54.74-8.97-5.11.147-1.526.277-3.073.39-4.64.04-.553-.133-.626-.52-.22-1.65 1.72-3.23 4.35-5.13 5.28-5.45 2.67-7.84-3.1-6.97-7.41a.37.37 0 00-.53-.41c-1.58.79-2.6 2.22-3.94 3.02-3.97 2.38-8.23 3.01-10.93-1.5-1.1-1.833-1.64-3.586-1.62-5.26.027-1.94-.393-2.043-1.26-.31a473.84 473.84 0 00-3.94 8.17c-.94 2-2.56 5.03-4.9 4.68-4.04-.6-3.97-9.98-3.71-12.64.127-1.246-.15-1.343-.83-.29a230.812 230.812 0 00-10.8 18.52c-.62 1.194-1.513 1.63-2.68 1.31a1.965 1.965 0 01-1.42-2.29l2.67-13.34a.498.498 0 00-.258-.534.473.473 0 00-.572.104c-1.706 1.84-3.816 3.324-6.33 4.45-3.47 1.56-7.51.57-8.98-3.09-.766-1.913-1.206-3.736-1.32-5.47-.073-1.14-.363-1.196-.87-.17-1.37 2.75-5.93 15.8-10.23 13.19-3.21-1.96-2.97-9.74-2.68-12.87.054-.56-.08-.606-.4-.14a157.815 157.815 0 00-10.57 17.74c-.52 1.014-1.123 1.784-1.81 2.31a1.7 1.7 0 01-2.73-1.32 31.207 31.207 0 01.33-5.01c.21-1.49 1.04-3.67 1.35-5.59.087-.533-.046-.596-.4-.19-2.64 3.09-10.24 13.36-14.95 10.65-3.3-1.9-2.19-8.32-2.07-11.34.02-.433-.113-.49-.4-.17-2.39 2.63-6.3 8.39-10.49 4.92-3.31-2.75-1.27-13.78 2.04-16.19a.89.89 0 01.93-.11c1.13.45 1.38 1.54.85 2.64-1.73 3.6-2.87 7.2-1.98 10.65.092.353.355.636.699.752.344.115.721.047 1.001-.182 3.59-2.9 5.38-6.57 8.15-9.88a1.75 1.75 0 012.91.35c.494.994.58 2.094.26 3.3-1 3.807-1.21 7.664-.63 11.57a.805.805 0 00.65.67c.94.194 1.844-.143 2.71-1.01 5.787-5.726 10.457-11.656 14.01-17.79 1.67-2.88 1.89-6.17 4-8.9a1.01 1.01 0 01.98-.37c1.52.26 1.71 1.62 1.17 2.91a126.61 126.61 0 00-6.37 19.41c-.12.514-.05.544.21.09zm122.54 31.6c-.42 1.094-.603 2.067-.55 2.92a.81.81 0 001.33.56c4.834-4.113 7.347-9.396 7.54-15.85.027-.806-.223-.906-.75-.3-3.193 3.7-5.716 7.924-7.57 12.67z"
        strokeWidth={1}
        paintOrder="stroke"
        variants={pathFillIn}
      />
    </motion.svg>
  ) : (
    <svg
      viewBox="177.4516 74.7256 241.0846 135.0085"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M211.902 86.577c-.086-.793-.263-.816-.53-.07-3.433 9.474-6.443 18.66-9.03 27.56a1843.607 1843.607 0 00-18.31 67.77c-1.506 6.04-2.523 10.57-3.05 13.59-.45 2.6-.58 7.94 4.14 6.8 7.52-1.81 14.9-6.27 21.6-10.06.96-.55 1.56-1.27 2.56-1.73 3.44-1.56 7.01-3.85 9.9-5.24 3.2-1.53 21.01-9.99 22.84-5.25a1.44 1.44 0 01-1.22 1.95c-6.073.534-11.846 2.23-17.32 5.09a1494.036 1494.036 0 00-29.88 16.02c-4.27 2.35-13.5 5.31-15.61-1.37-1.63-5.17.83-11.46 2.05-16.48 5.14-21.133 8.594-34.816 10.36-41.05 3.08-10.866 6.15-21.733 9.21-32.6 2.08-7.37 4.77-14.85 7.17-22.3.95-2.95 2.57-5.72 3.75-8.72a2.775 2.775 0 013.46-1.62c.534.18.897.847 1.09 2 .374 2.24.35 4.74-.07 7.5a1.25 1.25 0 01-1.33 1.06c-1.126-.086-1.696-.526-1.71-1.32a29.75 29.75 0 00-.07-1.53z"
        strokeWidth={1}
        paintOrder="stroke"
        stroke={currentColor}
        fill={currentColor}
      />
      <path
        d="M263.112 159.887a205.04 205.04 0 019.52-15.01c.694-.993 1.49-1.5
      2.39-1.52a1.9 1.9 0 011.93 1.93c-.06 3.87-.71 9.94.51
      13.6.114.327.314.397.6.21.594-.38 1-.84 1.22-1.38 2-4.8 4.064-9.066
      6.19-12.8.64-1.13 1.81-2.42 3.24-2.36 1.214.054 1.844.74 1.89 2.06.1
      3.4-.31 14.31 6.26 10.64 4.34-2.43 6.45-4.77 9.65-8.17.927-.986 1.647-2.24
      2.16-3.76.567-1.68 1.227-3.3 1.98-4.86.27-.545.828-.89 1.44-.89 1.094-.006
      1.69.437 1.79 1.33.047.434-.09 1.014-.41 1.74-2.7 6.167-4.693 12.14-5.98
      17.92-.386 1.72-.166 1.804.66.25 2.207-4.166 4.827-8.363
      7.86-12.59.76-1.06 1.557-1.92 2.39-2.58a1.717 1.717 0
      011.828-.181c.592.298.955.91.932 1.571-.1 3.38-.76 10.53.51
      13.61.327.787.707.754 1.14-.1l7.62-14.96a2.155 2.155 0 012.59-1.08c1.227.4
      1.864 1.35 1.91 2.85.11 3.94.04 6.55 1.53 9.53.147.3.377.504.69.61 5.12
      1.67 11.5-5.75 14.33-9.32a1.755 1.755 0 012.2-.45c.88.467 1.037 1.214.47
      2.24-1.74 3.154-2.396 6.53-1.97 10.13.087.72.22 1.147.4 1.28a1.44 1.44 0
      001.93-.16c2.754-2.96 5.18-6.026 7.28-9.2.707-1.066 1.524-1.34 2.45-.82
      1.46.83 1.39 2.98 1.11 4.41-.64 3.33-1.84 8.53-.46
      11.74.147.347.4.467.76.36 4.72-1.42 12.46-12.54 15.18-16.74.547-.84
      1.274-2.446 2.18-4.82 2.04-5.3 6.257-7.84 12.65-7.62 1.067.04 1.99.384
      2.77 1.03.26.22.414.497.46.83.2 1.38-.56 2.14-1.96 1.91-5.3-.86-10.03
      1.02-11.42 6.24-1.93 7.29 6.56 17.17 9.64 23.36a.13.13 0
      00.21.02l20.45-23.9a1.43 1.43 0 012.15-.04l.24.25c.434.476.447 1.2.03
      1.69l-21.42 25.33c-.226.274-.31.587-.25.94 1.534 8.64-.673 15.964-6.62
      21.97-1.64 1.66-5.41 3.25-7.38 1.23-3.92-4 6.26-18.45
      9.75-23.12.192-.256.275-.583.23-.91-.233-1.833-.743-3.36-1.53-4.58-3.02-4.653-5.393-8.606-7.12-11.86-.59-1.12-.73-2.51-1.28-3.55-.42-.8-.863-.813-1.33-.04-3.246
      5.34-7.01 9.88-11.29 13.62-5.03
      4.4-9.54.74-8.97-5.11.147-1.526.277-3.073.39-4.64.04-.553-.133-.626-.52-.22-1.65
      1.72-3.23 4.35-5.13 5.28-5.45 2.67-7.84-3.1-6.97-7.41a.37.37 0
      00-.53-.41c-1.58.79-2.6 2.22-3.94 3.02-3.97 2.38-8.23
      3.01-10.93-1.5-1.1-1.833-1.64-3.586-1.62-5.26.027-1.94-.393-2.043-1.26-.31a473.84
      473.84 0 00-3.94 8.17c-.94 2-2.56 5.03-4.9
      4.68-4.04-.6-3.97-9.98-3.71-12.64.127-1.246-.15-1.343-.83-.29a230.812
      230.812 0 00-10.8 18.52c-.62 1.194-1.513 1.63-2.68 1.31a1.965 1.965 0
      01-1.42-2.29l2.67-13.34a.498.498 0 00-.258-.534.473.473 0
      00-.572.104c-1.706 1.84-3.816 3.324-6.33 4.45-3.47
      1.56-7.51.57-8.98-3.09-.766-1.913-1.206-3.736-1.32-5.47-.073-1.14-.363-1.196-.87-.17-1.37
      2.75-5.93 15.8-10.23
      13.19-3.21-1.96-2.97-9.74-2.68-12.87.054-.56-.08-.606-.4-.14a157.815
      157.815 0 00-10.57 17.74c-.52 1.014-1.123 1.784-1.81 2.31a1.7 1.7 0
      01-2.73-1.32 31.207 31.207 0 01.33-5.01c.21-1.49 1.04-3.67
      1.35-5.59.087-.533-.046-.596-.4-.19-2.64 3.09-10.24 13.36-14.95
      10.65-3.3-1.9-2.19-8.32-2.07-11.34.02-.433-.113-.49-.4-.17-2.39 2.63-6.3
      8.39-10.49 4.92-3.31-2.75-1.27-13.78 2.04-16.19a.89.89 0 01.93-.11c1.13.45
      1.38 1.54.85 2.64-1.73 3.6-2.87 7.2-1.98
      10.65.092.353.355.636.699.752.344.115.721.047 1.001-.182 3.59-2.9
      5.38-6.57 8.15-9.88a1.75 1.75 0 012.91.35c.494.994.58 2.094.26 3.3-1
      3.807-1.21 7.664-.63 11.57a.805.805 0 00.65.67c.94.194 1.844-.143
      2.71-1.01 5.787-5.726 10.457-11.656 14.01-17.79 1.67-2.88 1.89-6.17
      4-8.9a1.01 1.01 0 01.98-.37c1.52.26 1.71 1.62 1.17 2.91a126.61 126.61 0
      00-6.37 19.41c-.12.514-.05.544.21.09zm122.54 31.6c-.42 1.094-.603
      2.067-.55 2.92a.81.81 0 001.33.56c4.834-4.113 7.347-9.396
      7.54-15.85.027-.806-.223-.906-.75-.3-3.193 3.7-5.716 7.924-7.57 12.67z"
        strokeWidth={1}
        paintOrder="stroke"
        stroke={currentColor}
        fill={currentColor}
      />
    </svg>
  );
}

Logo.propTypes = {
  height: PropTypes.number.isRequired,
  logoColor: PropTypes.string.isRequired,
  animated: PropTypes.bool.isRequired,
  isInView: PropTypes.bool,
};

Logo.defaultProps = {
  height: 60,
  logoColor: "white",
  animated: false,
};

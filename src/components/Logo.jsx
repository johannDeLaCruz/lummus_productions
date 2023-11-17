import PropTypes from "prop-types";

export default function Logo({ height, logoColor }) {
  function getHexColor(logoColor) {
    const colorMap = {
      white: "#fff",
      purple: "#8C0FC7",
    };
    return colorMap[logoColor] || "#fff";
  }
  const currentColor = getHexColor(logoColor);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="808.5,410,262,150"
      alt="logo"
    >
      <defs>
        <clipPath id="a">
          <path
            fill="none"
            stroke="none"
            strokeWidth={1}
            d="M808.5 410H1070.5V560H808.5z"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#a)"
        fill="none"
        strokeWidth="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g fill="none" stroke={currentColor} strokeWidth={2}>
          <path d="M853.25 423.22c.027.307.05.817.07 1.53.013.793.583 1.233 1.71 1.32a1.25 1.25 0 001.33-1.06c.42-2.76.443-5.26.07-7.5-.193-1.153-.557-1.82-1.09-2a2.775 2.775 0 00-3.46 1.62c-1.18 3-2.8 5.77-3.75 8.72-2.4 7.45-5.09 14.93-7.17 22.3a19875.04 19875.04 0 01-9.21 32.6c-1.767 6.233-5.22 19.917-10.36 41.05-1.22 5.02-3.68 11.31-2.05 16.48 2.11 6.68 11.34 3.72 15.61 1.37 9.9-5.453 19.86-10.793 29.88-16.02 5.473-2.86 11.247-4.557 17.32-5.09a1.44 1.44 0 001.22-1.95c-1.83-4.74-19.64 3.72-22.84 5.25-2.89 1.39-6.46 3.68-9.9 5.24-1 .46-1.6 1.18-2.56 1.73-6.7 3.79-14.08 8.25-21.6 10.06-4.72 1.14-4.59-4.2-4.14-6.8.527-3.02 1.543-7.55 3.05-13.59a1843.607 1843.607 0 0118.31-67.77c2.587-8.9 5.597-18.087 9.03-27.56.267-.747.443-.723.53.07" />
          <path d="M904.25 496.44a126.61 126.61 0 016.37-19.41c.54-1.29.35-2.65-1.17-2.91a1.01 1.01 0 00-.98.37c-2.11 2.73-2.33 6.02-4 8.9-3.553 6.133-8.223 12.063-14.01 17.79-.867.867-1.77 1.203-2.71 1.01a.805.805 0 01-.65-.67c-.58-3.907-.37-7.763.63-11.57.32-1.207.233-2.307-.26-3.3a1.75 1.75 0 00-2.91-.35c-2.77 3.31-4.56 6.98-8.15 9.88-.28.228-.657.297-1.001.181a1.077 1.077 0 01-.699-.751c-.89-3.45.25-7.05 1.98-10.65.53-1.1.28-2.19-.85-2.64a.89.89 0 00-.93.11c-3.31 2.41-5.35 13.44-2.04 16.19 4.19 3.47 8.1-2.29 10.49-4.92.287-.32.42-.263.4.17-.12 3.02-1.23 9.44 2.07 11.34 4.71 2.71 12.31-7.56 14.95-10.65.353-.407.487-.343.4.19-.31 1.92-1.14 4.1-1.35 5.59a31.207 31.207 0 00-.33 5.01 1.7 1.7 0 002.73 1.32c.687-.527 1.29-1.297 1.81-2.31a157.815 157.815 0 0110.57-17.74c.32-.467.453-.42.4.14-.29 3.13-.53 10.91 2.68 12.87 4.3 2.61 8.86-10.44 10.23-13.19.507-1.027.797-.97.87.17.113 1.733.553 3.557 1.32 5.47 1.47 3.66 5.51 4.65 8.98 3.09 2.513-1.127 4.623-2.61 6.33-4.45a.473.473 0 01.572-.104c.194.1.3.319.258.534l-2.67 13.34a1.965 1.965 0 001.42 2.29c1.167.32 2.06-.117 2.68-1.31 3.34-6.387 6.94-12.56 10.8-18.52.68-1.053.957-.957.83.29-.26 2.66-.33 12.04 3.71 12.64 2.34.35 3.96-2.68 4.9-4.68a473.84 473.84 0 013.94-8.17c.867-1.733 1.287-1.63 1.26.31-.02 1.673.52 3.427 1.62 5.26 2.7 4.51 6.96 3.88 10.93 1.5 1.34-.8 2.36-2.23 3.94-3.02a.37.37 0 01.53.41c-.87 4.31 1.52 10.08 6.97 7.41 1.9-.93 3.48-3.56 5.13-5.28.387-.407.56-.333.52.22a197.61 197.61 0 01-.39 4.64c-.57 5.85 3.94 9.51 8.97 5.11 4.28-3.74 8.043-8.28 11.29-13.62.467-.773.91-.76 1.33.04.55 1.04.69 2.43 1.28 3.55 1.727 3.253 4.1 7.207 7.12 11.86.787 1.22 1.297 2.747 1.53 4.58.045.327-.038.654-.23.91-3.49 4.67-13.67 19.12-9.75 23.12 1.97 2.02 5.74.43 7.38-1.23 5.947-6.007 8.153-13.33 6.62-21.97-.06-.353.023-.667.25-.94l21.42-25.33a1.28 1.28 0 00-.03-1.69l-.24-.25a1.43 1.43 0 00-2.15.04l-20.45 23.9a.13.13 0 01-.21-.02c-3.08-6.19-11.57-16.07-9.64-23.36 1.39-5.22 6.12-7.1 11.42-6.24 1.4.23 2.16-.53 1.96-1.91-.047-.333-.2-.61-.46-.83-.78-.647-1.703-.99-2.77-1.03-6.393-.22-10.61 2.32-12.65 7.62-.907 2.373-1.633 3.98-2.18 4.82-2.72 4.2-10.46 15.32-15.18 16.74-.36.107-.613-.013-.76-.36-1.38-3.21-.18-8.41.46-11.74.28-1.43.35-3.58-1.11-4.41-.927-.52-1.743-.247-2.45.82-2.1 3.173-4.527 6.24-7.28 9.2a1.44 1.44 0 01-1.93.16c-.18-.133-.313-.56-.4-1.28-.427-3.6.23-6.977 1.97-10.13.567-1.027.41-1.773-.47-2.24a1.755 1.755 0 00-2.2.45c-2.83 3.57-9.21 10.99-14.33 9.32a1.156 1.156 0 01-.69-.61c-1.49-2.98-1.42-5.59-1.53-9.53-.047-1.5-.683-2.45-1.91-2.85a2.155 2.155 0 00-2.59 1.08l-7.62 14.96c-.433.853-.813.887-1.14.1-1.27-3.08-.61-10.23-.51-13.61a1.693 1.693 0 00-.932-1.571 1.717 1.717 0 00-1.828.181c-.833.66-1.63 1.52-2.39 2.58-3.033 4.227-5.653 8.423-7.86 12.59-.827 1.553-1.047 1.47-.66-.25 1.287-5.78 3.28-11.753 5.98-17.92.32-.727.457-1.307.41-1.74-.1-.893-.697-1.337-1.79-1.33-.612 0-1.17.345-1.44.89a42.123 42.123 0 00-1.98 4.86c-.513 1.52-1.233 2.773-2.16 3.76-3.2 3.4-5.31 5.74-9.65 8.17-6.57 3.67-6.16-7.24-6.26-10.64-.047-1.32-.677-2.007-1.89-2.06-1.43-.06-2.6 1.23-3.24 2.36-2.127 3.733-4.19 8-6.19 12.8-.22.54-.627 1-1.22 1.38-.287.187-.487.117-.6-.21-1.22-3.66-.57-9.73-.51-13.6a1.9 1.9 0 00-1.93-1.93c-.9.02-1.697.527-2.39 1.52a205.04 205.04 0 00-9.52 15.01c-.26.453-.33.423-.21-.09" />
          <path d="M1027 528.13c-.42 1.093-.603 2.067-.55 2.92a.81.81 0 001.33.56c4.833-4.113 7.347-9.397 7.54-15.85.027-.807-.223-.907-.75-.3-3.193 3.7-5.717 7.923-7.57 12.67" />
        </g>
        <path
          d="M808.5 740h262v-55h-262zm44.75-15.864c.027-.368.05-.98.07-1.836.013-.952.583-1.48 1.71-1.584.652-.059 1.232.496 1.33 1.272.42 3.312.443 6.312.07 9-.193 1.384-.557 2.184-1.09 2.4-1.404.558-2.924-.297-3.46-1.944-1.18-3.6-2.8-6.924-3.75-10.464-2.4-8.94-5.09-17.916-7.17-26.76-3.06-13.04-6.13-26.08-9.21-39.12-1.767-7.48-5.22-23.9-10.36-49.26-1.22-6.024-3.68-13.572-2.05-19.776 2.11-8.016 11.34-4.464 15.61-1.644 9.9 6.544 19.86 12.952 29.88 19.224 5.473 3.432 11.247 5.468 17.32 6.108.45.047.856.345 1.096.805.24.46.286 1.028.124 1.535-1.83 5.688-19.64-4.464-22.84-6.3-2.89-1.668-6.46-4.416-9.9-6.288-1-.552-1.6-1.416-2.56-2.076-6.7-4.548-14.08-9.9-21.6-12.072-4.72-1.368-4.59 5.04-4.14 8.16.527 3.624 1.543 9.06 3.05 16.308a2572.387 2572.387 0 0018.31 81.324c2.587 10.68 5.597 21.704 9.03 33.072.267.896.443.868.53-.084zm51-87.864a174.178 174.178 0 006.37 23.292c.54 1.548.35 3.18-1.17 3.492-.374.081-.751-.09-.98-.444-2.11-3.276-2.33-7.224-4-10.68-3.553-7.36-8.223-14.476-14.01-21.348-.867-1.04-1.77-1.444-2.71-1.212-.342.081-.603.404-.65.804a40.95 40.95 0 00.63 13.884c.32 1.448.233 2.768-.26 3.96-.262.636-.773 1.07-1.36 1.155-.587.085-1.17-.191-1.55-.735-2.77-3.972-4.56-8.376-8.15-11.856-.28-.274-.657-.356-1.001-.217-.344.138-.608.478-.699.901-.89 4.14.25 8.46 1.98 12.78.53 1.32.28 2.628-.85 3.168-.327.168-.637.124-.93-.132-3.31-2.892-5.35-16.128-2.04-19.428 4.19-4.164 8.1 2.748 10.49 5.904.287.384.42.316.4-.204-.12-3.624-1.23-11.328 2.07-13.608 4.71-3.252 12.31 9.072 14.95 12.78.353.488.487.412.4-.228-.31-2.304-1.14-4.92-1.35-6.708a44.827 44.827 0 01-.33-6.012c.012-.768.383-1.463.96-1.798.576-.334 1.26-.252 1.77.214.687.632 1.29 1.556 1.81 2.772 3.173 7.448 6.697 14.544 10.57 21.288.32.56.453.504.4-.168-.29-3.756-.53-13.092 2.68-15.444 4.3-3.132 8.86 12.528 10.23 15.828.507 1.232.797 1.164.87-.204.113-2.08.553-4.268 1.32-6.564 1.47-4.392 5.51-5.58 8.98-3.708 2.513 1.352 4.623 3.132 6.33 5.34.144.194.379.245.572.125.194-.12.3-.383.258-.641l-2.67-16.008c-.209-1.219.414-2.423 1.42-2.748 1.167-.384 2.06.14 2.68 1.572a294.431 294.431 0 0010.8 22.224c.68 1.264.957 1.148.83-.348-.26-3.192-.33-14.448 3.71-15.168 2.34-.42 3.96 3.216 4.9 5.616a624.17 624.17 0 003.94 9.804c.867 2.08 1.287 1.956 1.26-.372-.02-2.008.52-4.112 1.62-6.312 2.7-5.412 6.96-4.656 10.93-1.8 1.34.96 2.36 2.676 3.94 3.624a.32.32 0 00.395-.044.495.495 0 00.135-.448c-.87-5.172 1.52-12.096 6.97-8.892 1.9 1.116 3.48 4.272 5.13 6.336.387.488.56.4.52-.264-.113-1.88-.243-3.736-.39-5.568-.57-7.02 3.94-11.412 8.97-6.132 4.28 4.488 8.043 9.936 11.29 16.344.467.928.91.912 1.33-.048.55-1.248.69-2.916 1.28-4.26 1.727-3.904 4.1-8.648 7.12-14.232.787-1.464 1.297-3.296 1.53-5.496a1.713 1.713 0 00-.23-1.092c-3.49-5.604-13.67-22.944-9.75-27.744 1.97-2.424 5.74-.516 7.38 1.476 5.947 7.208 8.153 15.996 6.62 26.364-.06.424.023.8.25 1.128l21.42 30.396c.416.589.403 1.457-.03 2.028l-.24.3c-.277.365-.672.57-1.084.56-.412-.009-.8-.23-1.066-.608l-20.45-28.68a.12.12 0 00-.11-.053.13.13 0 00-.1.077c-3.08 7.428-11.57 19.284-9.64 28.032 1.39 6.264 6.12 8.52 11.42 7.488 1.4-.276 2.16.636 1.96 2.292-.047.4-.2.732-.46.996-.78.776-1.703 1.188-2.77 1.236-6.393.264-10.61-2.784-12.65-9.144-.907-2.848-1.633-4.776-2.18-5.784-2.72-5.04-10.46-18.384-15.18-20.088-.36-.128-.613.016-.76.432-1.38 3.852-.18 10.092.46 14.088.28 1.716.35 4.296-1.11 5.292-.927.624-1.743.296-2.45-.984a85.055 85.055 0 00-7.28-11.04c-.506-.651-1.342-.734-1.93-.192-.18.16-.313.672-.4 1.536-.427 4.32.23 8.372 1.97 12.156.567 1.232.41 2.128-.47 2.688-.749.48-1.674.252-2.2-.54-2.83-4.284-9.21-13.188-14.33-11.184-.313.128-.543.372-.69.732-1.49 3.576-1.42 6.708-1.53 11.436-.047 1.8-.683 2.94-1.91 3.42-1.015.393-2.114-.158-2.59-1.296l-7.62-17.952c-.433-1.024-.813-1.064-1.14-.12-1.27 3.696-.61 12.276-.51 16.332.023.793-.34 1.528-.932 1.886-.592.357-1.305.272-1.828-.218-.833-.792-1.63-1.824-2.39-3.096-3.033-5.072-5.653-10.108-7.86-15.108-.827-1.864-1.047-1.764-.66.3 1.287 6.936 3.28 14.104 5.98 21.504.32.872.457 1.568.41 2.088-.1 1.072-.697 1.604-1.79 1.596-.612 0-1.17-.414-1.44-1.068a56.726 56.726 0 01-1.98-5.832c-.513-1.824-1.233-3.328-2.16-4.512-3.2-4.08-5.31-6.888-9.65-9.804-6.57-4.404-6.16 8.688-6.26 12.768-.047 1.584-.677 2.408-1.89 2.472-1.43.072-2.6-1.476-3.24-2.832-2.127-4.48-4.19-9.6-6.19-15.36-.22-.648-.627-1.2-1.22-1.656-.287-.224-.487-.14-.6.252-1.22 4.392-.57 11.676-.51 16.32.008.617-.193 1.212-.556 1.648-.364.437-.86.678-1.374.668-.9-.024-1.697-.632-2.39-1.824a257.276 257.276 0 01-9.52-18.012c-.26-.544-.33-.508-.21.108z"
          fill={currentColor}
          stroke="none"
          strokeWidth={1}
        />
        <path
          d="M853.25 423.22c-.087-.793-.263-.817-.53-.07-3.433 9.473-6.443 18.66-9.03 27.56a1843.607 1843.607 0 00-18.31 67.77c-1.507 6.04-2.523 10.57-3.05 13.59-.45 2.6-.58 7.94 4.14 6.8 7.52-1.81 14.9-6.27 21.6-10.06.96-.55 1.56-1.27 2.56-1.73 3.44-1.56 7.01-3.85 9.9-5.24 3.2-1.53 21.01-9.99 22.84-5.25a1.44 1.44 0 01-1.22 1.95c-6.073.533-11.847 2.23-17.32 5.09a1494.036 1494.036 0 00-29.88 16.02c-4.27 2.35-13.5 5.31-15.61-1.37-1.63-5.17.83-11.46 2.05-16.48 5.14-21.133 8.593-34.817 10.36-41.05 3.08-10.867 6.15-21.733 9.21-32.6 2.08-7.37 4.77-14.85 7.17-22.3.95-2.95 2.57-5.72 3.75-8.72a2.775 2.775 0 013.46-1.62c.533.18.897.847 1.09 2 .373 2.24.35 4.74-.07 7.5a1.25 1.25 0 01-1.33 1.06c-1.127-.087-1.697-.527-1.71-1.32a29.75 29.75 0 00-.07-1.53z"
          fill={currentColor}
          stroke="none"
          strokeWidth={1}
        />
        <path
          d="M904.46 496.53a205.04 205.04 0 019.52-15.01c.693-.993 1.49-1.5 2.39-1.52a1.9 1.9 0 011.93 1.93c-.06 3.87-.71 9.94.51 13.6.113.327.313.397.6.21.593-.38 1-.84 1.22-1.38 2-4.8 4.063-9.067 6.19-12.8.64-1.13 1.81-2.42 3.24-2.36 1.213.053 1.843.74 1.89 2.06.1 3.4-.31 14.31 6.26 10.64 4.34-2.43 6.45-4.77 9.65-8.17.927-.987 1.647-2.24 2.16-3.76.567-1.68 1.227-3.3 1.98-4.86.27-.545.828-.89 1.44-.89 1.093-.007 1.69.437 1.79 1.33.047.433-.09 1.013-.41 1.74-2.7 6.167-4.693 12.14-5.98 17.92-.387 1.72-.167 1.803.66.25 2.207-4.167 4.827-8.363 7.86-12.59.76-1.06 1.557-1.92 2.39-2.58a1.717 1.717 0 011.828-.181c.592.298.955.91.932 1.571-.1 3.38-.76 10.53.51 13.61.327.787.707.753 1.14-.1l7.62-14.96a2.155 2.155 0 012.59-1.08c1.227.4 1.863 1.35 1.91 2.85.11 3.94.04 6.55 1.53 9.53.147.3.377.503.69.61 5.12 1.67 11.5-5.75 14.33-9.32a1.755 1.755 0 012.2-.45c.88.467 1.037 1.213.47 2.24-1.74 3.153-2.397 6.53-1.97 10.13.087.72.22 1.147.4 1.28a1.44 1.44 0 001.93-.16c2.753-2.96 5.18-6.027 7.28-9.2.707-1.067 1.523-1.34 2.45-.82 1.46.83 1.39 2.98 1.11 4.41-.64 3.33-1.84 8.53-.46 11.74.147.347.4.467.76.36 4.72-1.42 12.46-12.54 15.18-16.74.547-.84 1.273-2.447 2.18-4.82 2.04-5.3 6.257-7.84 12.65-7.62 1.067.04 1.99.383 2.77 1.03.26.22.413.497.46.83.2 1.38-.56 2.14-1.96 1.91-5.3-.86-10.03 1.02-11.42 6.24-1.93 7.29 6.56 17.17 9.64 23.36a.13.13 0 00.21.02l20.45-23.9a1.43 1.43 0 012.15-.04l.24.25c.433.476.446 1.2.03 1.69l-21.42 25.33c-.227.273-.31.587-.25.94 1.533 8.64-.673 15.963-6.62 21.97-1.64 1.66-5.41 3.25-7.38 1.23-3.92-4 6.26-18.45 9.75-23.12.192-.256.275-.583.23-.91-.233-1.833-.743-3.36-1.53-4.58-3.02-4.653-5.393-8.607-7.12-11.86-.59-1.12-.73-2.51-1.28-3.55-.42-.8-.863-.813-1.33-.04-3.247 5.34-7.01 9.88-11.29 13.62-5.03 4.4-9.54.74-8.97-5.11.147-1.527.277-3.073.39-4.64.04-.553-.133-.627-.52-.22-1.65 1.72-3.23 4.35-5.13 5.28-5.45 2.67-7.84-3.1-6.97-7.41a.37.37 0 00-.53-.41c-1.58.79-2.6 2.22-3.94 3.02-3.97 2.38-8.23 3.01-10.93-1.5-1.1-1.833-1.64-3.587-1.62-5.26.027-1.94-.393-2.043-1.26-.31a473.84 473.84 0 00-3.94 8.17c-.94 2-2.56 5.03-4.9 4.68-4.04-.6-3.97-9.98-3.71-12.64.127-1.247-.15-1.343-.83-.29a230.812 230.812 0 00-10.8 18.52c-.62 1.193-1.513 1.63-2.68 1.31a1.965 1.965 0 01-1.42-2.29l2.67-13.34a.498.498 0 00-.258-.534.473.473 0 00-.572.104c-1.707 1.84-3.817 3.323-6.33 4.45-3.47 1.56-7.51.57-8.98-3.09-.767-1.913-1.207-3.737-1.32-5.47-.073-1.14-.363-1.197-.87-.17-1.37 2.75-5.93 15.8-10.23 13.19-3.21-1.96-2.97-9.74-2.68-12.87.053-.56-.08-.607-.4-.14a157.815 157.815 0 00-10.57 17.74c-.52 1.013-1.123 1.783-1.81 2.31a1.7 1.7 0 01-2.73-1.32 31.207 31.207 0 01.33-5.01c.21-1.49 1.04-3.67 1.35-5.59.087-.533-.047-.597-.4-.19-2.64 3.09-10.24 13.36-14.95 10.65-3.3-1.9-2.19-8.32-2.07-11.34.02-.433-.113-.49-.4-.17-2.39 2.63-6.3 8.39-10.49 4.92-3.31-2.75-1.27-13.78 2.04-16.19a.89.89 0 01.93-.11c1.13.45 1.38 1.54.85 2.64-1.73 3.6-2.87 7.2-1.98 10.65.091.353.355.636.699.751.344.116.72.047 1.001-.181 3.59-2.9 5.38-6.57 8.15-9.88a1.75 1.75 0 012.91.35c.493.993.58 2.093.26 3.3-1 3.807-1.21 7.663-.63 11.57a.805.805 0 00.65.67c.94.193 1.843-.143 2.71-1.01 5.787-5.727 10.457-11.657 14.01-17.79 1.67-2.88 1.89-6.17 4-8.9a1.01 1.01 0 01.98-.37c1.52.26 1.71 1.62 1.17 2.91a126.61 126.61 0 00-6.37 19.41c-.12.513-.05.543.21.09zm122.54 31.6c-.42 1.093-.603 2.067-.55 2.92a.81.81 0 001.33.56c4.833-4.113 7.347-9.397 7.54-15.85.027-.807-.223-.907-.75-.3-3.193 3.7-5.717 7.923-7.57 12.67z"
          fill={currentColor}
          stroke="none"
          strokeWidth={1}
        />
      </g>
    </svg>
  );
}

Logo.propTypes = {
  height: PropTypes.number.isRequired,
  logoColor: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  height: 60,
  logoColor: "white",
};

import { TSVG } from "../svg.type";

export const HeartIcon: React.FC<React.SVGProps<TSVG>> = ({
  width = "24px",
  height = "24px",
  color = "gray.100",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      fill={color}
      d="M12 21.5l-1.45-1.32C5.4 16.54 2 14.09 2 10.5 2 7.42 4.42 5 7.5 5c1.34 0 2.61.56 3.5 1.5C11.89 5.56 13.16 5 14.5 5 17.58 5 20 7.42 20 10.5c0 3.59-3.4 6.04-8.55 9.68L12 21.5z"
    />
  </svg>
);

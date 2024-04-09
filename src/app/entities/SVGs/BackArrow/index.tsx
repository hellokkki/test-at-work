import { TSVG } from "../svg.type";

export const BackArrow: React.FC<React.SVGProps<TSVG>> = ({
  width = 22,
  height = 22,
  color = "gray.300",
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
    <line x1="19" y1="12" x2="5" y2="12" fill={color} />
    <polyline points="12 19 5 12 12 5" fill={color} />
  </svg>
);

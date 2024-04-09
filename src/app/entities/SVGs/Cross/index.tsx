import { TSVG } from "../svg.type";

export const CrossIcon: React.FC<React.SVGProps<TSVG>> = ({ width = "24px", height = "24px", color = "gray.100" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
        fill={color}
      />
    </svg>
  );
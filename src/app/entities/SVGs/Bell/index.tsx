import { TSVG } from "../svg.type";

export const BellIcon: React.FC<React.SVGProps<TSVG>> = ({
  width = "24px",
  height = "24px",
  color = "24px",
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
      d="M12 2C8.22 2 5 5.13 5 9v5.2c0 2.07-.47 4.93-1.45 7.09-.29.65.23 1.4.94 1.4h12.92c.71 0 1.23-.75.94-1.4-.98-2.16-1.45-5.02-1.45-7.09V9c0-3.87-3.22-7-7-7z"
    />
    <path fill={color} d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
  </svg>
);

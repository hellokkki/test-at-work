import "./dots.scss";
import { TSVG } from "../svg.type";

export const ThreeDotsIcon: React.FC<React.SVGProps<TSVG>> = ({
  width = 24,
  height = 24,
  color = "black",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dots-icon"
    >
      <circle cx="12" cy="6" r="2" fill={color} />
      <circle cx="12" cy="12" r="2" fill={color} />
      <circle cx="12" cy="18" r="2" fill={color} />
    </svg>
  );
};

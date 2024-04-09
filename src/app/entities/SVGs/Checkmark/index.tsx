import { TSVG } from "../svg.type"

export const Checkmarck: React.FC<React.SVGProps<TSVG>> = ({
    width = 24,
    height = 24,
    color = 'green'
}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    >
     <rect 
     x="1"
     y="1"
     width={width}
     height={height}
     rx={11}
     fill={color}
     />
     <path 
     d="M5 12.5l3 3.5l6 -6"
     stroke="#fff"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     />
    </svg>
  )
}
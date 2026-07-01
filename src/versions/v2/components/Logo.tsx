import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const Logo: React.FC<LogoProps> = ({ fillColor = "#ff3b00", ...props }) => {
  return (
    <svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 736.49 361.8"
      {...props}
    >
      <g id="Camada_1-2" data-name="Camada 1">
        <path
          fill={fillColor}
          d="M347.37,361.8H14.43c-7.97,0-14.43-6.46-14.43-14.43V14.43C0,6.46,6.46,0,14.43,0h329c9.35,0,16.23,8.76,14.02,17.85l-38.77,158.96c-.51,2.08,1.07,4.09,3.21,4.09h25.49c7.97,0,14.43,6.46,14.43,14.43v152.04c0,7.97-6.46,14.43-14.43,14.43Z"
        />
        <path
          fill={fillColor}
          d="M721.84,361.8h-332.5c-8.09,0-14.65-6.56-14.65-14.65V14.65c0-8.09,6.56-14.65,14.65-14.65h332.5c8.09,0,14.65,6.56,14.65,14.65v130.85c0,7.13-5.13,13.23-12.16,14.44l-98.88,17.04c-2.38.41-2.08,3.92.34,3.92h96.06c8.09,0,14.65,6.56,14.65,14.65v151.6c0,8.09-6.56,14.65-14.65,14.65Z"
        />
      </g>
    </svg>
  );
};

export default Logo;

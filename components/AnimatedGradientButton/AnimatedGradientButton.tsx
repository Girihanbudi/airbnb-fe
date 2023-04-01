// import { MouseEvent, useState } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

export const AnimatedGradientButton = ({ sx, ...props }: ButtonProps) => {
  // const [coordinate, setCoordinate] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // const onMouseHover = (event: MouseEvent<HTMLButtonElement>) => {
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const x = event.clientX - rect.left;
  //   const y = event.clientY - rect.top;

  //   setCoordinate({ x, y });
  // };

  return (
    <Button
      variant="contained"
      disableElevation
      color="secondary"
      // onMouseMove={onMouseHover}
      fullWidth
      sx={{
        py: 1.5,
        textTransform: "none",
        borderRadius: "10px",
        // position: "relative",
        // border: "none",
        // color: "white",
        // cursor: "pointer",
        // outline: "none",
        // overflow: "hidden",
        // "&:before": {
        //   left: `${coordinate.x}px`,
        //   top: `${coordinate.y}px`,
        //   position: "absolute",
        //   width: 0,
        //   height: 0,
        //   background:
        //     "radial-gradient(circle closest-side, black, transparent)",
        //   transform: "translate(-50%, -50%)",
        //   transition: "width 0.2s ease, height 0.2s ease",
        // },
        // "&:hover:before": {
        //   color: "blue",
        //   width: "200px",
        //   height: "200px",
        // },
        ...sx,
      }}
      {...props}
    />
  );
};

export default AnimatedGradientButton;

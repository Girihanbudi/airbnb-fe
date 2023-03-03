import { forwardRef } from "react";

import { Slide as MuiSlide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export const Slide = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <MuiSlide direction="up" ref={ref} {...props} />;
});

export default Slide;

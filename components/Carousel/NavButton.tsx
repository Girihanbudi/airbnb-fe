import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

import { ButtonProps } from "@mui/material/Button";
import PlainButton from "@/components/PlainButton";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export interface NavButtonProps extends ButtonProps {
  slideLength: number;
  hovered?: boolean;
}

export const NavButton = ({ sx, ...props }: ButtonProps) => (
  <PlainButton
    color="white"
    variant="contained"
    sx={{ p: 1, borderRadius: 50, ...sx }}
    {...props}
  />
);

export const NavButtonPrev = ({
  slideLength,
  hovered = false,
  sx,
  ...props
}: NavButtonProps) => {
  const swiper = useSwiper();
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  useEffect(() => {
    swiper.on("slideChange", (swipe) => {
      setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
    });
  }, [swiper]);

  return (
    <>
      <NavButton
        disabled={!hovered || slideConfig.isBeginning}
        onClick={() => {
          swiper.slidePrev();
        }}
        sx={{
          opacity: !hovered || slideConfig.isBeginning ? 0 : 1,
          transition: "0.5s",
          ...sx,
        }}
        {...props}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: "15px" }} />
      </NavButton>
    </>
  );
};

export const NavButtonNext = ({
  slideLength,
  hovered = false,
  sx,
  ...props
}: NavButtonProps) => {
  const swiper = useSwiper();
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  useEffect(() => {
    swiper.on("slideChange", (swipe) => {
      setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
    });
  }, [swiper]);

  return (
    <>
      <NavButton
        disabled={!hovered || slideConfig.isEnd}
        onClick={() => {
          swiper.slideNext();
        }}
        sx={{
          opacity: !hovered || slideConfig.isEnd ? 0 : 1,
          transition: "0.5s",
          ...sx,
        }}
        {...props}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
      </NavButton>
    </>
  );
};

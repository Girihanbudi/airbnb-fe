import { CSSProperties, useState, useRef, ReactNode } from "react";
import Image from "next/image";

import Box, { BoxProps } from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { NavButtonPrev, NavButtonNext } from "./NavButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { Button } from "@mui/material";

export interface CarouselProps extends BoxProps {
  images: string[];
  imageProps?: CSSProperties;
  children?: ReactNode;
}

export const Carousel = ({
  images,
  imageProps,
  children,
  ...props
}: CarouselProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView="auto"
        navigation={{
          enabled: true,
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={0}
        style={{
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: "100%",
              height: "300px",
              position: "relative",
              ...imageProps,
            }}
          >
            <Image
              fill
              style={{
                objectFit: "cover",
                position: "absolute",
              }}
              src={image}
              alt="image"
            />
          </SwiperSlide>
        ))}

        <NavButtonPrev
          slideLength={images.length}
          hovered={hovered}
          sx={{ position: "absolute", zIndex: 1, top: "150px", left: 5 }}
        />
        <NavButtonNext
          slideLength={images.length}
          hovered={hovered}
          sx={{ position: "absolute", zIndex: 1, top: "150px", right: 5 }}
        />
      </Swiper>
      {children}
    </Box>
  );
};

export default Carousel;

import { useState, Fragment } from "react";
import Image from "next/image";
import { Stack, Icon } from "@mui/material";
import { UnderlinedText } from "@/components";

export interface CategoryTumbnail {
  src: string;
  title?: string;
  active?: boolean;
}

export const MakeCategoryTumbnail = ({
  src,
  title,
  active = false,
}: CategoryTumbnail) => {
  const [hover, setHover] = useState(false);
  return (
    <Stack
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      alignItems="center"
    >
      <Icon
        sx={{
          width: "30px",
          height: "30px",
          position: "relative",
          opacity: active ? 1.0 : 0.5,
        }}
      >
        <Image
          fill
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          src={src}
          alt="category"
        />
      </Icon>
      {title && (
        <UnderlinedText
          hovered={hover}
          active={active}
          variant="body2"
          sx={{ mt: 0.5 }}
        >
          {title}
        </UnderlinedText>
      )}
    </Stack>
  );
};

export interface CategoryProps {
  categories: CategoryTumbnail[];
}

export const Category = ({ categories }: CategoryProps) => {
  return (
    <Stack direction="row" spacing={4}>
      {categories.map((category, i) => (
        <Fragment key={i}>{MakeCategoryTumbnail(category)}</Fragment>
      ))}
    </Stack>
  );
};

export default Category;

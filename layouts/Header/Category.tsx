import { useState, Fragment, useEffect } from "react";
import Image from "next/image";

import { Box, Stack, Icon, Skeleton } from "@mui/material";
import { UnderlinedText } from "@/components";
import { useAppDispatch, useAppSelector, propertyTypesSelector } from "@/store";
import { fetchPropertyTypesInfoThunk } from "@/store/actions/thunk";

export interface CategoryTumbnailProps {
  src: string;
  title?: string;
  active?: boolean;
}

export const CategoryTumbnailSkeleton = () => {
  return (
    <Stack alignItems="center">
      <Skeleton variant="circular" width="30px" height="30px" />
      <Skeleton variant="text" width="60px" sx={{ mt: 0.5 }} />
    </Stack>
  );
};

export const CategoryTumbnail = ({
  src,
  title,
  active = false,
}: CategoryTumbnailProps) => {
  return (
    <Stack alignItems="center">
      <Icon
        sx={{
          height: "30px",
          position: "relative",
          opacity: active ? 1.0 : 0.5,
          fontSize: "30px",
        }}
      >
        <Image fill src={src} sizes="100vw" alt="category" />
      </Icon>
      {title && (
        <UnderlinedText
          // hovered={hover}
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

export const Category = () => {
  const dispatch = useAppDispatch();

  // Redux
  const propertyTypes = useAppSelector(propertyTypesSelector);
  useEffect(() => {
    dispatch(fetchPropertyTypesInfoThunk({ keys: ["name", "link"] }));
  }, [dispatch]);

  const RenderContent = () => {
    if (propertyTypes.loading) {
      const skeletonCount = 10;
      return (
        <Stack direction="row" spacing={4}>
          {[...Array(skeletonCount)].map((e, i) => (
            <Fragment key={i}>
              <CategoryTumbnailSkeleton />
            </Fragment>
          ))}
        </Stack>
      );
    } else if (propertyTypes.data) {
      return (
        <Stack direction="row" spacing={4}>
          {propertyTypes.data &&
            propertyTypes.data.map((type, i) => (
              <Fragment key={i}>
                {CategoryTumbnail({
                  src: type.link,
                  title: type.name,
                  active: true,
                })}
              </Fragment>
            ))}
        </Stack>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Box>
      <RenderContent />
    </Box>
  );
};

export default Category;

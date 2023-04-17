import { useState } from "react";

import { SlideDialog } from "@/components";

export const WishlistDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <SlideDialog open={open} handleClose={handleClose}></SlideDialog>;
};

export default WishlistDialog;

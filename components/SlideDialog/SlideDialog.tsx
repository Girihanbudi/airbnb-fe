import { ReactNode } from "react";

import {
  IconButton,
  DialogTitle,
  DialogContent,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { Slide } from "@/components/Transition";

import CloseIcon from "@mui/icons-material/Close";

export interface SlideDialogProps extends DialogProps {
  showDivider?: boolean;
  dialogTitle?: ReactNode;
  handleClose?: () => void;
}

export const SlideDialog = ({
  showDivider = false,
  dialogTitle,
  handleClose,
  children,
  ...props
}: SlideDialogProps) => {
  return (
    <Dialog
      TransitionComponent={Slide}
      keepMounted
      fullWidth
      maxWidth="md"
      onClose={handleClose}
      {...props}
    >
      <DialogTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ p: dialogTitle ? 1 : 2 }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", left: 0, ml: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {dialogTitle}
          </Box>
        </Stack>
      </DialogTitle>

      {showDivider && <Divider />}

      <DialogContent>
        <Box>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};

export default SlideDialog;

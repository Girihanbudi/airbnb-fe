import Button, { ButtonProps } from "@mui/material/Button";

export const PlainButton = ({ sx, ...props }: ButtonProps) => {
  return (
    <Button
      variant="text"
      sx={{
        minWidth: 0,
        minHeight: 0,
        p: 0,
        m: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textTransform: "none",
        "&:hover": { background: "none" },
        ...sx,
      }}
      {...props}
    />
  );
};

export default PlainButton;

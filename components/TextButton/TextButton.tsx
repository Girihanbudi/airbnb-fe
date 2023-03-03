import Button, { ButtonProps } from "@mui/material/Button";

export const TextButton = ({ sx, ...props }: ButtonProps) => {
  return (
    <Button variant="text" sx={{ textTransform: "none", ...sx }} {...props} />
  );
};

export default TextButton;

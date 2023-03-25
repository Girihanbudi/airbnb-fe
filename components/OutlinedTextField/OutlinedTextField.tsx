import { useTheme } from "@mui/material/styles";
import { OutlinedInputProps } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const OutlinedTextField = ({
  sx,
  variant = "filled",
  ...props
}: TextFieldProps) => {
  const theme = useTheme();

  return (
    <TextField
      variant={variant}
      InputProps={
        {
          disableUnderline: true,
          sx: {
            border: 1,
            borderRadius: 0,
            color: props.error
              ? theme.palette.error.light
              : theme.palette.primary[100],
            borderColor: props.error
              ? theme.palette.error.light
              : theme.palette.primary[100],
            overflow: "hidden",
            backgroundColor: theme.palette.background.default,
            transition: theme.transitions.create([
              "border-color",
              "background-color",
              "box-shadow",
            ]),
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&.Mui-focused": {
              backgroundColor: "transparent",
              color: props.error
                ? theme.palette.error.light
                : theme.palette.primary[100],
              borderColor: props.error
                ? theme.palette.error.light
                : theme.palette.primary.main,
            },
            ...sx,
          },
        } as Partial<OutlinedInputProps>
      }
      InputLabelProps={{
        sx: {
          color: props.error ? theme.palette.error : theme.palette.primary[100],
          "&.Mui-focused": {
            color: props.error
              ? theme.palette.error.light
              : theme.palette.primary.main,
          },
          ...sx,
        },
      }}
      {...props}
    />
  );
};

export default OutlinedTextField;

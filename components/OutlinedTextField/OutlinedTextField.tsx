import { ChangeEvent } from "react";
import { useTheme } from "@mui/material/styles";
import {
  InputProps,
  OutlinedInputProps,
  FormHelperText,
  Stack,
  InputLabelProps,
} from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

import ErrorIcon from "@mui/icons-material/Error";

export type OutlinedTextFieldProps = TextFieldProps & {
  helperText?: string;
  onValueChange?: (event: ChangeEvent) => void;
  inputProps?: InputProps;
  inputLabelProps?: InputLabelProps;
};

export const OutlinedTextField = ({
  value,
  onValueChange,
  helperText,
  inputProps,
  inputLabelProps,
  variant = "filled",
  ...props
}: OutlinedTextFieldProps) => {
  const theme = useTheme();

  return (
    <>
      <TextField
        fullWidth
        variant={variant}
        value={value}
        onChange={onValueChange}
        InputProps={
          {
            disableUnderline: true,
            ...inputProps,
            sx: {
              border: 1,
              borderRadius: 0,
              color: props.error
                ? theme.palette.error.light
                : theme.palette.primary.main,
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
                  : theme.palette.primary.main,
                borderColor: props.error
                  ? theme.palette.error.light
                  : theme.palette.primary.main,
              },
              ...(inputProps ? inputProps.sx : {}),
            },
          } as Partial<OutlinedInputProps>
        }
        InputLabelProps={{
          ...inputLabelProps,
          sx: {
            color: props.error
              ? theme.palette.error
              : theme.palette.primary[100],
            "&.Mui-focused": {
              color: props.error
                ? theme.palette.error.light
                : theme.palette.primary.main,
            },
            ...(inputLabelProps ? inputLabelProps.sx : {}),
          },
        }}
        {...props}
      />
      {helperText && (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
          <ErrorIcon color="error" fontSize="small" />
          <FormHelperText error>Required</FormHelperText>
        </Stack>
      )}
    </>
  );
};

export default OutlinedTextField;

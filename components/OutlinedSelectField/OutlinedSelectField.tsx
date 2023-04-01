import { useTheme } from "@mui/material/styles";
import { FormHelperText, MenuProps, Stack } from "@mui/material";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";

import ErrorIcon from "@mui/icons-material/Error";
import { ReactNode } from "react";

export type OutlinedSelectFieldProps = FormControlProps & {
  value?: string | number | readonly string[];
  helperText?: string;
  onValueChange?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  label?: string;
  labelProps?: InputLabelProps;
  selectProps?: SelectProps;
  menuProps?: Partial<MenuProps>;
};

export const OutlinedSelectField = ({
  value,
  helperText,
  onValueChange,
  children,
  label,
  variant = "filled",
  labelProps,
  selectProps,
  menuProps,
  ...props
}: OutlinedSelectFieldProps) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth variant={variant} {...props}>
      <InputLabel
        {...labelProps}
        sx={{
          color: props.error ? theme.palette.error : theme.palette.primary[100],
          "&.Mui-focused": {
            color: props.error
              ? theme.palette.error.light
              : theme.palette.primary.main,
          },
          ...(labelProps ? labelProps.sx : {}),
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onValueChange}
        disableUnderline
        {...selectProps}
        sx={{
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
          ...(selectProps ? selectProps.sx : {}),
        }}
        MenuProps={{
          sx: {
            maxHeight: "300px",
            ...(menuProps ? menuProps.sx : {}),
          },
          ...menuProps,
        }}
      >
        {children}
      </Select>
      {helperText && (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
          <ErrorIcon color="error" fontSize="small" />
          <FormHelperText error>{helperText}</FormHelperText>
        </Stack>
      )}
    </FormControl>
  );
};

export default OutlinedSelectField;

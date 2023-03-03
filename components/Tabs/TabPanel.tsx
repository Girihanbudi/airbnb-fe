import Box, { BoxProps } from "@mui/material/Box";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  containerProps?: BoxProps;
}

export const TabPanel = ({
  children,
  value,
  index,
  containerProps,
  ...props
}: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && (
        <Box sx={{ p: 3 }} {...containerProps}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;

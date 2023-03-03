import Tab, { TabProps } from "@mui/material/Tab";

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export interface TabHeaderProps extends TabProps {
  index: number;
}

export const TabHeader = ({ index, label, ...props }: TabHeaderProps) => {
  return (
    <Tab
      label={label}
      sx={{ textTransform: "none" }}
      {...props}
      {...a11yProps(index)}
    />
  );
};

export default TabHeader;

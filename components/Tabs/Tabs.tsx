import React, { useState } from "react";
import { Tabs as MuiTabs } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import TabPanel from "./TabPanel";
import TabHeader from "./TabHeader";

export interface TabsProps extends BoxProps {
  headers: React.ReactNode[];
  contents: React.ReactNode[];
  contentContainerProps?: BoxProps;
}

export const Tabs = ({
  headers,
  contents,
  contentContainerProps,
  ...props
}: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box {...props}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs value={value} onChange={handleChange}>
          {headers.map((header, i) => {
            return <TabHeader key={i} index={i} label={header} />;
          })}
        </MuiTabs>
      </Box>
      {contents.map((content, i) => (
        <TabPanel
          key={i}
          index={i}
          value={value}
          containerProps={contentContainerProps}
        >
          {content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Tabs;

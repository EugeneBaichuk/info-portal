import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StyledTabProps {
  label: string;
  to: string;
}

export const HomeTabs = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("/home");

  const handleChange = (_e, newValue: string) => {
    setSelection(newValue);
    navigate(`${newValue}`);
  }

  const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#5cb85c",
    },
  });

  const AntTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.3)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "rgba(0, 0, 0, 0.8)",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#5cb85c",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#5cb85c",
    },
  }));


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs value={selection} onChange={handleChange}>
            <AntTab value={'/home/user'} label="Your Feed"/>
            <AntTab value={"/home"} label="Global Feed"/>
        </AntTabs>
      </Box>
    </Box>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../../components/article/Article";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import "./home.scss";
import styles from "./home.module.scss";

interface StyledTabProps {
  label: string;
}

export const HomePage = () => {
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
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <article className="homepage-title">
        <h1 className="homepage-title__h">conduit</h1>
        <p className="homepage-title__p">
          A place to share your Angular knowledge.
        </p>
      </article>
      <div className={styles.home_wrapper}>
        <div className={styles.home_content}>
          <div className={styles.home_content_main}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ bgcolor: "#fff" }}>
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="ant example"
                >
                  <AntTab label="Your Feed" />
                  <AntTab label="Global Feed" />
                </AntTabs>
                <Box sx={{ p: 3 }} />
              </Box>
            </Box>
            <Article />
          </div>
          <div className={styles.home_aside_wrapper}>
            <div className={styles.home_aside}>
              <div className={styles.home_aside_title}>Popular Tags</div>
              <div className={styles.home_aside_content}>
                <Link to="#" className={styles.home_content_text}>
                  <p>implementations</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>welcome</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>introduction</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>codebaseShow</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>ipsum</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>qui</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>et</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>quia</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>cupiditate</p>
                </Link>
                <Link to="#" className={styles.home_content_text}>
                  <p>deserunt</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import * as React from "react";
import { Box, Card, CardActions, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import { useTranslate } from "react-admin";

const PageTitle = props => {
  const translate = useTranslate();

  return (
    <Card
      sx={{
        background: theme =>
          theme.palette.mode === "dark"
            ? "#535353"
            : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

        color: "#fff",
        padding: "20px",
        marginTop: 2,
        marginBottom: "1em"
      }}
    >
      <Box display="flex">
        <Box flex="1">
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              {props.title}
            </Typography>
          </Box>
          <CardActions
            sx={{
              padding: { xs: 0, xl: null },
              flexWrap: { xs: "wrap", xl: null },
              "& a": {
                marginTop: { xs: "1em", xl: null },
                marginLeft: { xs: "0!important", xl: null },
                marginRight: { xs: "1em", xl: null }
              }
            }}
          ></CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default PageTitle;

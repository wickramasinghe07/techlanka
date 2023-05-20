import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import Grid from "@mui/material/Grid";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";

import Footer from "./Footer";

import ResponsiveAppBar from "./ResponsiveAppBarStaff";
import Pagination from "@mui/material/Pagination";
import VerticalButtons from "./VerticalButtons";

import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import { useEffect } from "react";
import axios from "axios";

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function StudentAnswerUploadPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [lessonList, setLessonList] = React.useState([]);
  console.log("🚀 ~ file: StaffProfile.js:45 ~ StudentAnswerUploadPage ~ lessonList:", lessonList)

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/api/lesson/all");
      console.log("API ~ Forum lessen ~ getAll ", response);
      setLessonList(response.data.data);
      // return response;
    } catch (error) {
      console.log("ERROR-API ~ Forum Post ~ getAll ", error);
      // return error;
    }
  }

  // getAll = async () => {
  //   try {
  //     const response = await axiosClient().get("/api/patient/all");
  //     console.log("API ~ Forum Post ~ getAll ", response);
  //     return response;
  //   } catch (error) {
  //     console.log("ERROR-API ~ Forum Post ~ getAll ", error);
  //     return error;
  //   }
  // };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ResponsiveAppBar></ResponsiveAppBar>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          I N S T R U C T O R
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdwQzY2OztGBd4NvfFSkep58gN0LS1oF22N4zAtV72E3C5sh3e9HG7yKhR-LREfBUxnY&usqp=CAU"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          D I S S A N A Y A K A M P D
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        ></Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          +94 76 123 3762
        </Grid>

        <Grid
          xs={12}
          sx={{ background: "", display: "flex", justifyContent: "end" }}
        >
          <VerticalButtons></VerticalButtons>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <PictureAsPdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Question Paper.pdf"
                    secondary={secondary ? "Secondary text" : null}
                  />
                  {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                  </Button>
                  <Button variant="contained" endIcon={<SendIcon />}>
                       Send
                  </Button> */}
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Pagination count={10} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Footer></Footer>
      </Grid>
    </Grid>
  );
}

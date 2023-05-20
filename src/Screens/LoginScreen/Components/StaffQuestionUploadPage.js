import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import VerticalButtons from "./VerticalButtons";
import ResponsiveAppBar from "./ResponsiveAppBarStaff";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import Avatar from "@mui/material/Avatar";

import AddReactionIcon from "@mui/icons-material/AddReaction";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import EditIcon from "@mui/icons-material/Edit";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ResponsiveAppBar> </ResponsiveAppBar>
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
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Item>
            {" "}
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Add Lesson
                </ListSubheader>
              }
            >
              <ListItemButton component={Link} to="/AddLesson">
                <ListItemIcon>
                  <UploadFileIcon />
                </ListItemIcon>
                <ListItemText primary="Upload Lesson" />
              </ListItemButton>

              <ListItemButton component={Link} to="/lessonList">
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Show Lessons" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <FolderDeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <DownloadForOfflineIcon />
                </ListItemIcon>
                <ListItemText primary="Download" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText primary="PDF" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Item>
            {" "}
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Add Video Link
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <UploadFileIcon />
                </ListItemIcon>
                <ListItemText primary="Upload Vedio Link" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <FolderDeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <DownloadForOfflineIcon />
                </ListItemIcon>
                <ListItemText primary="Download" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText primary="MP4" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Item>
        </Grid>

        <Footer></Footer>
      </Grid>
    </Box>
  );
}

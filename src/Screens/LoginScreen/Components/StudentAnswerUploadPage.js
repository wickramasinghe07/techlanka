import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import VerticalButtons from "./VerticalButtons";
import ResponsiveAppBarStudent from "./ResponsiveAppBarStudent";

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
          <ResponsiveAppBarStudent> </ResponsiveAppBarStudent>
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
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
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
          P A R A N G A_W I C K R A M A S I N G H E
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          parangapmr@gmail.com
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
                  Add Answer Document
                </ListSubheader>
              }
            >
              <ListItemButton component={Link} to="/AddAnswer">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent Answers" />
              </ListItemButton>

              <ListItemButton component={Link} to="/answerList">
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Show Answers" />
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

        <Footer></Footer>
      </Grid>
    </Box>
  );
}

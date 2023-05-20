import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteLesson } from "../../../Service/LessonAPI";

export default function UserDeleteConfirmation({
  userId,
  setRefetch,
  refetch,
}) {
  const [open, setOpen] = React.useState(false);
  const onClickDelete = async () => {
    const response = await deleteLesson(userId);
    setOpen(false);
    setRefetch(!refetch);
    console.log("onClickDelete ~ response:", response);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="error"
        variant="contained"
        onClick={handleClickOpen}
        sx={{ mt: "20px" }}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this lesson?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will delete this lesson and the action cannot be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => onClickDelete()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

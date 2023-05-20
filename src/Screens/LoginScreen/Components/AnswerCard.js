import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import UserDeleteConfirmation from "./UserDeleteConfirmation";
import { Link } from "react-router-dom";
import AnswerDeleteConfirmation from "./AnswerDeleteConfirmation";

export default function AnswerCard({ answer, setRefetch, refetch }) {
  const Styles = {
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    img: {
      height: 150,
      width: 150,
      borderRadius: "50%",
    },
    text: {
      fontFamily: "Quicksand",
    },
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardContent>
            <Typography style={Styles.text} gutterBottom component="div">
              Lesson ID : {answer.lessonID}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Student Id : {answer.studentId}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Answer : {answer.answer}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Date : {answer.createdAt}
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{ mt: "20px" }}
                component={Link}
                to={`/UpdateAnswer/${answer._id}`}
              >
                Edit
              </Button>
              <AnswerDeleteConfirmation
                userId={answer._id}
                setRefetch={setRefetch}
                refetch={refetch}
              />
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

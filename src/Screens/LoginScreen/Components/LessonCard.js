import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import UserDeleteConfirmation from "./UserDeleteConfirmation";
import { Link } from "react-router-dom";

export default function LessonCard({ lesson, setRefetch, refetch }) {
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
              Lesson Name : {lesson.lessonName}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Instructor Id : {lesson.instructorId}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Lesson : {lesson.lesson}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Video link : {lesson.lessonVideolink}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Date : {lesson.createdAt}
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
                to={`/UpdateLesson/${lesson._id}`}
              >
                Edit
              </Button>
              <UserDeleteConfirmation
                userId={lesson._id}
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

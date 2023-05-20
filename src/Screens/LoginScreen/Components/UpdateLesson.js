import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  createLesson,
  getLesson,
  updateLesson,
} from "../../../Service/LessonAPI";
import ResponsiveAppBar from "./ResponsiveAppBarStaff";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateLesson = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [payload, setPayload] = useState({
    lessonName: "",
    instructorId: "",
    lesson: "",
    lessonVideolink: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await getLesson(lessonId);
      console.log("getLesson ~ response.data:", response.data);
      setPayload(response.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateLesson(lessonId, payload);
    if (response.status === 200) {
      toast.success("Lesson updated successfully");
      navigate("/StaffQuestionUploadPage");
    }
    if (response.status === 400) {
      toast.error("Oops! Something went wrong");
    }
    console.log("AddLesson~ response:", response);
  };
  const onChangeInput = (e, field) => {
    setPayload({ ...payload, [field]: e.target.value });
    console.log(
      "🚀 ~ file: UpdateLesson.js:42 ~ onChangeInput ~ payload:",
      payload
    );
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container>
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
          <Grid container alignContent={"center"} justifyContent={"center"}>
            <Grid item xs={6}>
              <Box>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    required
                    label="Lesson Name"
                    value={payload.lessonName}
                    onChange={(e) => onChangeInput(e, "lessonName")}
                    variant="standard"
                    sx={{ width: "400px", mt: "10px" }}
                  />
                  <TextField
                    required
                    label="Instructor ID"
                    value={payload.instructorId}
                    onChange={(e) => onChangeInput(e, "instructorId")}
                    variant="standard"
                    sx={{ width: "400px", mt: "10px" }}
                  />
                  <TextField
                    required
                    label="Lesson"
                    value={payload.lesson}
                    onChange={(e) => onChangeInput(e, "lesson")}
                    variant="standard"
                    sx={{ width: "400px", mt: "10px" }}
                  />
                  <TextField
                    required
                    label="Video Link"
                    value={payload.lessonVideolink}
                    onChange={(e) => onChangeInput(e, "lessonVideolink")}
                    variant="standard"
                    sx={{ width: "400px", mt: "10px" }}
                  />
                  <Grid sx={{ m: "10px" }}>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UpdateLesson;

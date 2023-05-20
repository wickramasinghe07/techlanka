import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAnswer, updateAnswer } from "../../../Service/AnswerAPI";
import ResponsiveAppBar from "./ResponsiveAppBarStaff";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateAnswer = () => {
  const navigate = useNavigate();
  const { answerId } = useParams();
  console.log(
    "🚀 ~ file: UpdateAnswer.js:11 ~ UpdateAnswer ~ answerId:",
    answerId
  );
  const [payload, setPayload] = useState({
    lessonID: "",
    studentId: "",
    answer: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnswer(answerId);
      console.log("getAnswer ~ response.data:", response.data);
      setPayload(response.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateAnswer(answerId, payload);
    if (response.status === 200) {
      toast.success("Answer updated successfully");
      navigate("/StudentAnswerUploadPage");
    }
    if (response.status === 400) {
      toast.error("Oops! Something went wrong");
    }
    console.log("updateAnswer~ response:", response);
  };
  const onChangeInput = (e, field) => {
    setPayload({ ...payload, [field]: e.target.value });
    console.log(
      "🚀 ~ file: UpdateAnswer.js:42 ~ onChangeInput ~ payload:",
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
                    label="Lesson ID"
                    value={payload.lessonID}
                    onChange={(e) => onChangeInput(e, "lessonID")}
                    variant="standard"
                    sx={{ width: "400px", mt: "10px" }}
                  />
                  <TextField
                    required
                    label="Student ID"
                    value={payload.studentId}
                    onChange={(e) => onChangeInput(e, "studentId")}
                    variant="standard"
                    sx={{ width: "400px", mt: "10px" }}
                  />
                  <TextField
                    required
                    label="Answer"
                    value={payload.answer}
                    onChange={(e) => onChangeInput(e, "answer")}
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

export default UpdateAnswer;

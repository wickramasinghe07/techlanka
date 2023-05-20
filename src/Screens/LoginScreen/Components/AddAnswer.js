import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { createAnswer } from "../../../Service/AnswerAPI";
import ResponsiveAppBar from "./ResponsiveAppBarStaff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAnswer = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    lessonID: "",
    studentId: "",
    answer: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createAnswer(payload);
    if (response.status === 200) {
      toast.success("Answer added successfully");
      navigate("/StudentAnswerUploadPage");
    }
    if (response.status === 400) {
      toast.error("Oops! Something went wrong");
    }
    console.log("AddAnswer~ response:", response);
  };
  const onChangeInput = (e, field) => {
    setPayload({ ...payload, [field]: e.target.value });
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

export default AddAnswer;

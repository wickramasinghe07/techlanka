import React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import { getAllAnswers } from "../../../Service/AnswerAPI";
import AnswerCard from "./AnswerCard";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBarStaff";

export default function AnswerList() {
  const array = [
    {
      _id: "6467c3a966b92c908114e461",
      lessonName: "1",
      instructorId: "1",
      lesson: "1",
      lessonVideolink: "1",
      createdAt: "2023-05-19T18:44:57.050Z",
      updatedAt: "2023-05-19T18:44:57.050Z",
      __v: 0,
    },
  ];
  const [lessonData, setAnswerData] = useState(array);
  const [refetch, setRefetch] = useState(false);
  const fetchAnswers = async () => {
    const response = await getAllAnswers();
    console.log("fetchAnswers ~ response:", response);
    setAnswerData(response.data);
  };
  useEffect(() => {
    fetchAnswers();
  }, [refetch]);
  useEffect(() => {
    fetchAnswers();
  }, []);

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
          <Grid sx container spacing={2} direction={"row"}>
            <Grid
              sx={{ mt: "40px", display: "flex", flexDirection: "row" }}
              item
              xs={9.5}
            >
              <Grid container spacing={2}>
                {lessonData?.map((answer) => (
                  <AnswerCard
                    answer={answer}
                    setRefetch={setRefetch}
                    refetch={refetch}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

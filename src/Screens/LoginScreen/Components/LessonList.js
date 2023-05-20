import React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import { getAllLessons } from "../../../Service/LessonAPI";
import LessonCard from "./LessonCard";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBarStaff";

export default function LessonList() {
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
  const [lessonData, setLessonData] = useState(array);
  const [refetch, setRefetch] = useState(false);
  const fetchLessons = async () => {
    const response = await getAllLessons();
    console.log("fetchLessons ~ response:", response);
    setLessonData(response.data);
  };
  useEffect(() => {
    fetchLessons();
  }, [refetch]);
  useEffect(() => {
    fetchLessons();
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
                {lessonData?.map((lesson) => (
                  <LessonCard
                    lesson={lesson}
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

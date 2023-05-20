import axios from "axios";
const baseUrl = "http://localhost:5000/api/";

export const createLesson = async (LessonData) => {
  try {
    const response = await axios.post(`${baseUrl}lesson/create`, LessonData);
    console.log("lesson registered:", response.data);
    return response;
  } catch (error) {
    console.error("Error registering:", error.response);
    return error.response;
  }
};
export const getLesson = async (lessonId) => {
  try {
    const response = await axios.get(`${baseUrl}lesson/${lessonId}`);
    console.log("Lesson:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting lesson:", error);
    return error.response;
  }
};
export const getAllLessons = async (lessonId) => {
  try {
    const response = await axios.get(`${baseUrl}lesson/all`);
    console.log("Lesson:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting lesson:", error);
    return error.response;
  }
};

export const updateLesson = async (lessonId, updatedData) => {
  try {
    const response = await axios.put(
      `${baseUrl}lesson/update/${lessonId}`,
      updatedData
    );
    console.log("Lesson updated:", response.data);
    return response;
  } catch (error) {
    console.error("Error updating lesson:", error);
    return error.response;
  }
};

export const deleteLesson = async (lessonId) => {
  try {
    const response = await axios.delete(`${baseUrl}lesson/delete/${lessonId}`);
    console.log("Lesson deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting lesson:", error);
    return error.response;
  }
};

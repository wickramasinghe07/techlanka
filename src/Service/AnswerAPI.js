import axios from "axios";
const baseUrl = "http://localhost:5000/api/";

export const createAnswer = async (AnswerData) => {
  try {
    const response = await axios.post(`${baseUrl}answer/create`, AnswerData);
    console.log("answer created:", response.data);
    return response;
  } catch (error) {
    console.error("Error creating answer:", error.response);
    return error.response;
  }
};
export const getAnswer = async (answerId) => {
  try {
    const response = await axios.get(`${baseUrl}answer/${answerId}`);
    console.log("Answer:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting answer:", error);
    return error.response;
  }
};
export const getAllAnswers = async (answerId) => {
  try {
    const response = await axios.get(`${baseUrl}answer/all`);
    console.log("Answer:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting answer:", error);
    return error.response;
  }
};

export const updateAnswer = async (answerId, updatedData) => {
  try {
    const response = await axios.put(
      `${baseUrl}answer/update/${answerId}`,
      updatedData
    );
    console.log("Answer updated:", response.data);
    return response;
  } catch (error) {
    console.error("Error updating answer:", error);
    return error.response;
  }
};

export const deleteAnswer = async (answerId) => {
  try {
    const response = await axios.delete(`${baseUrl}answer/delete/${answerId}`);
    console.log("Answer deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting answer:", error);
    return error.response;
  }
};

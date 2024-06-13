import axios from "axios";

const baseURL = import.meta.env.VITE_backendURL;
import { toast } from "react-toastify";

const uploadFile = async (formData) => {
  try {
    const res = await axios.post(`${baseURL}/uploadfile/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res;
  } catch (err) {
    console.error("Error uploading file:", err);
    toast.error("Upload failed");
    return err;
  }
};

const askQuestion = async (query, fileName) => {
  try {
    console.log("QUESTION : ", query);
    const res = await axios.post(
      `${baseURL}/ask/`,
      {
        filename: fileName,
        question: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    console.error("Error asking question:", err);
    toast.error("Internal Server error");
  }
};

export { uploadFile, askQuestion };

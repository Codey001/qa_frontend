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
    toast.error("Upload failed");
    return err;
  }
};

const askQuestion = async (query, fileName) => {
  try {
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
    return res;
  } catch (err) {
    toast.error("Internal Server error");
  }
};

const pingServer = async () => {
  try {
    const res = await axios.get(`${baseURL}`)
    return res;
  } catch (error) {
    toast.error("Error connecting server");
    console.log(error);
  }
}

export { uploadFile, askQuestion, pingServer };

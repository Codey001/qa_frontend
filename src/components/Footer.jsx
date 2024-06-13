import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateChat } from "../store/dataSlice";
import { askQuestion } from "../utils/handleAPI";
import icon from "../assets/icons.png"

const Footer = () => {
  const [query, setQuery] = useState("");

  const fileAvailable = useSelector((state) => state.fileStatus);
  const fileName = useSelector((state) => state.fileName);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (!fileAvailable) {
      console.log("File not available");
      toast.error("Upload file");
    } else {
      console.log("QUESTION : ", query);
      if (query) {
        const res = await askQuestion(query, fileName);
        const answer = res.data.answer;
        dispatch(updateChat({ query, answer }));
      } else {
        toast.error("Enter the question");
      }
      setQuery("");
    }
  };

  return (
    <div className="px-2 sm:px-20 lg:px-4">
      <div className="flex items-center w-full max-w-screen-lg mx-auto my-4 bg-slate-300 rounded-xl">
        <textarea
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="flex-grow p-3 rounded-l-lg focus:outline-none resize-none overflow-hidden bg-slate-300 text-black"
          rows={1}
        />
        <button
          onClick={handleSearch}
          className="text-white p-2 h-full rounded-r-lg focus:outline-none"
        >
        <img src={icon} alt="" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import HTMLparser from "./HTMLparser";
import Spinner from "./Spinner";

const Body = () => {
  const flag = useSelector((state) => state.fileStatus);
  const chats = useSelector((state) => state.messages);
  const endOfMessagesRef = useRef(null);
  const loading = useSelector((state) => state.loading);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the bottom whenever chats change
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <div className="m-4 px-24">
      {chats.length === 0 && !loading ? (
        flag ? (
          <h1>Enter your question</h1>
        ) : (
          <h1>Please upload the file</h1>
        )
      ) : ( loading ? <Spinner /> : 
        chats.map((chat, index) => (
          <ul key={index} className="">
              <div className="flex justify-end m-3">
                <div className="bg-green-100 p-4 rounded-lg">
                  <h2>{chat.query}</h2>
                </div>
              </div>
              <div className="flex justify-start max-w-3xl m-3">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <HTMLparser htmlString={chat.answer} />
                </div>
              </div>
          </ul>
        ))
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default Body;

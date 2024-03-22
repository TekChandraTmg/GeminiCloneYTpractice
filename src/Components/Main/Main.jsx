import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    Input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Devin</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Generate a brand new business name</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>How to Write a message to my friend</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Generate a business ideas</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Recorrect this Code to Work my code properly</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={Input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini is a lightweight, text-based internet protocol designed for
            accessing and sharing documents over the internet in a simple and
            efficient manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

import "./App.css";
import { useState } from "react";
import Iphone14 from "./assets/iphone14pro-removebg-preview.png";

function App() {
  const images = ["1", "2", "3"];
  const images1 = ["4", "5", "6"];
  const [primaryImage, setPrimaryImage] = useState("1");

  const changeColor = () => {
    const currentIndex = images.indexOf(primaryImage);
    const currentIndex1 = images1.indexOf(primaryImage);

    let nextIndex;
    if (currentIndex !== -1) {
      nextIndex = (currentIndex + 1) % images.length;
    } else if (currentIndex1 !== -1) {
      nextIndex = (currentIndex1 + 1) % images1.length;
    } else {
      nextIndex = 0;
    }

    let nextColor;
    if (currentIndex !== -1) {
      nextColor = images[nextIndex];
    } else if (currentIndex1 !== -1) {
      nextColor = images1[nextIndex];
    } else {
      nextColor = "1";
    }

    setPrimaryImage(nextColor);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className={`${
          primaryImage === "1" || primaryImage === "4" ? "light" : "green"
        } ${primaryImage === "3" || primaryImage === "5" ? "blue" : ""}`}
      >
        <div style={{ width: "30vw" }}>
          <h1
            style={{
              color: "white",
              fontFamily: "Arial",
              fontSize: "48px",
              padding: "0 0 40px",
            }}
          >
            Iphone
          </h1>
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              changeColor();
            }}
          >
            Move carousel + 1
          </button>
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              changeColor();
            }}
          >
            Move carousel - 1
          </button>
        </div>
        <div style={{ position: "relative", width: "30%" }}>
          <img
            src={Iphone14}
            className={`iphones 
            ${primaryImage === "1" ? "topToCenter primary-img" : ""} 
            ${primaryImage === "2" ? "bottom centerToBottom blur" : ""} 
            ${primaryImage === "3" ? "top bottomToTop blur" : ""} 
            ${primaryImage === "4" ? "revTopToCenter primary-img" : ""} 
            ${primaryImage === "5" ? "bottom revCenterToBottom blur" : ""} 
            ${primaryImage === "6" ? "top revBottomToTop blur" : ""} 
            `}
            alt="vwvwev"
          />
          <img
            src={Iphone14}
            className={`iphones
            ${primaryImage === "2" ? "primary-img topToCenter" : ""} 
            ${primaryImage === "3" ? "bottom centerToBottom blur" : ""} 
            ${primaryImage === "1" ? "top bottomToTop blur" : ""}
            ${primaryImage === "5" ? "revTopToCenter primary-img" : ""} 
            ${primaryImage === "6" ? "bottom revCenterToBottom blur" : ""} 
            ${primaryImage === "4" ? "top revBottomToTop blur" : ""} 
            `}
            alt="vwvwev"
          />
          <img
            src={Iphone14}
            className={`iphones
            ${primaryImage === "3" ? "primary-img topToCenter" : ""} 
            ${primaryImage === "1" ? "bottom centerToBottom blur" : ""} 
            ${primaryImage === "2" ? "top bottomToTop blur" : ""}
            ${primaryImage === "6" ? "revTopToCenter primary-img" : ""} 
            ${primaryImage === "4" ? "bottom revCenterToBottom blur" : ""} 
            ${primaryImage === "5" ? "top revBottomToTop blur" : ""} 
            `}
            alt="vwvwev"
          />
        </div>
      </div>
    </>
  );
}

export default App;

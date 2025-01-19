import React from "react";
import MyBook from "./components/MyBook";
import BgTexture from "./assets/brown-wooden-flooring.jpeg";
import LinkAI from "./components/LinkAi";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};
const App = () => {
  return (
    <div
      style={BgTextureStyle}
      className="w-full h-full flex justify-center items-center"
    >
      <MyBook />
      <LinkAI/>
    </div>
  );
};

export default App;

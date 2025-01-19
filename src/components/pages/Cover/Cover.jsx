import React from "react";

const Cover = ({ coverImg}) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex justify-center items-center page-shadow">
        <h1 className="text-primary text-5xl font-bold font-outline-2">
          {/* {window.location.href = "http://127.0.0.1:5500/templates/index.html"} */}
        </h1>
      </div>
    </div>
  );
};

export default Cover;

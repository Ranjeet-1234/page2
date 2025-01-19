import React, { forwardRef } from "react";

const LinkAI = forwardRef((props, ref) => {
  return (
    <div style={{
        marginTop:"850px",
       
    }}>

<a
        href="https://ranjeet-1234.github.io/chat/templates/index.html"
        className="font"
        style={{
          display: "inline-block",
          marginTop: "20px",
          fontSize: "40px",
          backgroundColor:"white",
          textDecoration: "none",
          color: "black",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:"20px"
        }}
      >
        Talk with AI chat bot
      </a>
    </div>
   
  );
});

export default LinkAI;

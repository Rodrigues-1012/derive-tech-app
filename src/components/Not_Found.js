import React from "react";

const Not_Found = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        style={{
          borderRight: "2px solid",
          fontSize: "26px",
          padding: "0 15px 0 15px",
          textAlign: "center",
          fontFamily : "Nunito, sans-serif"
        }}
      >
        404
      </div>
      <div
        style={{
          fontSize: "18px",
          textAlign: "center",
          padding : "10px",
          fontFamily : "Nunito, sans-serif"
        }}
      >
        Not Found
      </div>
    </div>
  );
};

export default Not_Found;

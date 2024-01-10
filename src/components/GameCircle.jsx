import React, { useState } from "react";

const OnClick = (e, id, cb) => {
    cb(id)

};
const GameCircle = ({ id, children ,isClicked,className}) => {

  return (
    <div
      onClick={(e) => {
        OnClick(e,id,isClicked);
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default GameCircle;

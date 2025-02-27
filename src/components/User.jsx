import React from "react";

const User = (props) => {
  return <div className="bg-black text-white">{props.element.fullName}</div>;
};

export default User;

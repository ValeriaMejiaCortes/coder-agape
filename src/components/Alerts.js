import React from "react";

const Alerts = (props) => {
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
      role="alert"
    >
      {props.title && <p className="font-bold">{props.title}</p>}
      {props.description && <p className="text-sm"> {props.description}</p>}
    </div>
  );
};

export default Alerts;

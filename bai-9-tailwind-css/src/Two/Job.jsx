import React from "react";

const Job = ({ title, icon, bgColor }) => {
  return (
    <>
      {
        <div
          className={`${bgColor} flex aspect-square flex-col items-center justify-center rounded-lg p-4`}
        >
          {icon}
          <p className="pt-2">{title}</p>
        </div>
      }
    </>
  );
};

export default Job;

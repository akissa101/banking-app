import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  user,
  subtext,
}: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl lg:text-30 font-semibold  ">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient pl-3">{user}</span>
        )}
      </h1>
      <p className="text-xs lg:text-base font-normal text-slate-400">
        {subtext}
      </p>
    </div>
  );
};

export default HeaderBox;

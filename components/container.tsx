import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <div
      className={`my-8 max-w-7xl  mx-auto  lg:mb-0 w-full px-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;

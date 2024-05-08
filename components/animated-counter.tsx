"use client";

import Counter from "react-countup";
type Props = {};

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <Counter prefix="$" decimal="," decimals={2} end={amount} />
    </div>
  );
};

export default AnimatedCounter;

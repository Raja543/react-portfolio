import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/programming-illustration.json";

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={520} width={520} />
    </div>
  );
};

export default Animation;

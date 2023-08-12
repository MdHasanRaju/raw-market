import React from "react";
import { useLottie } from "lottie-react";
import notFoundAnimation from "../../assets/animation/animation_ll7svsx6.json";

const PageNotFound = () => {
  const options = {
    animationData: notFoundAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default PageNotFound;
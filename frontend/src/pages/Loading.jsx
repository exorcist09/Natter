import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#fff"
        secondaryColor="#fff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;

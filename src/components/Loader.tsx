import React from "react";
import { ColorRing } from "react-loader-spinner";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center ">
      <div className=" -translate-y-[50%] ">
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </div>
  );
};

export default Loader;

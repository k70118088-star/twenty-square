import React from "react";
import Button from "./common/Button";
import Icons from "./common/Icons";

const Hero = () => {
  return (
    <div className="absolute inset-0 flex items-start mt-39.25 justify-center px-4">
      <div className="flex flex-col items-center ">
        
        <h1 className="font-semibold max-w-[728px] text-center text-4xl sm:text-5xl lg:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
          A wonderful way to Transform your walls.
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[680px] text-center font-medium text-base sm:text-lg lg:text-xl leading-[140%] text-black">
          No matter your decorating style, we've got the tricks that can give life to your
          walls and bring out your true personality.
        </p>

        <Button
          className="mt-5 sm:mt-6 flex items-center py-3 px-6 font-semibold text-base sm:text-lg lg:text-xl text-white rounded-[82px] bg-[#ED1C25] shadow-[0px_12px_43.8px_-10px_#ED1C25]"
          text="Square Your Photos"
        />
        <p className="mt-[89px] font-normal text-[12px] leading-[100%] text-[#1E1E1E]"><Icons icon={"arrow"}/></p>
        <div className="flex w-full mt-[349px] items-center justify-cente">
            <div>
                <h2 className="max-w-[540px] font-semibold text-4xl sm:text-5xl lg:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">It's so simple, even a child can do it.</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

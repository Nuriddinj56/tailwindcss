import React from "react";
import { quotes } from "../assets";

function Feedbackcard({ content, name, title }) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 cursor-pointer feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className=" w-[42px] h-[27px] object-contain"
      />
      <p className="font-montserrat font-normal text-[18px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] flex justify-center items-center text-[20px] font-semibold bg-slate-50 rounded-full ">
          {name
            .split(' ')
            .map(c => c[0])
            .join('.')}
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font =-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedbackcard;

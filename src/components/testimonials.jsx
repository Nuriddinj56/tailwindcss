import React from "react";
import { styles } from "../util/style";
import { feedbacks } from "../util/constants";
import Feedbackcard from "./feedback-card";

function Testimonials() {
  return (
    <div className={`${styles.marginY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex justify-between items-center sm:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2}`}>Your opinion about us</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[550px] `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            aspernatur! Reiciendis, quod. Nam, ut soluta.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {feedbacks.map((feedback)=>(
        <Feedbackcard key={feedback.id} {... feedback}/>
        ))}
      </div>
    </div>
    
  );
}

export default Testimonials;

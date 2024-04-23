import { discount } from "../assets";
import { styles } from "../util/style";
import {tel} from '../assets';
import Button from "./button";

function Home() {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col ${styles.paddingY}`}
    >
         {/* Animation image */}
         <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
            <img src={tel} alt="tel"  className="w-[100%] h-[100%] relative z-10" />
        </div>
      {/* Information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/*Discount information  */}
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-{32px]" />
          <p className="text-white ml-2">
            <span className="text-green-400">20% </span>Discount for{" "}
            <span className="text-green-400">1 month</span> account
          </p>
        </div>
        {/* Title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            New Deneration <br />
            <span className="text-gradient">Payment Method</span>
          </h1>
        </div>
        {/* Description */}
        <p className={`${styles.paragraph}mt-5 max-w-[500px]`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          quisquam laudantium qui, repellendus maxime doloribus deleniti
          assumenda recusandae eaque voluptas?
        </p>
        {/* Getting Started */}
                <Button styles={'mt-3'}/>
        </div>
       
    </section>
  );
}

export default Home;

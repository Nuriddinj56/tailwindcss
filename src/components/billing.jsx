import { layout, styles } from "../util/style"
import {apple, bill, google} from '../assets'

function Billing() {
  return (
    <section id="" className={layout.sectionImageReverse}>
      <div className={layout.sectionImageReverse}>
        <img src={bill} alt="bill" className=" w-[100%] h-[100%]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Easily manage your account book
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5  `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit similique aspernatur ratione ex aut.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-10">
          <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={apple} alt="apple" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing
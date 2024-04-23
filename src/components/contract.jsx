import { layout, styles } from "../util/style";
import {card} from '../assets'
import Button from "./button";

const Contract = ()=> {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find the best Karta deal <br className="sm:block hidden" /> in a few
          easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eius
          dolor harum assumenda? Culpa, inventore.
        </p>
        <Button styles={'mt-10'}/>
      </div>
      <div className={layout.sectionImage}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>
      
    </section>
  );
}

export default Contract;

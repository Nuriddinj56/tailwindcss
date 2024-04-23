import { styles } from "../util/style";
import Button from "./button";

function Cta() {
  return (
    <div
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} sm:flex-row flex-col  rounded-[20px] box-shadow bg-dark-gradient`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Try the services</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          ducimus est dolorem laudantium nobis veniam exercitationem asperiores
          quod aliquid debitis!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button/>
      </div>
    </div>
  );
}

export default Cta;

import { features } from "../util/constants"
import { layout, styles } from "../util/style"
import Button from "./button"
import FeatureCard from "./feature-card"


function Business() {
  return (
   <section id="features" className={layout.section}>
<div className={layout.sectionInfo}> 
<h2 className={`${styles.heading2}`}>
Develop a business, we will handle the money
</h2>
<p className={styles.paragraph}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fuga saepe. Tempora praesentium a laboriosam eos hic eaque nam veniam, ex magni impedit, dicta delectus.
</p>
<Button styles={'mt-8'}/>
</div> 
<div className={layout.sectionImage}> 
{features.map((feature, idx)=>(
<FeatureCard key={feature.id} {... feature} idx={idx}/>
))}
</div>
   </section>
  )
}

export default Business
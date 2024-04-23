import { styles } from "./util/style";
import { Navbar,Home, Statistics } from "./components";
import Contract from "./components/contract";
import Billing from "./components/billing";
import Business from "./components/business";
import Cta from "./components/cta";
import Testimonials from "./components/testimonials";
import Clients from "./components/clients";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
        <div className={`${styles.container}`}>
          <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <Navbar />
            <Home/>
          </div>
      </div>
   
    {/*  */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.container}`}>
        
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <Statistics/>
            <Contract/>
            <Billing/>
            <Business/>
            <Testimonials/>
            <Clients/>
            <Cta/>
            <Footer/>
            </div>
      </div>
    </div>
    </div>
  );
}
export default App;

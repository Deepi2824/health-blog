import { Diet } from "./Components/Diet";
import { Email } from "./Components/Email";
import { FitContent } from "./Components/FitContent";

import LogoSection from "./Components/LogoSection";
import Product from "./Components/Product";

function App() {
  return (
    <div className="">
      <LogoSection />
      <Product />
      <Email />
      <FitContent />
      <Diet/>
    </div>
  );
}

export default App;

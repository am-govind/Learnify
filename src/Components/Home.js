import Grids from "./Grids";
import Habove from "./Habove";
import Hl1 from "./Hl1";
import Hlow from "./Hlow";
import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  return (
    <div className="relative w-full h-[95vh] overflow-y-scroll bg-[#1e1e1e] rounded-lg">
      <Nav />
      <Habove />
      <Hlow />
      <Hl1 />
      <Grids />
      <Footer />
    </div>
  );
}
export default Home;

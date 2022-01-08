import CrafeloNav from "./CrafeloNav/CrafeloNav";
import "./Crafelo.scss";
import CrafeloBody from "./CrafeloBody/CrafeloBody";
import CrafeloFooter from "./CrafeloFooter/CrafeloFooter";

const Crafelo = () => {
  return (
    <div className="crafelo">
      <CrafeloNav />
      <CrafeloBody />
      <CrafeloFooter />
    </div>
  );
};

export default Crafelo;

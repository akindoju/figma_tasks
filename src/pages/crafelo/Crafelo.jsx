import CrafeloNav from "./CrafeloNav/CrafeloNav";
import "./Crafelo.scss";
import CrafeloBody from "./CrafeloBody/CrafeloBody";

const Crafelo = () => {
  return (
    <div className="crafelo">
      <CrafeloNav />
      <CrafeloBody />
    </div>
  );
};

export default Crafelo;

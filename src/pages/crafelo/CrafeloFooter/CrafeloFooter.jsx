import "./CrafeloFooter.scss";
import wikia from "../images/wikia.png";
import marriott from "../images/marriott.png";
import yahoo from "../images/yahoo.png";
import cisco from "../images/cisco.png";
import sprint from "../images/sprint.png";

const CrafeloFooter = () => {
  return (
    <div className="crafeloFooter">
      <h1 className="crafeloFooter__head">Powered By</h1>

      <div className="crafeloFooter__logos">
        <img src={wikia} alt="" />
        <img src={marriott} alt="" />
        <img src={yahoo} alt="" />
        <img src={cisco} alt="" />
        <img src={sprint} alt="" />
      </div>
    </div>
  );
};

export default CrafeloFooter;

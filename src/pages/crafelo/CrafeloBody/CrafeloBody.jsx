import "./CrafeloBody.scss";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

const CrafeloBody = () => {
  return (
    <div className="crafeloBody">
      <div className="crafeloBody__left">
        <h1>
          Become a product <span>designer</span>
          <br /> in 6 weeks
        </h1>

        <h4>
          Learn the skills it takes to launch your career as a UX/UI designer
          through a practical physical classes in just 6 weeks, taught by
          experienced UX/UI and Product designers
        </h4>

        <div className="crafeloBody__left--sub">
          <p>Join our waitlist to become the first to access our course</p>
          <div className="crafeloBody__left--sub-form">
            <input type="text" placeholder="Enter your Email Address" />
            <button>Join waitlist</button>
          </div>
        </div>
      </div>

      <div className="crafeloBody__right">
        <div className="crafeloBody__right--1 crafeloBody__right--div">
          <img src={img1} alt="img1" />
        </div>
        <div className="crafeloBody__right--2 crafeloBody__right--div">
          <img src={img2} alt="img2" />
        </div>
        <div className="crafeloBody__right--3 crafeloBody__right--div">
          <img src={img3} alt="img3" />
        </div>
        <div className="crafeloBody__right--4 crafeloBody__right--div">
          <img src={img4} alt="img4" />
        </div>
        <div className="crafeloBody__right--5 crafeloBody__right--div">
          <img src={img5} alt="img5" />
        </div>
        <div className="crafeloBody__right--6">
          <img src={img6} alt="img6" />
        </div>
      </div>
    </div>
  );
};

export default CrafeloBody;

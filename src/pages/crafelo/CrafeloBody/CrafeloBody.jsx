import "./CrafeloBody.scss";

const CrafeloBody = () => {
  return (
    <div className="crafeloBody">
      <div className="crafeloBody__left">
        <h1>
          Become a product <span>designer</span> in 6 weeks
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
        <div>Sola</div>
      </div>
    </div>
  );
};

export default CrafeloBody;

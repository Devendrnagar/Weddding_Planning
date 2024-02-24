import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="" />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          {/* <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a> */}

          <div className="container id id1">
            <input type="text" placeholder="Select Vendor Category" className="di" />
            <input type="text" placeholder="Select City" className="di" />
            <button className="b1">Find Vendors</button>
          </div>


        </div>
      </div>
    </>
  );
}

export default Hero;

import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Happy</h1>
          <p>Choose your favourite destination</p>
        </div>
         
         <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
           
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
         </div>

      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>

        </div>

        <div>
         <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div>
        <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">License</a>
        </div>

        <div>
        <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
          
        </div>
       
      </div>
      <div className="container">
			<h5>&copy; 2023 Happy.com | Created by Devendra Dhakad</h5>
		</div>
    </div>
  );
};

export default Footer;

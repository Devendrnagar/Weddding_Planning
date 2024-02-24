import "./AboutUsStyles.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import { Link } from "react-router-dom";
// import img4 from '../assets/4.jpg'

function AboutUs() {
  return (
    <div className="about-container">
      <h1>Why Happly?</h1>
      <p>
        We believe that wedding planning should be as joyful and easy as saying
        "I Do." So, picture this: an online wedding wonderland where couples can
        plan their dream wedding effortlessly, armed with a suite of intuitive
        tools designed to turn visions into reality and a place where vendors
        and venues can mangage their business and connect with couples.
      </p>

      <h1>For Couples: Your Love Story, Digitised!</h1>
      <p>
        Discover a treasure trove of planning magic at your fingertips. From
        customisable checklists that sync with your timeline to a dreamy
        directory to find vendors that match your vibe and will bring your
        vision to life, our platform is your personal wedding planning assistant
        with all the tools you need to get you to "I Do". Get ready to say, "I
        planned my wedding, and it was a blast!"
      </p>

      <h1>
        For Venues and Vendors: Unleash the Power of Effortless Management
      </h1>
      <p>
        Calling all venues and vendors in the wedding industry! We're here to
        sprinkle some business magic your way. Manage bookings, showcase your
        packages, and connect with couples looking for a touch of magic for
        their big day. Happly is not just a platform; it's your way to seamless
        business operations.
      </p>

      <h1>What Makes Us Sparkle:</h1>

      <p>
        User-Friendly Tools: Navigate wedding planning blissfully with tools
        that feel like they were made just for you.
      </p>

      <p>
        Vendor Love: We're matchmakers for couples and vendors, creating
        connections that last beyond the wedding day.
      </p>

      <p>
        Easy Business Management: For venues and vendors, we've got the
        backstage covered with our brilliant business management tools so you
        can focus on creating enchanting moments.
      </p>

      <h1>Let’s Celebrate Love Together! </h1>
      <p>
        Join the Happly family on this incredible journey. Follow us on
        Facebook, Instagram, and TikTok for doses of inspiration, tips, and a
        sprinkle of wedding magic.
      </p>
      <p>
        At Happly, we don’t just give you tools to plan your wedding; we craft
        love stories. Let's get you from "Yes" to "I Do"!{" "}
      </p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-danger btn-">Visit our FAQ</button>
      </div>

      {/* new1 code     */}

      <div className="row g-0  position-relative my-5 ">
        <div className="col-md-6 mb-md-0 p-md-4 ">
          
        

          <img src={img1} className="rounded-circle  rounded-full w-96 h-96" alt="..." />
        </div>
        <div className="col-md-6 p-4 ps-md-0 my-2">
          <h1 className="mt-0 ">Our Reviews</h1>
          <p className="my-2">
            Another instance of placeholder content for this other custom
            component. It is intended to mimic what some real-world content
            would look like, and we're using it here to give the component a bit
            of body and size.
          </p>
          <Link to="/" className="stretched-link md-5">
            Go somewhere
          </Link>
        </div>
      </div>

      {/* new code */}

      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
              </p>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div> */}
          </div>
        </div>
      </div>

      {/* new2 code  */}

      <div className="card my-3">
        <div className="card-body">
          <h1 className="text-center">Michelle Langham - Couple Account User</h1>
          <p className="text-center card-text">
          "It's such an easy and fun platform for everything you need in one place. I would recommend it to brides-to-be, to make the stress less of planning a wedding on their own."
          </p>
        </div>
      </div>

         {/* new3 code  */}

      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-text h1">
          Join our Facebook Group to get help from and help other couples planning their wedding!
          </h1>
          <a href="/" className="btn btn-primary">
            Join Now
          </a>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;

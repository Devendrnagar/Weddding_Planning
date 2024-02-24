import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import Mountain5 from '../assets/7.jpg'
import Mountain6 from '../assets/6.jpg'
import DestinationData from "./DestinationData";
// import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (

    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="HAPPLY is here to make things easy and fun.
        Planning a wedding can be stressful and challenging. We are here to help with pulling off that special day perfectly.
        HAPPLY seamlessly integrates all aspects of your wedding from creating your own personalised website, generating invitations, managing your RSVPs, gift registry, budget and vendor liaison. We will be with you every step of the way, taking your planning to a whole new level, with reminders and to-do-lists.
        Worried about the money? Use our budget tool to keep track of funds and expenses making sure you are not left short!
        Make the perfect choice of venues and vendors using our reviews and ratings to find out what real clients have to say about their servic"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Are you a wedding venue and looking for a way to market, quote book all in one place?"
        text="Finally… A front-desk booking system for weddings.
        HAPPLY offers a reservation and management system where all enquiries, client liaison, quotations and to-do-list can be kept, all in one place!
        Enter your enquiries, and bookings received via phone or email. Manage guest’s information and keep track of discussions.
        Check availability and update the online calendar.
        Generate instant and professional quotes to send via email.
        Manage your venue profile, upload images, virtual tours and wedding package information, menus, directions and other information, all online and easily accessible to clients, making it easier for them to book with you.
        HAPPLY is easy to access from your laptop, phone or other devices.
        Are you worried about being out of the office and missing enquiries? Use your mobile device to stay in touch, never missing an enquiry, or updating client information on-the-go. "
        img1={Mountain3}
        img2={Mountain4}
      />

<DestinationData
        className="first-des"
        heading="Are you a DJ, florist, photographer, or another wedding service provider looking for more weddings?"
        text="YOUR BUSINESS – YOUR WAY
        HAPPLY offers couples FREE access to a myriad of suppliers. The vast directory has unique search features, taking the hassle out of searching for the perfect service provider.
        The location and/or availability search ensures that you only receive enquiries for weddings to which you are able to supply services to. Saving you time, money, and energy!
        Access to management tools.. "
        img1={Mountain6}
        img2={Mountain5}
      />
    </div>
    
  );
};

export default Destination;

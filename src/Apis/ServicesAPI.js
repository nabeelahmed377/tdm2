// import icon from "../images/icon.png"
import graphicsicon from "../images/graphics.png"
// import brandingicon from "../images/brandingicon.png"
import webicon from "../images/webicon.png"
import animation from "../images/animation.png"
import mobile from "../images/mobile-app.png"
import shopping from "../images/online-shopping.png"
import logo from "../images/logo-design.png"
import cms from "../images/digital.png"
import video from "../images/video-editing.png"
import image1 from "../images/port-img/200.jpg";
import image2 from "../images/port-img/201.jpg";
import image3 from "../images/port-img/202.jpg";
import image4 from "../images/port-img/203.jpg";
import image5 from "../images/port-img/204.jpg";
import image6 from "../images/port-img/205.jpg";


import post from "../images/ser-post.jpg"

const serviceapi = [
  {
    id: 1,
    icon: <img className="icon-class" src={webicon} />,
    image: <img className="icon-class" src={post} />,
    title: "Web Designing ",
    backimg: <img className="flip-backimg" src={image1} />,

  },
  {
    id: 2,
    icon: <img className="icon-class" src={graphicsicon} />,
    title: "Graphics Designing",
    backimg: <img className="flip-backimg" src={image2} />,

  },
  {
    id: 3,
    icon: <img className="icon-class" src={logo} />,
    title: "Logo Designing ",
    backimg: <img className="flip-backimg" src={image3} />,

  },
  {
    id: 4,
    icon: <img className="icon-class" src={shopping} />,
    title: "Ecommerce Application",
    backimg: <img className="flip-backimg" src={image4} />,

  },
  {
    id: 5,
    icon: <img className="icon-class" src={animation} />,
    title: "2D/3D Animation",
    backimg: <img className="flip-backimg" src={image5} />,
  },
  {
    id: 6,
    icon: <img className="icon-class" src={mobile} />,
    title: "Mobile Applications",
    backimg: <img className="flip-backimg" src={image6} />,

  },
  {
    id: 7,
    icon: <img className="icon-class" src={cms} />,
    title: "CMS Software ",
    backimg: <img className="flip-backimg" src={image1} />,

  },
  {
    id: 8,
    icon: <img className="icon-class" src={video} />,
    title: "Video Editing",
    backimg: <img className="flip-backimg" src={image2} />,

  },

];

export default serviceapi;
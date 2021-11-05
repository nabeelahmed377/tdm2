import image1 from "../images/port-img/1.jpg";
import image2 from "../images/port-img/2.jpg";
import image3 from "../images/port-img/3.jpg";
import image4 from "../images/port-img/4.jpg";
import image5 from "../images/port-img/5.jpg";
import image6 from "../images/port-img/6.jpg";
import video from "../images/video-editing.png"
import post from "../images/ser-post.jpg"
import data from "../images/sub-sec.jpg"


const portfolioapi = [
    {
        id: 1,
        image: <img className="img-responsive" src={image1} />,
        title: "Web Designing ",
        category: "webdesigning"

    },
    {
        id: 2,
        image: <img className="img-responsive" src={image2} />,
        title: "Web Designing ",
        category: "Branding"

    },
    {
        id: 3,
        image: <img className="img-responsive" src={image3} />,
        title: "Web Designing ",
        category: "graphicsDesigning"

    },
    {
        id: 4,
        image: <img className="img-responsive" src={image4} />,
        title: "graphicsDesigning",
        category: "logoDesigning"

    },
    {
        id: 5,
        image: <img className="img-responsive" src={image5} />,
        title: "Web Designing ",
        category: "ui/uxDesigning"

    },
    {
        id: 6,
        image: <img className="img-responsive" src={image6} />,
        title: "Web Designing ",
        category: "CMSDevelopment"

    },


];

export default portfolioapi;
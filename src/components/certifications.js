
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/certifications.css';
import nanoDegree from "../assets/images/nano-degree.webp";
import cn from "../assets/images/cn.jpeg";
import fullStack from "../assets/images/full-stack.png";
import goldBadge from "../assets/images/gold-badge.png";



export const Certifications = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1
    }
  };

  return (
    <section className="certifications" id="certifications">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="certificate-bx wow zoomIn">
                        <h2 className="neonText">ACHIEVEMENTS AND CERTIFICATIONS</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme certificate-slider">
                            <div className="certificate-item">
                                <img src={fullStack} alt="Image" />
                                <h5>Full Stack Web Development</h5>
                                <p>By- Microsoft Tech Saksham</p>
                            </div>
                            <div className="certificate-item">
                                <img src={nanoDegree} alt="Image" />
                                <h5>DSA in CPP</h5>
                                <p>By- Prepinsta</p>
                            </div>
                            <div className="certificate-item">
                                <img src={goldBadge} alt="Image" />
                                <h5>Gold Badge in CPP</h5>
                                <p>By- Hackerank</p>
                            </div>
                            <div className="certificate-item">
                                <img src={nanoDegree} alt="Image" />
                                <h5>Artificial Intelligence and Machine Learning</h5>
                                <p>By- Prepinsta</p>
                            </div>
                            <div className="certificate-item">
                                <img src={nanoDegree} alt="Image" />
                                <h5>SQL Course</h5>
                                <p>By- Prepinsta</p>
                            </div>
                            <div className="certificate-item">
                                <img src={nanoDegree} alt="Image" />
                                <h5>Competitive Coding</h5>
                                <p>By- Prepinsta</p>
                            </div>
                            <div className="certificate-item">
                                <img src={cn} alt="Image" />
                                <h5>The Bits and Bytes of Computer Networking</h5>
                                <p>By- Coursera</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
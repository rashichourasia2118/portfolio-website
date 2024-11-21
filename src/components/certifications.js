
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/certifications.css';
import nanoDegree from "../assets/images/nano-degree.webp";
import fullStack from "../assets/images/full-stack.png";
import aws from "../assets/images/aws.jpeg";
import azure from "../assets/images/azure.jpeg";



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
                                <img src={aws} alt="Image" />
                                <h5>AWS Certified Cloud Practioner</h5>
                                <p>By- Amazon</p>
                            </div>
                            <div className="certificate-item">
                                <img src={azure} alt="Image" />
                                <h5>AI-102 Azure AI Engineer Associate</h5>
                                <p>By- Microsoft</p>
                            </div>
                            <div className="certificate-item">
                                <img src={fullStack} alt="Image" />
                                <h5>Full Stack Web Development</h5>
                                <p>By- Microsoft Tech Saksham</p>
                            </div>
                            
                            
                            <div className="certificate-item">
                                <img src={nanoDegree} alt="Image" />
                                <h5>Artificial Intelligence and Machine Learning</h5>
                                <p>By- Prepinsta</p>
                            </div>
                            
                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
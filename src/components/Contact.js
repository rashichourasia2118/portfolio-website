
import {Container,Row,Col} from "react-bootstrap";
import  {useState} from 'react';
import contact from '../assets/images/contact-img.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css/contact.css';

export const Contact =()=>{
    const formInitialDetails ={
        firstName:'',
        lastName:'',
        email:'',
        phone:''
    }
    const [formDetails,setFormDetails]=useState(formInitialDetails);
    const [btnText,setBtnText]=useState('send');
    const [status,setStatus]=useState({});
    const onFormUpdate=(category,value)=>
    {
      setFormDetails({
        ...formDetails,
        [category]:value
      })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      setBtnText('Sending..');
    
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
    
        setBtnText("Sent");
        const result = await response.json();
    
        setFormDetails(formInitialDetails);
    
        if (result.code === 200) {
          setStatus({ success: true, message: 'Message Sent Successfully' });

        } else {
          setStatus({ success: false, message: 'Something Went Wrong, please try again later' });
        }
      } catch (error) {
        
        console.error("Unexpected error:", error);
        setStatus({ success: false, message: 'Unexpected error, please try again later' });
      }
    };
    
    return(
       <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6} size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                   <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} alt="Contact Us"/>
                  }
                 </TrackVisibility>
            </Col>
            <Col md={6} size={12}>
                  <TrackVisibility>
                   {({ isVisible }) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="neonText">Get In Touch</h2>
                    <form name="contact" method="POST" action="/api/contact" onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                              <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                              <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>

                            </Col>
                            <Col sm={6} className="px-1">
                               <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate('email',e.target.value)}/>

                            </Col>
                            <Col sm={6} className="px-1">
                               <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=>onFormUpdate('phone',e.target.value)}/>

                            </Col>
                            <Col>
                              <textarea rows="6" value={formDetails.message} placeholder="Type your message here" onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                              <button className="contact-btn" type="submit">
                              <strong>{btnText}</strong>
                               <div id="container-stars">
                                 <div id="stars"></div>
                               </div>

                              <div id="glow">
                              <div class="circle"></div>
                               <div class="circle"></div>
                                </div>
                               </button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                <p className={status.success===false?"danger":"success"}>{status.message} </p>
                                </Col>
                            }
                        </Row>
                    </form>
                    </div>}
                    </TrackVisibility>
                  </Col>
            </Row>

        </Container>
       </section>
    )
}

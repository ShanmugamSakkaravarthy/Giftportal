import Icon from '@mui/material/Icon';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";
import "./About.css";
import img3 from "/src/assets/images/My project-1.png"
import img4 from "/src/assets/images/orange-circle.png"
import { useNavigate } from 'react-router-dom';
const Dash = () => {
//   const navigate = useNavigate('');
//   function handleclick(){
//      navigate('/venue');
//   }
//   function handleback(){
//      navigate('/Navbar');
//   }
  return (
    <>
    <div className='root1'>
    <div className='circle'>
    {/* <a href = "#"  style={{textDecoration:"none",color:"white",marginLeft:1300,width:500}} onClick={handleback}>Back</a> */}
        <img src={img4}/>
    </div>
    <div className='sounder'>
        {/* <img src={img3}/> */}
    </div>
    <div className="comp">
        <h1>About Us ?</h1>
    </div>
    <div className="comp1">
        <h1>Effortless Elegance plans wedding, social, and corporate events in Austin, Texas. 
            The group has a simple and traditional-feeling website focusing on images to convey their message. </h1>
    </div>
    <div className="cname">
        <img src="https://socialtables.wpenginepowered.com/wp-content/uploads/2021/02/Brilliant_elegance-min-1536x714.png"/>
    </div>
    <div className="comp2">
        <h1>The company is owned and operated by <span>Shanmugam</span> . As an experienced and passionate event decorator, <span>Shanmugam</span>  brings a wealth of creativity and expertise to every project. With a background in design and a keen eye for detail, <span>Shanmugam</span> has curated a team of skilled professionals who share a common vision of delivering extraordinary event experiences.
        Company name is mentioned above . List of services includes Wedding , Birthday Party , NewYear Celebration , Engagement etc...</h1>
    </div>
     <div  className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>shanmugam2004@gmail.com</span>
        </p>
        <p>
          Github Username : <span>shanmugam</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/sounder-ab6453244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <LinkedInIcon />
            </Icon>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FacebookIcon/>
            </Icon>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=%2F_.ds._editz%2F&source=desktop_nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <InstagramIcon />
            </Icon>
          </a>
        </div>
      </div>
    </div> 
          <div className='click1'>
      {/* <a href='#' onClick={handleclick}>NEXT PAGE</a> */}
     </div>
     </div>
    </>
  );
};

export default Dash;
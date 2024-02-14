import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
    {/* <a href="/">
      <h3 style={{paddingTop: "80px", textAlign: "center",textDecoration:"underline"}}>NEXT PAGE</h3>
      </a> */}
      <Link to ="/home"><a style={{padding: '5px'}}>NEXT PAGE</a></Link>
    </>
  );
};

export default About;
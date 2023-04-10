import Mainpic from "./mainpic.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home () {
return <div  className="home-page">
<div>
    <h1>Hi! I'm Cinder</h1>
    <p>An aspiring web developer</p>
    <a href="https://www.facebook.com/cinder.bayongasan/"><FacebookIcon/></a>
    <a href="https://ph.linkedin.com/in/cinder-bayongasan-35781321a"><LinkedInIcon/></a>
    <a href="https://github.com/cinderyb"><GitHubIcon/></a>
    <a href="https://www.instagram.com/cinderbayo/?hl=en"><InstagramIcon/></a>
    
</div>
    
    <img src={Mainpic} alt="me"></img>
</div>

}


export default Home;
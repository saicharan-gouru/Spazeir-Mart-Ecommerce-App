import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


function Footer(){

    return(
        <div>
        <footer className="hero-footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/saicharangouru/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-media-icon" style={{ fontSize: "30px" }}>></LinkedInIcon></a>
                <a href="https://twitter.com/saicharangouru" target="_blank" rel="noopener noreferrer"><TwitterIcon className="social-media-icon" style={{ fontSize: "30px" }}>></TwitterIcon></a>
                <a href="https://github.com/saicharan-gouru/" target="_blank" rel="noopener noreferrer"><GitHubIcon className="social-media-icon" style={{ fontSize: "30px" }}>></GitHubIcon></a>
            </div>
            <p>Made with 💖 by <a className="footer-credits" href="https://saicharangouru.netlify.app" target="_blank" rel="noopener noreferrer">Saicharan Gouru <LaunchIcon style={{ fontSize: "15px" }}></LaunchIcon></a></p>
            <small>ⓒ Spazeir Mart | 2022</small>
         </footer>
    </div>
    );
}

export { Footer };
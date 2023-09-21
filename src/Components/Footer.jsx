import "./styles/Landingpage.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="footerwala">
      <ul className="footerWrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span>
            <FacebookIcon />
          </span>
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span>
            <TwitterIcon />
          </span>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span>
            <InstagramIcon />
          </span>
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span>
            <GitHub />
          </span>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span>
            <YouTube />
          </span>
        </li>
      </ul>
    </div>
  );
}

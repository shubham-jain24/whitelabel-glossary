import React from "react";
import "./Footer.css";

type OwnProps = {
  email: string;
  phone: string;
};

type Props = OwnProps;

const Footer: React.FC<Props> = (props) => {
  const loadContactDetails = () => {
    return (
      <div>
        <div className="contact-box">
          <img
            className="contact-icon"
            src="src/Assets/Images/Logo/Email.png"
          />
          <span>{props.email}</span>
        </div>
        <div className="contact-box">
          <img
            className="contact-icon"
            src="src/Assets/Images/Logo/Phone.png"
          />
          <span>{props.phone}</span>
        </div>
      </div>
    );
  };

  const loadSocialNetwork = () => {
    return (
      <div className="social-logo">
        <a className="social-link" href="#">
          <img
            className="social-logo-image"
            src="src/Assets/Images/Logo/Twitter.png"
          />
        </a>
        <a className="social-link" href="#">
          <img
            className="social-logo-image"
            src="src/Assets/Images/Logo/Facebook.png"
          />
        </a>
        <a className="social-link" href="#">
          <img
            className="social-logo-image"
            src="src/Assets/Images/Logo/Instagram.png"
          />
        </a>
      </div>
    );
  };
  return (
    <div className="footer-bg">
      <div className="footer-text">Connect With Me!</div>
      <div className="footer-main">
        {loadContactDetails()}
        {loadSocialNetwork()}
      </div>
    </div>
  );
};

export default Footer;
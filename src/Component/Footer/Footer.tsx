import React from "react";
import ThemeContext from "../../Utils/ThemeContext";
import facebook from '../../Assets/Images/Logo/Facebook.png';
import instagram from '../../Assets/Images/Logo/Instagram.png';
import twitter from '../../Assets/Images/Logo/Twitter.png';
import phone from '../../Assets/Images/Logo/Phone.png';
import email from '../../Assets/Images/Logo/Email.png';



type OwnProps = {
  email: string;
  phone: string;
  whitelabelId: string;
};

type Props = OwnProps;

const Footer: React.FC<Props> = (props) => {
  const themeContext = React.useContext(ThemeContext);
  const loadContactDetails = () => {
    return (
      <div className="">
        <div className={`flex items-center p-2 ${themeContext.textFourth}`}>
          <img
            className="w-6 me-2"
            src={email}
          />
          <span>{props.email}</span>
        </div>
        <div className={`flex items-center p-2 ${themeContext.textFourth}`}>
          <img
            className="w-6 me-2"
            src={phone}
          />
          <span>{props.phone}</span>
        </div>
      </div>
    );
  };

  const loadSocialNetwork = () => {
    return (
      <div className="flex flex-row">
        <img
          className="w-10 h-10 m-2 aspect-square mix-blend-multiply"
          src={twitter}
        />
        <img
          className="w-10 h-10 m-2 aspect-square mix-blend-multiply"
          src={facebook}
        />
        <img
          className="w-10 h-10 m-2 aspect-square mix-blend-multiply"
          src={instagram}
        />
      </div>
    );
  };

  const designerMessage = () => {
    return <div className={`${themeContext.textFifth} flex justify-end me-2`}>Created By: Shubham Jain </div>;
  };

  return (
    <div className={`${themeContext.bgFirst} inset-x-0 bottom-0`}>
      <div className={`${themeContext.textFourth} flex justify-center p-3 text-lg`}>Connect With Me!</div>
      <div className="flex justify-between">
        {loadContactDetails()}
        {loadSocialNetwork()}
      </div>
      <div>{designerMessage()}</div>
    </div>
  );
};

export default Footer;

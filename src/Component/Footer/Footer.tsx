import React from "react";
import { getThemeColor, themingProps } from '../../Constants/Theme';

type OwnProps = {
  email: string;
  phone: string;
  whitelabelId: string;
};

type Props = OwnProps;

const Footer: React.FC<Props> = (props) => {
  const theme: themingProps = getThemeColor(props.whitelabelId);
  const loadContactDetails = () => {
    return (
      <div className="">
        <div className={`flex items-center p-2 ${theme.textFourth}`}>
          <img
            className="w-6 me-2"
            src="src/Assets/Images/Logo/Email.png"
          />
          <span>{props.email}</span>
        </div>
        <div className={`flex items-center p-2 ${theme.textFourth}`}>
          <img
            className="w-6 me-2"
            src="src/Assets/Images/Logo/Phone.png"
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
          src="src/Assets/Images/Logo/Twitter.png"
        />
        <img
          className="w-10 h-10 m-2 aspect-square mix-blend-multiply"
          src="src/Assets/Images/Logo/Facebook.png"
        />
        <img
          className="w-10 h-10 m-2 aspect-square mix-blend-multiply"
          src="src/Assets/Images/Logo/Instagram.png"
        />
      </div>
    );
  };

  const designerMessage = () => {
    return <div className={`${theme.textFifth} flex justify-end me-2`}>Created By: Shubham Jain </div>;
  };

  return (
    <div className={`${theme.bgFirst} inset-x-0 bottom-0`}>
      <div className={`${theme.textFourth} flex justify-center p-3 text-lg`}>Connect With Me!</div>
      <div className="flex justify-between">
        {loadContactDetails()}
        {loadSocialNetwork()}
      </div>
      <div>{designerMessage()}</div>
    </div>
  );
};

export default Footer;

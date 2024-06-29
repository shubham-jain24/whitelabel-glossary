import React from "react";
import Navbar from "../Navbar/Navbar";
import ThemeContext from "../../Utils/ThemeContext";

export type HeaderProps = {
  logo: string;
  title: string;
  whitelabelId: string;
};

type Props = HeaderProps;

const Header: React.FC<Props> = (props) => {
  const themeContext = React.useContext(ThemeContext);

  const headerLogo = () => {
    return (
      <span className="flex p-2 w-24">
        <img src={`src/Assets/Images/Logo/${props.whitelabelId}.png`} />
      </span>
    );
  };
  const headerText = () => {
    return <span className="">{props.title}</span>;
  };

  const headerBackground = () => {
    return (
      <div className={`flex justify-between ${themeContext.bgFirst} ${themeContext.textFourth} shadow-xl`}>
        <div className="flex">
          {headerLogo()}
          <div className="flex items-center text-2xl ms-5">{headerText()}</div>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <Navbar/>
          </div>
        </div>
      </div>
    );
  };

  return <>{headerBackground()}</>;
};

export default Header;

import React from "react";
import Navbar from "../Navbar/Navbar";
import { getThemeColor, themingProps } from '../../Constants/Theme';

export type HeaderProps = {
  logo: string;
  title: string;
  whitelabelId: string;
};

type Props = HeaderProps;

const Header: React.FC<Props> = (props) => {
  const headerLogo = () => {
    return (
      <span className="flex p-2 w-24">
        <img src={props.logo} />
      </span>
    );
  };
  const headerText = () => {
    return <span className="">{props.title}</span>;
  };

  const theme: themingProps = getThemeColor(props.whitelabelId);

  const headerBackground = () => {
    return (
      <div className={`flex justify-between ${theme.bgFirst} ${theme.textFourth} shadow-xl`}>
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

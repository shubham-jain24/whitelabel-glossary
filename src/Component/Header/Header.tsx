import React from "react";
import Navbar from "../Navbar/Navbar";
import ThemeContext from "../../Utils/ThemeContext";
import logo1 from '../../Assets/Images/Logo/1.png';
import logo2 from '../../Assets/Images/Logo/2.png';
import logo3 from '../../Assets/Images/Logo/3.png';


export type HeaderProps = {
  logo: string;
  title: string;
  whitelabelId: string;
};

type Props = HeaderProps;

const Header: React.FC<Props> = (props) => {
  const themeContext = React.useContext(ThemeContext);

  const headerLogo = () => {
    const getLogo = (whitelabelId: string) => {
      switch(whitelabelId){
        case "1":
          return (<img src={logo1} />);
        case "2":
          return (<img src={logo2} />);
        case "3":
          return (<img src={logo3} />);
        default:
          return (<></>);
      }
    }
    return (
      <span className="flex p-2 w-24">
        {getLogo(props.whitelabelId)}
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

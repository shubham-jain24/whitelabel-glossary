import React from "react";
import "./Header.css";

export type HeaderProps = {
  logo: string;
  title: string;
};

type Props = HeaderProps;

const Header: React.FC<Props> = (props) => {
  const headerLogo = () => {
    return (
      <span className="page-header-logo">
        <img src={props.logo} />
      </span>
    );
  };
  const headerText = () => {
    return <span className="page-header-text">{props.title}</span>;
  };

  const headerBackground = () => {
    const headerBackgroundClassName = `page-header-background`;
    return (
      <div className="header-parent">
        <div className="logo-parent">{headerLogo()}</div>
        <div>{headerText()}</div>
      </div>
    );
  };

  return <>{headerBackground()}</>;
};

export default Header;

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreatBlogPost from "../CreateBlogPost/CreateBlogPost";
import  DisplayBlog from "../DisplayBlog/DisplayBlog";
import { TextData } from "../../Temp/TextData";
import "./MainPage.css";
type OwnProps = {
  whitelabelId: string;
};

type Props = OwnProps;

const MainPage: React.FC<Props> = (props) => {
  const testData = TextData();
  console.log(testData);
  const loadHeaderProps = () => {
    return {
      logo: testData.pageDetails.logo,
      title: testData.pageDetails.title,
    };
  };

  const loadFooterProps = () => {
    return {
      email: testData.personalDetails.email,
      phone: testData.personalDetails.phone,
    };
  };

  return (
    <div className="application-base">
      <Header {...loadHeaderProps()} />
      <div className="body-data">
        <CreatBlogPost/>
        <DisplayBlog/>
      </div>
      <Footer {...loadFooterProps()} />
    </div>
  );
};

export default MainPage;

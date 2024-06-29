import React, { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreatBlogPost from "../CreateBlogPost/CreateBlogPost";
import  DisplayBlog from "../DisplayBlog/DisplayBlog";
import { TextData } from "../../Temp/TextData";
import Login from "../Login/Login";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Signup from "../Signup/Signup";
import { whitelabelId } from "../../App";
import { getThemeColor, themingProps } from '../../Constants/Theme';
type OwnProps = {
  whitelabelId: string;
};

type Props = OwnProps;

const MainPage: React.FC<Props> = (props) => {
  const theme: themingProps = getThemeColor(props.whitelabelId);
  const testData = TextData();
  console.log(testData);
  const loadHeaderProps = () => {
    return {
      logo: testData.pageDetails.logo,
      title: testData.pageDetails.title,
      whitelabelId: props.whitelabelId
    };
  };

  const loadFooterProps = () => {
    return {
      email: testData.personalDetails.email,
      phone: testData.personalDetails.phone,
      whitelabelId: props.whitelabelId,
    };
  };

  const AppLayout = () => {
    return (
      <div className={`${theme.bgFourth} flex flex-col min-h-[100%]`}>
        <Header {...loadHeaderProps()} />
        <div className="min-h-[100vh]">
          <Outlet></Outlet>
        </div>
        <Footer {...loadFooterProps()} />
      </div>
    )
  }

  const paths = [
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <><DisplayBlog whitelabelId={props.whitelabelId}/><DisplayBlog whitelabelId={props.whitelabelId}/></>
        },
        {
          path: "/create",
          element: <CreatBlogPost whitelabelId={props.whitelabelId}/>
        },
        {
          path: "/login",
          element: <Login whitelabelId={props.whitelabelId}></Login>
        },
        {
          path: "/signup",
          element: <Signup whitelabelId={props.whitelabelId}></Signup>
        }
      ],
      errorElement: <DisplayBlog whitelabelId={props.whitelabelId}/>
    }
  ];

  const appRouter = createBrowserRouter(paths);

  return (
    <RouterProvider router={appRouter}/>
  );
};

export default MainPage;

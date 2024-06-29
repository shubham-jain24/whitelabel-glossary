import React, { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreatBlogPost from "../CreateBlogPost/CreateBlogPost";
import  DisplayBlog from "../DisplayBlog/DisplayBlog";
import { TextData } from "../../Temp/TextData";
import Login from "../Login/Login";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ThemeContext from "../../Utils/ThemeContext";
import Signup from "../Signup/Signup";

type OwnProps = {
  whitelabelId: string;
};

type Props = OwnProps;

const MainPage: React.FC<Props> = (props) => {
  const themeContext = React.useContext(ThemeContext);
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
      <div className={`${themeContext.bgFourth} flex flex-col min-h-[100%]`}>
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
          element: <><DisplayBlog /><DisplayBlog /></>
        },
        {
          path: "/create",
          element: <CreatBlogPost />
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
      errorElement: <DisplayBlog />
    }
  ];

  const appRouter = createBrowserRouter(paths);

  return (
    <RouterProvider router={appRouter}/>
  );
};

export default MainPage;

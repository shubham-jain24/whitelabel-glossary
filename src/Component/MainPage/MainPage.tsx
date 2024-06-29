import React, { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreatBlogPost from "../CreateBlogPost/CreateBlogPost";
import { TextData } from "../../Temp/TextData";
import Login from "../Login/Login";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ThemeContext from "../../Utils/ThemeContext";
import Signup from "../Signup/Signup";
import DisplayPostList from "../DisplayPostList/DisplayPostList";

type OwnProps = {
  whitelabelId: string;
};

type Props = OwnProps;

const MainPage: React.FC<Props> = (props) => {
  const themeContext = React.useContext(ThemeContext);
  const testData = TextData();
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
          element: <DisplayPostList whitelabelId={props.whitelabelId}/>
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
      errorElement: <DisplayPostList whitelabelId={props.whitelabelId}/>
    }
  ];

  const appRouter = createBrowserRouter(paths);

  return (
    <RouterProvider router={appRouter}/>
  );
};

export default MainPage;

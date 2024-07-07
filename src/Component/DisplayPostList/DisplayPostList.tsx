import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayBlog, { BlogPostData } from "../DisplayBlog/DisplayBlog";
import ThemeContext from "../../Utils/ThemeContext";

type Props = {
  whitelabelId: string;
};

const DisplayPostList: React.FC<Props> = (props) => {
  const themeContext = React.useContext(ThemeContext);

  const [postList, setPostList] = useState([] as BlogPostData[]);

  const fetchPostList = () => {
    const body = {
      whitelabelId: props.whitelabelId,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("/Prod/GetPost", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.body.data);
        const blogData: BlogPostData[] = data.body.data;
        setPostList(blogData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  const renderPostList = () => {
    return (
      <div>
        {postList.map((post) => (
          <DisplayBlog key={post.PostId} {...post} />
        ))}
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <>
        <div
          className={`w-8/12 m-auto ${themeContext.bgFifth} rounded-lg my-8 shadow-2xl min-h-60 text-lg mb-14 opacity-45`}
        ></div>
        <div
          className={`w-8/12 m-auto ${themeContext.bgFifth} rounded-lg my-8 shadow-2xl min-h-60 h-1/4 text-lg  mb-14 opacity-50`}
        ></div>
        <div
          className={`w-8/12 m-auto ${themeContext.bgFifth} rounded-lg my-8 min-h-60 shadow-2xl h-1/4 text-lg  mb-14 opacity-40`}
        ></div>
      </>
    );
  };

  return <>{postList.length ? renderPostList() : renderLoading()}</>;
};

export default DisplayPostList;

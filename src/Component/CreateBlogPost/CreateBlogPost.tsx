import React, { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import ThemeContext from "../../Utils/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../../Store/UserDetails";
import { useSelector } from "react-redux";
import { IRootState } from "../../Store/appStore";

type Props = {
  whitelabelId: string;
};

const CreatBlogPost: React.FC<Props> = (props) => {
  const userDetails: UserDetails = useSelector(
    (store: IRootState) => store.user.userDetails
  );
  const navigate = useNavigate();
  const [shimmer, setShimmer] = useState(true);

  const renderUpdate = useEffect(() => {
    if (userDetails.userId.length == 0) {
      navigate("/login");
    }
    setShimmer(false);
  }, []);

  const themeContext = React.useContext(ThemeContext);
  const editor = React.useRef(null);
  const blogData =
    '<p style="text-align: center;"><span style="font-family: Impact, Charcoal, sans-serif; font-size: 34px; color: rgb(204, 0, 0);">My Life Blog</span></p><p><br></p><p>Hey,</p><p>Mu Name is Shubham Jain, Dwelling in north delhi, always looking for new ways of streamling my life with the pinch of healthy conversation, meeting new people, exploring new cities and much more.</p><p>Stranges are legit a great book to explore, each trip filled with totally different feelings, a new person to explore and new way of roaming around.</p><p><img src="https://media.istockphoto.com/id/1354042785/vector/books-stack-decorated-with-christmas-tree-balls-winter-holidays-concept-isolated-on-white.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=SqwC9UWChKKKo0jSpBcLiSb4yp-0_OEd-00k8awWRtc=" alt="" width="300"></p><p><br></p><p>Never be afraid of challenges, always feel free to challenge others and never hetate to explore, because if you hesitate today, you will regret tomorrow.</p><p>Okay so it was really nice talking to you all miss me hhhaaaa</p><p>Chalo hope some one will be up to meet me in the next trip.</p><p><br></p>';
  const [editorContent, setEditorContent] = React.useState(blogData);
  const postId = uuidv4();
  console.log(postId);

  const textEditor = () => {
    return (
      <div>
        <JoditEditor
          ref={editor}
          value={editorContent}
          onChange={(newContent) => setEditorContent(newContent)}
        />
      </div>
    );
  };

  const renderHeading = () => {
    return (
      <div
        className={`text-4xl ${themeContext.textFirst} flex justify-center m-10`}
      >
        Create Blog Post
      </div>
    );
  };

  const createBlogPost = () => {
    const body = {
      whitelabelId: props.whitelabelId,
      email: userDetails.userId,
      postId: uuidv4(),
      postData: editorContent,
      userName: userDetails.userName,
      age: userDetails.age,
    };
    axios
      .post(
        "https://6ijq8h7rq7.execute-api.eu-north-1.amazonaws.com/Prod/CreatePost",
        body
      )
      .then((response) => {
        setEditorContent("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderBlogPostShimmer = () => {
    return (
      <div
        className={`w-9/12 flex flex-col m-auto ${themeContext.bgFifth} h-1/2`}
      ></div>
    );
  };

  const renderCreateBlogPost = () => {
    return (
      <div className="w-9/12 flex flex-col m-auto">
        <div>{renderHeading()}</div>
        <div> {textEditor()} </div>
        <div className="flex justify-center">
          <button
            className={`${themeContext.bgFirst} ${themeContext.textFifth} w-1/2 p-2 m-4 rounded-md shadow-xl`}
            onClick={createBlogPost}
          >
            Create Post
          </button>
        </div>
      </div>
    );
  };

  return <>{shimmer ? renderBlogPostShimmer() : renderCreateBlogPost()}</>;
};

export default CreatBlogPost;

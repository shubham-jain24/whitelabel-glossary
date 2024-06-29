import React from "react";
import parser from 'html-react-parser';
import ThemeContext from "../../Utils/ThemeContext";

export interface BlogPostData {
    Age?: string;
    PostData?: string;
    PostId?: string;
    UserId?: string;
    UserName?: string;
}

type Props = BlogPostData;

const DisplayBlog: React.FC<Props> = (props) => {
    const themeContext = React.useContext(ThemeContext);

    const blogData = props.PostData ? props.PostData : "";

    const [showMore, setShowMore] = React.useState(true)
    return (
        <div className={`w-8/12 m-auto ${themeContext.bgFifth} rounded-lg my-8 shadow-2xl ${themeContext.textFirst} text-lg`}>
            <div className={showMore ? `p-4` : "p-4 overflow-hidden max-h-52"}>
                {parser(blogData)}
            </div>
            <div className={`flex justify-center mt-2 p-2 font-bold ${themeContext.textFifth} ${themeContext.bgFirst}`} onClick={() => setShowMore(!showMore)}>{showMore ? "Collapse" : "Expand" }</div>
        </div>
    )


}

export default DisplayBlog;
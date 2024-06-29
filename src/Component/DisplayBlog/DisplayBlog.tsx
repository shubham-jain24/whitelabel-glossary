import React from "react";
import parser from 'html-react-parser';
import ThemeContext from "../../Utils/ThemeContext";

type Props = {}

const DisplayBlog: React.FC<Props> = (props) => {
    const themeContext = React.useContext(ThemeContext);

    const blogData = '<p style="text-align: center;"><span style="font-family: Impact, Charcoal, sans-serif; font-size: 34px; color: rgb(204, 0, 0);">My Life Blog</span></p><p><br></p><p>Hey,</p><p>Mu Name is Shubham Jain, Dwelling in north delhi, always looking for new ways of streamling my life with the pinch of healthy conversation, meeting new people, exploring new cities and much more.</p><p>Stranges are legit a great book to explore, each trip filled with totally different feelings, a new person to explore and new way of roaming around.</p><p><img src="https://media.istockphoto.com/id/1354042785/vector/books-stack-decorated-with-christmas-tree-balls-winter-holidays-concept-isolated-on-white.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=SqwC9UWChKKKo0jSpBcLiSb4yp-0_OEd-00k8awWRtc=" alt="" width="300"></p><p><br></p><p>Never be afraid of challenges, always feel free to challenge others and never hetate to explore, because if you hesitate today, you will regret tomorrow.</p><p>Okay so it was really nice talking to you all miss me hhhaaaa</p><p>Chalo hope some one will be up to meet me in the next trip.</p><p><br></p>';

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